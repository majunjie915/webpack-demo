export function square(x) {
  return x * x;
}

export function cube(x) {
  return x * x * x;
}

export function initFont(){
  var changeRem = function () {
    var baseSize = 750 / 2 / 16;
    document.getElementsByTagName('html')[0].style.fontSize = document.documentElement.clientWidth / baseSize + 'px';
  };
  changeRem();
  var t;
  window.addEventListener('resize' , function(){
    clearTimeout(t);
    t = setTimeout(changeRem, 300);
  }, false);
  window.addEventListener('pageshow' , function(e){
    if (e.persisted) {
      clearTimeout(t);
      t = setTimeout(changeRem, 300);
    }
  }, false);

  //ios11 禁止点击放大
  window.scrollTo(0, 1);
  var lastTouchEnd = 0;
  document.addEventListener('touchend', function (event) {
    var now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);
}
