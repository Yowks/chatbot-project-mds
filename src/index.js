import './index.scss';
import './data.json';

class Users {
  constructor(data) {
    this.data = data;
  }

  usersDisplay() {
    const left = document.querySelector('#left');
    const eachUser = document.createElement('div').classList.add('eachUser');
    left.appendChild(eachUser);
    console.log(this.data.id);
  }
}
const mydata = JSON.parse(data);
const users = new Users();
users(mydata);
