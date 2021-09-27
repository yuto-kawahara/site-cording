class ScrollObserver  {
  // コンストラクタ
  constructor(els, cb, options) {
    // 要素を取得
    this.els = document.querySelectorAll(els);
    // ScrollObserverの初期設定
    const defaultOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
      once: true
    };
    // コールバック関数を設定
    this.cb = cb;
    // optionsの設定をdefault設定に上書き
    this.options = Object.assign(defaultOptions, options)
    // スクロール検知を1回で監視停止
    this.once= this.options.once;
    this._init();
  }
  // 初期化関数
  _init() {
    // 要素の交差を監視するコールバック関数
    const callback = function(entries, observer) {
      entries.forEach(entry => {
        // 要素が監視中
        if (entry.isIntersecting) {
          // cbに登録された関数を実行
          this.cb(entry.target, true);
          // スクロール検知を1回で監視停止
          if (this.once){
            observer.unobserve(entry.target);
          }
        }
        else {
          // cbに登録された関数を実行
          this.cb(entry.target, false);
        }
      });
    };

    // IntersectionObserverにコールバック関数とオプションを渡す
    this.io = new IntersectionObserver(callback.bind(this), this.options)
    // 要素の監視を開始
    this.els.forEach(el => this.io.observe(el));
  };
}