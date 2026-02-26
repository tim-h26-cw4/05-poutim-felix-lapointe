import Icons from './utils/Icons.js';
import Chef from './Chef.js';
import Poutine from './Poutine.js';

class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();
  }
}

new Main();
