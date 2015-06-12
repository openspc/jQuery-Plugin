$(function(){
  // 単純に通知を表示する
  Messenger().post("手軽に通知することができます");
  // 通知メッセージの種類を指定する
  Messenger().post({
    message : "2秒ごとに通知されます",
    type : "success"
  });
  // 2秒ごとにタイマーを使って通知する
  setInterval(function(){
    // 現在の時間を取得する
    var dateObj = new Date();
    var h = dateObj.getHours();
    var m = dateObj.getMinutes();
    var s = dateObj.getSeconds();
    // 閉じるボタンを付けて通知する
    Messenger().post({
      message : h+"時"+m+"分"+s+"秒",
      showCloseButton: true
    });
  }, 2*1000);
});