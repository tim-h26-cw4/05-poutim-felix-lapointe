export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = this.element.querySelectorAll('.button');
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
      if (type.classList.contains('is-active')) {
        type.classList.remove('is-active');
      }
    }
    const btnClicked = event.currentTarget;
    btnClicked.classList.add('is-active');

    this.selectedType = btnClicked.textContent;
    console.log(this.selectedType);
    this.updatePhoto();
  }

  updatePhoto() {
    //console.log('MAMA!!!!!!!');
    const img = this.element.querySelector('.poutine__image');
    img.classList.add('is-active');
    img.src = `assets/images/${this.selectedType}.png`;
  }
}
