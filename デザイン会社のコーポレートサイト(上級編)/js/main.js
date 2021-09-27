document.addEventListener('DOMContentLoaded', function () {    
  const main = new Main();
  new MobileMenu();

});

class Main {
  constructor() {
    this.header = document.querySelector('.header');
    this._observers = [];
    this._srollInit();
  }
  set observers(val) {
    this._observers.push(val);
  }
  get observers() {
    return this._observers;
  }

  _headerTrigger(el, inview) {
    if (inview) {
      this.header.classList.remove('triggered');
    }
    else {
      this.header.classList.add('triggered');
    }
  }

  _srollInit() {
    this.observers = new ScrollObserver('.top-visual', this._headerTrigger.bind(this), {once: false});
  }
}
