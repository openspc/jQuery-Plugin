$(function(){
  // 単純に通知を表示する
  $().toastmessage("showNoticeToast", "簡単に通知できます");
  // 2秒ごとにタイマーを使って通知する
  setInterval(function(){
    // 現在の時間を取得する
    var dateObj = new Date();
    var h = dateObj.getHours();
    var m = dateObj.getMinutes();
    var s = dateObj.getSeconds();
    // 時刻を通知する
    $().toastmessage("showToast", {
      // 種類を指定する
      type : "success",
      // 表示する文字を指定する
      text : h+"時"+m+"分"+s+"秒",
      // 貼り付けたままにしないようにする
      sticky : false,
      // 表示時間を6秒にする
      stayTime : 6000,
      // 位置を指定する
      position : "middle-right"
    });
  }, 2000);
});