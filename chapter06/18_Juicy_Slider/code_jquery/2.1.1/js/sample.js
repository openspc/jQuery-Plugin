$(function(){
  // ID名myAlbum内の画像をスライド表示する
  $("#myAlbum").juicyslider({
    // 自動再生で画像を表示する時間を指定する
    autoplay : 3000,
    // 幅を指定。width, heightにnullを指定すると全画面サイズ
    width: 384,
    height : 216,
    // マスク画像を指定する
    mask: "raster"
  });
});