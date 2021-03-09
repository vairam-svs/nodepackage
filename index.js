import { Utility } from './lib/utility';
import { Users } from './services/users';

class NodePackageApp {
  constructor() {}
  createFilePerUserName() {
    const users = new Users();
    const utility = new Utility();
    utility.myFileSystem(users.getUserName()+'.txt', 'Hello world');
  }
}

const packageapp = new NodePackageApp();
packageapp.createFilePerUserName();