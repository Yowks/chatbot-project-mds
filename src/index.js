import './index.scss';
import myJsonData from './data.json';

class Users {
  usersDisplay(data, i) {
    this.data = data;
    this.i = i;
    const left = document.querySelector('#left');
    const divUser = document.createElement('div');
    const divUserPhoto = document.createElement('div');
    const imgUserPhoto = document.createElement('img');
    const divUserInfo = document.createElement('div');
    const divUserInfoName = document.createElement('h2');
    const name = 'name';
    const img = 'name_photo_user';
    const src = 'src/img/';
    const nameCreate = document.createTextNode(this.data.users[this.i][name]);
    const imgValue = this.data.users[this.i][img];
    divUser.setAttribute('class', 'eachUser');
    divUserPhoto.setAttribute('class', 'eachUserPhoto');
    imgUserPhoto.setAttribute('src', `${src}${imgValue}`);
    divUserInfo.setAttribute('class', 'eachUserInfo');
    divUser.appendChild(divUserPhoto);
    divUser.appendChild(divUserInfo);
    divUserPhoto.appendChild(imgUserPhoto);
    divUserInfo.appendChild(divUserInfoName);
    divUserInfoName.appendChild(nameCreate);
    left.appendChild(divUser);
  }
}

function init() {
  const mydata = JSON.parse(JSON.stringify(myJsonData));
  const users = new Users();
  for (let i = 0; i < mydata.users.length; i += 1) {
    users.usersDisplay(mydata, i);
  }
}

init();
