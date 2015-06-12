// ページの初期化時に処理を行う
$(document).delegate("#home", "pageinit", function() {
  // ID名myAlbumの要素内にあるa要素を対象にする
  $("#myAlbum").imageflip();
});
