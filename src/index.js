import './index.scss';
import myJsonData from './data.json';

class Users {
  usersDisplay(data, i) {
    this.data = data;
    this.i = i;
    const left = document.querySelector('#left');
    const divUser = document.createElement('div');
    divUser.setAttribute('class', 'eachUser');
    const name = 'name';
    const nameCreate = document.createTextNode(this.data.users[this.i][name]);
    divUser.appendChild(nameCreate);
    left.appendChild(divUser);
  }
}
const mydata = JSON.parse(JSON.stringify(myJsonData));
const users = new Users();
for (let i = 0; i < mydata.users.length; i += 1) {
  users.usersDisplay(mydata, i);
}
