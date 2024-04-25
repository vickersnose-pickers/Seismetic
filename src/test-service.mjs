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
    console.log('npm test install <param> / Installs any loader from loaders directory "rammerhead", "nodeunblocker", "multi" ');
    console.log();
    console.log('npm test reset / Resets the loader to its stock form');
    console.log();
    console.log('npm test parrot / parrot');
    console.log();
    console.log('npm test version / Shows the Seismetic Version');
    console.log();
    console.log('npm test get_rh_sessions / Gets all the Rammerhead Sessions');
    console.log();
    console.log('npm test remove_rh_session <Param> / Removes the Rammerhead Session ');
    console.log();
}

function parrot() {
    exec('curl parrot.live')
}

function install() {
    const installer = process.argv[3];
    eval(`${installer}_install()`)
}

function rammerhead_install() {
  try {
    const rammerheadPath = require.resolve('rammerhead');
    console.log('--> Overriding');
    rammerhead_installscriptholyguacamoleyournotfindingthisvariableandthatsasimplefact()
} catch (error) {
    console.log('--> Rammerhead not Detected! Auto installing');
    exec('npm install https://github.com/holy-unblocker/rammerhead/releases/download/v1.2.41-holy.5/rammerhead-1.2.41-holy.5.tgz');
    rammerhead_installscriptholyguacamoleyournotfindingthisvariableandthatsasimplefact()
}
};

function multi_install() {
  exec('npm install unblocker');
  exec('npm install https://github.com/holy-unblocker/rammerhead/releases/download/v1.2.41-holy.5/rammerhead-1.2.41-holy.5.tgz');
  multi_installationgeewillikersohmygollygeeiswearimgettingreallymadthatihavetorightthisfunctionoverandoverandoveragainlikewhenwillievercatchabreakAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa();
};

function nodeunblocker_install() {
  try {
    const nodeunblockerPath = require.resolve('unblocker');
    console.log('--> Overriding');
    nodeunblocker_installscriptgeeperscreepersifyousomehowmanagetotypethisintothecommandlineyouwillreceiveacookie()
    
} catch (error) {
    console.log('--> Node Unblocker not Detected! Auto installing');
    exec('npm install unblocker');
    nodeunblocker_installscriptgeeperscreepersifyousomehowmanagetotypethisintothecommandlineyouwillreceiveacookie()
}
};




async function reset() {
    try {
      const data = await readFile('./src/loaders/default.js', 'utf8');
      console.log('// Reseting Bootloader')
      await writeFile('./src/index.mjs', data);
      console.log('Data written to index.mjs successfully!');
      const config = {
        isRammerheadEnabled: false,
        isNodeUnblockerEnabled: false
      };
      const jsonConfig = JSON.stringify(config, null, 2);
      fs.writeFileSync('./public/status.json', jsonConfig, 'utf8');
    } catch (error) {
      console.error('Error reading or writing file:', error);
    }
  }

  async function rammerhead_installscriptholyguacamoleyournotfindingthisvariableandthatsasimplefact() {
    try {
      const data = await readFile('./src/loaders/rh.js', 'utf8');
      console.log('// Installing Rammerhead')
      await writeFile('./src/index.mjs', data);
      console.log('Data written to index.mjs successfully!');
      const config = {
        isRammerheadEnabled: true,
        isNodeUnblockerEnabled: false
      };
      const jsonConfig = JSON.stringify(config, null, 2);
      fs.writeFileSync('./public/status.json', jsonConfig, 'utf8');
    } catch (error) {
      console.error('Error reading or writing file:', error);
    }
  }

  async function nodeunblocker_installscriptgeeperscreepersifyousomehowmanagetotypethisintothecommandlineyouwillreceiveacookie() {
    try {
      const data = await readFile('./src/loaders/nodeunblocker.js', 'utf8');
      console.log('// Installing Nodeunblocker')
      await writeFile('./src/index.mjs', data);
      console.log('Data written to index.mjs successfully!');
      const config = {
        isRammerheadEnabled: false,
        isNodeUnblockerEnabled: true
      };
      const jsonConfig = JSON.stringify(config, null, 2);
      fs.writeFileSync('./public/status.json', jsonConfig, 'utf8');
    } catch (error) {
      console.error('Error reading or writing file:', error);
    }
  }

  async function multi_installationgeewillikersohmygollygeeiswearimgettingreallymadthatihavetorightthisfunctionoverandoverandoveragainlikewhenwillievercatchabreakAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa() {
    try {
      const data = await readFile('./src/loaders/all.js', 'utf8');
      console.log('// Installing Nodeunblocker & Rammerhead')
      await writeFile('./src/index.mjs', data);
      console.log('Data written to index.mjs successfully!');
      const config = {
        isRammerheadEnabled: true,
        isNodeUnblockerEnabled: true
      };
      const jsonConfig = JSON.stringify(config, null, 2);
      fs.writeFileSync('./public/status.json', jsonConfig, 'utf8');
    } catch (error) {
      console.error('Error reading or writing file:', error);
    }
  }

function get_rh_sessions() {
    const sessionsDir = './node_modules/rammerhead/sessions';
      fs.readdir(sessionsDir, (err, files) => {
          if (err) {
              console.error('Error reading directory:', err);
              return;
          }
  
          const fileNames = files.filter(file => fs.statSync(path.join(sessionsDir, file)).isFile());
          console.log('IDs Detected:');
          fileNames.forEach(fileName => console.log(fileName));
      });
  }

  function remove_rh_session() {
    const sessionsDir = './node_modules/rammerhead/sessions';
      const sessionFilePath = path.join(sessionsDir, process.argv[3]);
  
      fs.unlink(sessionFilePath, (err) => {
          if (err) {
              console.error('Error deleting session:', err);
              return;
          }
          console.log(`Session "${process.argv[3]}" deleted successfully.`);
      });
  }
  

async function version() {
    try {
      const packageJson = await readFile('./package.json', 'utf-8');
      const { version } = JSON.parse(packageJson);
      console.log('Version:', version);
    } catch (error) {
      console.error('Error reading package.json:', error);
    }
  }
const parameter = process.argv[2];
Handle(parameter);