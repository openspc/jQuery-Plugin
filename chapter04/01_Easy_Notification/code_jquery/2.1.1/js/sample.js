$(function(){
  // 単純に通知を表示する
  $.easyNotification({
    // 使用するdiv要素のID名を指定する
    id : "msg",
    // 表示する文字列を指定する
    text: "画面に通知が表示されます",
    // 通知するための親要素を指定する
    parent: "body",
    // 自動的に消えるようにする
    autoClose : true,
    // 消えるまでの時間を指定する
    duration : 2000,
    // 「閉じる」のテキストを指定する
    closeText : "×閉じる"
  });
  // 3秒ごとにタイマーを使って通知する
  setInterval(function(){
    // 現在の時間を取得する
    var dateObj = new Date();
    var h = dateObj.getHours();
    var m = dateObj.getMinutes();
    var s = dateObj.getSeconds();
    // 時刻を通知する
    $.easyNotification({
      // 使用するdiv要素のID名を指定する
      id : "msg",
      // 通知するための親要素を指定する
      parent: "body",
      // 表示する文字列を指定する
      text : h+"時"+m+"分"+s+"秒",
      // 自動的に消えるようにする
      autoClose : true,
      // 消えるまでの時間を指定する
      duration : 2*1000, 
      // 「閉じる」のテキストを指定する
      closeText : "×閉じる"
    });
  }, 3*1000);
});