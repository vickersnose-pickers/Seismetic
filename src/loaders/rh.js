import express from 'express';
import http from 'node:http';
import { createBareServer } from "bsn";
import { dynamicPath } from "@nebula-services/dynamic";
import path from 'node:path';
import createRammerhead from "rammerhead/src/server/index.js";
import { hostname } from "node:os";
import Unblocker from "fetch-behind";

const PORT = 4242;
const BareDirectory = '/bare/';
const FrontEnd = 'public';
const BrowserPages = 'BrowserPages';
const __dirname = process.cwd();
const rh = createRammerhead();

const server = http.createServer();
const app = express(server);
const bareServer = createBareServer(BareDirectory);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, FrontEnd)));
app.use('/BrowserPages', express.static(path.join(__dirname, `/src/${BrowserPages}`)));
app.use("/dynamic/", express.static(dynamicPath));
app.use('/Assets', express.static(path.join(__dirname, '/src/assets')));
var unblocker = new Unblocker({prefix: '/webinstance/'});
app.use(unblocker);

const rammerheadScopes = [
	"/rammerhead.js",
	"/hammerhead.js",
	"/transport-worker.js",
	"/task.js",
	"/iframe-task.js",
	"/worker-hammerhead.js",
	"/messaging",
	"/sessionexists",
	"/deletesession",
	"/newsession",
	"/editsession",
	"/needpassword",
	"/syncLocalStorage",
	"/api/shuffleDict"
];
const rammerheadSession = /^\/[a-z0-9]{32}/;
function shouldRouteRh(req) {
	const url = new URL(req.url, "http://0.0.0.0");
	return (
	  rammerheadScopes.includes(url.pathname) ||
	  rammerheadSession.test(url.pathname)
	);
  }
  
  function routeRhRequest(req, res) {
	rh.emit("request", req, res);
  }

  function routeRhUpgrade(req, socket, head) {
	rh.emit("upgrade", req, socket, head);
  }

app.use((req, res, next) => {
  if(shouldRouteRh(req)) rh.emit("request", req, res); else next();
});

server.on('request', (req, res) => {
    if (bareServer.shouldRoute(req)) {
        bareServer.routeRequest(req, res);
      } else if (shouldRouteRh(req)) {
        routeRhRequest(req, res);
      } else {
        app(req, res);
      }
});

server.on('upgrade', (req, socket, head) => {
    if (bareServer.shouldRoute(req)) {
        bareServer.routeUpgrade(req, socket, head);
      } else if (shouldRouteRh(req)) {
        routeRhUpgrade(req, socket, head);
      } else {
		socket.end();
	  }
});

server.listen(PORT, () => {
    console.log(`✅ | Successfully started Seismetic`);
    console.log(`👁️ | Running at http://localhost:${PORT}`);
});
