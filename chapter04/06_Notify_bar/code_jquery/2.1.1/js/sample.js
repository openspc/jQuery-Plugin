$(function(){
  // 単純に通知を表示する
  $.notifyBar({
    html : "手軽に通知することができます"
  });
  // 5秒ごとにタイマーを使って通知する
  setInterval(function(){
    // 現在の時間を取得する
    var dateObj = new Date();
    var h = dateObj.getHours();
    var m = dateObj.getMinutes();
    var s = dateObj.getSeconds();
    // 時刻を通知する
    $.notifyBar({
      html : h+"時"+m+"分"+s+"秒",
      // 閉じるボタンを表示する
      close: true,
      // 閉じるボタンの文字を指定する
      closeText : "×閉じる"
    });
  }, 5*1000);
});