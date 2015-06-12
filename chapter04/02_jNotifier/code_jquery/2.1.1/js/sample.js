$(function(){
  // 単純に通知を表示する
  $("#msg").notification({
    type : "information",
    lifeTime : 2000
  });
  // 3秒ごとにタイマーを使って通知する
  setInterval(function(){
    // 現在の時間を取得する
    var dateObj = new Date();
    var h = dateObj.getHours();
    var m = dateObj.getMinutes();
    var s = dateObj.getSeconds();
    // 時刻を通知する
    $("#msg").notification({
      text : h+"時"+m+"分"+s+"秒",
      // 日付アイコンを表示する
      type : "date",
      // 消えるまでの時間を指定する
      lifeTime : 15*1000
    });
  }, 3*1000);
});