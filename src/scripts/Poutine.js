export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = document.querySelectorAll('.button');
    this.selectedType = '';
    this.init();
  }

  init() {
    for (let i = 0; i < this.types.length; i++) {
      const button = this.types[i];
      button.addEventListener('click', this.selectType.bind(this));
    }
  }

  selectType(e) {
    let isRetourEtatNormal = false;

    for (let i = 0; i < this.types.length; i++) {
      const button = this.types[i];

      if (
        e.currentTarget.classList.contains('is-active') &&
        isRetourEtatNormal != true
      ) {
        button.classList.remove('is-active');

        this.selectedType = '';
        isRetourEtatNormal = !isRetourEtatNormal;
        this.updatePhoto();
      } else {
        button.classList.remove('is-active');
      }
    }

    if (isRetourEtatNormal == false) {
      e.currentTarget.classList.add('is-active');
      this.selectedType = e.currentTarget.innerText;

      this.updatePhoto();
    }
  }

  updatePhoto() {
    console.log('Interesting!!!');
  }
}
