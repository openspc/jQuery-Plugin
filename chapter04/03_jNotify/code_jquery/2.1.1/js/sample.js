$(function(){
  // 単純に通知を表示する
  jNotify("簡単に通知できます");
  // 1秒ごとにタイマーを使って通知する
  setInterval(function(){
    // 現在の時間を取得する
    var dateObj = new Date();
    var h = dateObj.getHours();
    var m = dateObj.getMinutes();
    var s = dateObj.getSeconds();
    // 時刻を通知する
    jNotify(
      // 表示する文字を指定する
      h+"時"+m+"分"+s+"秒",
      {
        // オーバーレイの色を指定する
        ColorOverlay : "#ff0",
        // 消えるまでの時間を指定する
        TimeShown : 500
      }
    );
  }, 1000);
});