import Tchat from './tchat';
import bots from './models/mock';
import me from './models/me';

const tchat = new Tchat(bots, me);

tchat.render();
