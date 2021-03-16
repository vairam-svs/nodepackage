import { Utility } from './lib/utility.js';
import { Users } from './services/users.js';

class NodePackageApp {
  constructor() {}
  createFilePerUserName() {
    console.log('info');
    const users = new Users();
    const utility = new Utility();
    console.log(users.getUserName());
    utility.myFileSystem(users.getUserName()+'.txt', 'Hello world');
  }
}

const packageapp = new NodePackageApp();
packageapp.createFilePerUserName();