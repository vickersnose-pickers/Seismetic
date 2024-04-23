import { argv } from 'process';
import { readFile, writeFile} from 'fs/promises';
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

function Handle(param) {
    eval(`${param}()`)
}

if (process.argv.length <= 2) {
    console.error("Usage: No Parameter Detected");
    help();
    process.exit(1);
}

function hi() {
    console.log('hey from test service')
}

function help() {
    console.log(`TestService 1.0.0`);
    console.log(`-----------------`);
    console.log();
    console.log('npm test install <param> / Installs any loader from loaders directory');
    console.log();
    console.log('npm test reset / Resets the loader to its stock form');
    console.log();
    console.log('npm test parrot / parrot');
    console.log();
}

function parrot() {
    exec('curl parrot.live')
}

const parameter = process.argv[2];
Handle(parameter);
