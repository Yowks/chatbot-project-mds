import views from './views';
import './index.scss';

/**
 * Create new tchat
 * @class
 */
class Tchat {
  constructor(bots, me) {
    this.bots = bots;
    this.me = me;
  }

  /**
   * render
   */
  render() {
    this.renderMe();
    this.renderContacts();
  }

  /**
   * render contacts
   */
  renderContacts() {
    this.bots.forEach((bot) => {
      const elContacts = document.querySelector('#users');
      elContacts.innerHTML += views.contact(bot);
    });
  }

  /**
   * render me
   */
  renderMe() {
    const elContacts = document.querySelector('#personnal');
    elContacts.innerHTML += views.contact(this.me);
  }
}

export default Tchat;
