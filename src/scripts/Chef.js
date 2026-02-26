import Poutine from './Poutine.js';

export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = document.querySelector('.chef__order');
    //console.log('let me cook!!!');

    this.init();
  }

  init() {
    const poutines = document.querySelectorAll('.poutine');
    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      const instance = new Poutine(poutine);
      this.menu.push(instance);
    }

    //console.log(this.menu);

    const confirmOrder = this.element.querySelector('.button-secondary');
    confirmOrder.addEventListener('click', this.sendOrder.bind(this));
  }

  sendOrder() {
    console.log("Where's my order you DONUT!!!");
  }
}
