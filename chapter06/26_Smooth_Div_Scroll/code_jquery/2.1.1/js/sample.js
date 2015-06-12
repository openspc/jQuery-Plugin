$(function(){
  // ID名myAlbum内にあるimg要素を対象にする
  $("#myAlbum").smoothDivScroll({
    // 自動的にスクロールするようにする
    autoScrollingMode: "onStart",
    // スクロール量を設定する
    autoScrollingStep : 1
  });
});