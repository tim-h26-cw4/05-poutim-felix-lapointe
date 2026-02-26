export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = document.querySelectorAll('.button');
    this.selectedType = '';
    this.init();
  }

  init() {
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.addEventListener('click', this.selectType.bind(this));
    }
  }

  selectType(event) {
    //console.log("Where's the lamb sauce???");
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.classList.remove('is-active');
    }

    const btnClick = event.currentTarget;
    btnClick.classList.add('is-active');

    this.selectedType = btnClick.textContent;
    this.updatePhoto();
  }

  updatePhoto() {
    //console.log('MAMA!!!!!!!');
    const freshness = document.querySelector('.poutine__image');
    freshness.classList.add('is-active');
    freshness.src = `assets/images/${this.selectedType}.png`;
  }
}
