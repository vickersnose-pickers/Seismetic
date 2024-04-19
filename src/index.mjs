import express from 'express';
import http from 'node:http';
import { createBareServer } from "bsn";
import path from 'node:path';

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
app.use('/assets', express.static(path.join(__dirname, '/src/assets')));

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
