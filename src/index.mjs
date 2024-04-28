import express from 'express';
import http from 'node:http';
import { createBareServer } from "bsn";
import { dynamicPath } from "@nebula-services/dynamic";
import path from 'node:path';
import { hostname } from "node:os";
import Unblocker from "fetch-behind";

const PORT = 4242;
const BareDirectory = '/bare/';
const FrontEnd = 'public';
const BrowserPages = 'BrowserPages';
const __dirname = process.cwd();

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

server.on('request', (req, res) => {
    if (bareServer.shouldRoute(req)) {
        bareServer.routeRequest(req, res);
    } else {
        app(req, res);
    }
});

server.on('upgrade', (req, socket, head) => {
    if (bareServer.shouldRoute(req)) {
        bareServer.routeUpgrade(req, socket, head);
    } else {
        socket.end();
    }
});

server.listen(PORT, () => {
    console.log(`✅ | Successfully started Seismetic`);
    console.log(`👁️ | Running at http://localhost:${PORT}`);
});
