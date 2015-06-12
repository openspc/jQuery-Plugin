$(function(){
  // ID名myAlbumの要素内にあるa要素を対象にする
  $("#myAlbum a").fancyzoom({
    // 部品画像があるフォルダを指定する
    imgDir : "./img/",
    // 表示速度を指定する
    Speed : 200,
    // オーバーレイの色を黄色にする
    overlayColor : "yellow",
    // オーバーレイの不透明度を70%にする
    overlay : 0.7
  }); 
});