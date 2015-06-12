$(function(){
  // ID名imageList内にある画像を対象にする
  $("#imageList").magnificPopup({
    // a要素がクリックされた場合に処理するように設定する
    delegate : "a",
    // 表示する形式を画像(image)にする
    type : "image"
  });
});