$(function(){
  // コンテナであるmyMapにグーグルMapを表示する
  $("#myMap").initMap({
    // 地図の中心を日本にする。緯度経度も指定可能。
    center : "Japan",
    // 通常の地図を表示
    type : "roadmap",
    // 地図のオプション
    options : {
      // ズームレベルを5にする
      zoom : 5
    },
    // マーカーを表示
    markers: {
      // マーカーの名前とオプションを指定
      marker_tokyo : {
        // 位置を指定する。緯度経度も指定可能。
        position : "Shiojiri"
      }
    }
  });
});