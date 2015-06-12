$(function(){
  // 単純に通知を表示する
  noty({
    text : "手軽に通知することができます",
    layout : "topCenter"
  });
  // 2秒ごとにタイマーを使って通知する
  setInterval(function(){
    // 現在の時間を取得する
    var dateObj = new Date();
    var h = dateObj.getHours();
    var m = dateObj.getMinutes();
    var s = dateObj.getSeconds();
    // 通知する
    noty({
      text : h+"時"+m+"分"+s+"秒",
      // 画面上部中央に通知する
      layout : "topCenter",
      // 最大4つまでの通知を表示する
      maxVisible : 4,
      // 6秒後に通知が消えるようにする
      timeout : 6000
    });
  }, 2*1000);
});