//configuration
console.log('Starting Seismetic -');
const BareDirectory = '/bare/';
const PORT = 8080;
const FrontEnd = 'public';
const BrowserPages = 'BrowserPages';

import express from 'express';
import http from 'node:http';
import { createBareServer } from "bsn";
import path from 'node:path';

const HTTP_S = http.createServer();
console.log('* Created Server');
const __dirname = process.cwd();
const app = express(HTTP_S);
const bareServer = createBareServer(BareDirectory);
console.log('* Created Bare Server');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, FrontEnd)));
app.use('/BrowserPages', express.static(path.join(__dirname, BrowserPages)));

HTTP_S.on('request', (req, res) => {
    if (bareServer.shouldRoute(req)) {
      bareServer.routeRequest(req, res);
    } else {
      app(req, res);
    }
  });
  
  HTTP_S.on('upgrade', (req, socket, head) => {
    if (bareServer.shouldRoute(req)) {
      bareServer.routeUpgrade(req, socket, head);
    } else {
      socket.end();
    }
  });
  
  HTTP_S.on('listening', () => {
    console.log(`Succesfully started Seismetic`);
    console.log(`Running at http://localhost:${PORT}`);
  });
  
  HTTP_S.listen({
    port: PORT,
  });