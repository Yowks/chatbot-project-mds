import './index.scss';
import myJsonData from './data.json';
import myJsonMessages from './dataMessages.json';

class Users {
  /* Display user information and creation of div to append the data */
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
    const id = 'id_user';
    const nameCreate = document.createTextNode(this.data.users[this.i][name]);
    const idValue = this.data.users[this.i][id];
    const imgValue = this.data.users[this.i][img];
    divUser.setAttribute('class', 'eachUser');
    divUser.setAttribute('data', `${idValue}`);
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

  /* Display personnal information and creation of div to append the data */
  personnal(data) {
    this.data = data;
    const personnal = document.querySelector('#personnal');
    const divUserPhoto = document.createElement('div');
    const imgUserPhoto = document.createElement('img');
    const divUserInfo = document.createElement('div');
    const divUserInfoName = document.createElement('h2');
    const name = 'name';
    const img = 'name_photo_user';
    const src = 'src/img/';
    const id = 'id_user';
    const nameCreate = document.createTextNode(this.data.me[0][name]);
    const imgValue = this.data.me[0][img];
    const idValue = this.data.me[0][id];
    personnal.setAttribute('class', 'user');
    personnal.setAttribute('data', `${idValue}`);
    divUserPhoto.setAttribute('class', 'userPhoto');
    imgUserPhoto.setAttribute('src', `${src}${imgValue}`);
    divUserInfo.setAttribute('class', 'userInfo');
    personnal.appendChild(divUserPhoto);
    personnal.appendChild(divUserInfo);
    divUserPhoto.appendChild(imgUserPhoto);
    divUserInfo.appendChild(divUserInfoName);
    divUserInfoName.appendChild(nameCreate);
  }
}

function look() { // Look function used to see if a user has been selected
  const active = document.querySelectorAll('.active');
  console.log(active);
  return active;
}
/* Display on he menu the photo and name of the selected person */
function usersDisplayActiveUser(data, id) {
  const name = 'name';
  const idUser = 'id_user';
  const img = 'name_photo_user';
  const src = 'src/img/';
  for (let j = 0; j < data.users.length; j += 1) {
    if (data.users[j][idUser] === id) {
      const menuPhoto = document.querySelector('#menuUserPhoto');
      const menuName = document.querySelector('#menuUserName');
      const imgUserPhoto = document.querySelector('#imgUserPhoto');
      const UserInfoName = document.createElement('h2');
      const nameCreate = document.createTextNode(data.users[j][name]);
      const imgValue = data.users[j][img];
      menuName.innerHTML = '';
      imgUserPhoto.setAttribute('src', `${src}${imgValue}`);
      menuPhoto.appendChild(imgUserPhoto);
      menuName.appendChild(UserInfoName);
      UserInfoName.appendChild(nameCreate);
    }
  }
}

function displayMessages(idReceiver) { // Display the message with the user
  const myMessages = JSON.parse(JSON.stringify(myJsonMessages));
  const me = document.querySelector('#personnal');
  const messages = document.querySelector('#chat');
  const idSender = me.getAttribute('data');
  const date = new Date();
  const dateHour = date.toLocaleString();
  const stringSend = 'id_send';
  const stringReceiver = 'id_received';
  const stringMessage = 'message';

  console.log(dateHour);
  console.log(idReceiver);
  console.log(idSender);
  for (let i = 0; i < myMessages.past.length; i += 1) {
    const eachMessage = myMessages.past[i][`${stringMessage}`];
    const idMessageSender = myMessages.past[i][`${stringSend}`];
    const idMessageReceiver = myMessages.past[i][`${stringReceiver}`];
    const divMessage = document.createElement('div');
    const textMessage = document.createTextNode(eachMessage);
    if (idMessageSender === idSender && idMessageReceiver === idReceiver) {
      divMessage.appendChild(textMessage);
      divMessage.setAttribute('class', 'sender');
      messages.appendChild(divMessage);
    } else if (idMessageSender === idReceiver && idMessageReceiver === idSender) {
      divMessage.appendChild(textMessage);
      divMessage.setAttribute('class', 'receiver');
      messages.appendChild(divMessage);
    }
  }
  return myMessages;
}

function displayActiveTalk(id) {
  const mydata = JSON.parse(JSON.stringify(myJsonData));
  usersDisplayActiveUser(mydata, id);
  displayMessages(id);
}

function displayRight() {
  const right = document.getElementById('right');
  if (look().length > 0) {
    const id = look()[0].getAttribute('data');
    right.style.display = 'block';
    displayActiveTalk(id);
  } else {
    right.style.display = 'none';
  }
}

function sendMessage() {
  console.log('test');
}

function cancelSend() {
  document.querySelector('#send').addEventListener('click', (event) => {
    event.preventDefault();
    sendMessage();
  });
}

function init() {
  const mydata = JSON.parse(JSON.stringify(myJsonData));
  const users = new Users();
  for (let i = 0; i < mydata.users.length; i += 1) {
    users.usersDisplay(mydata, i);
  }
  users.personnal(mydata);
  cancelSend();
}

init();
const eachUser = document.querySelectorAll('.eachUser');
for (let i = 0; i < eachUser.length; i += 1) {
  eachUser[i].addEventListener('click', () => {
    displayRight();
    if (look().length < 1) {
      eachUser[i].classList.add('active');
    } else {
      look()[0].classList.remove('.active');
      eachUser[i].classList.add('active');
    }
  });
}
