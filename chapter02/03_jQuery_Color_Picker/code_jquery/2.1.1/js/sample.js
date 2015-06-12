$(function(){
  // ページ内にカラーピッカーを表示する
  $("#colorpicker").farbtastic("#color");
  // カラーが変更されたらdiv要素内の背景色を変更する
  $("#setColor").click(function(){
    // 選択されたカラーを読み出す
    var color = $("#color").val();
    // 背景色を設定する
    $("#result").css("background-color", color);
  });
});