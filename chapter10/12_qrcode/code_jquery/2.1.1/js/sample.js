$(function(){
  // ボタンクリックでQRコードを生成する
  $("#make").click(function(){
    // テキストエリアの内容を読み込む
    var textData = $("#sourceText").val();
    // すでに表示されているQRコードを消去する
    $("#result").text(" ");
    // QRコードを生成する
    $("#result").qrcode({
      // QRコードのサイズを指定する
      size : 128,
      // QRコードの色を指定する
      fill : "blue",
      // QRコードの内容を指定する
      text : textData,
      // モードを指定する
      mode : 0
    });
  });
});