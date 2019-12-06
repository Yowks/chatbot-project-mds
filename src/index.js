import './index.scss';

class HelloWorld {
  constructor(say = 'Hello World') {
    this.say = say;
  }

  speak(say = this.say) {
    const el = document.querySelector('#app');
    const elH1 = document.createElement('h1');
    const elH2 = document.createElement('h2');

    elH1.textContent = say;
    elH2.textContent = say;
    el.appendChild(elH1);
    el.appendChild(elH2);
  }
}

const helloWorld = new HelloWorld();

helloWorld.speak();
helloWorld.speak('Wep');

