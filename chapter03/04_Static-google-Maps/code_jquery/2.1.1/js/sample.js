$(function(){
  // 表示する地図の情報を設定する
  var url = $.staticMap({
    // 表示する地図の住所／場所／緯度経度
    address: "富士山",
    // 表示する地図の幅
    width: 256,
    height: 256,
    // 表示する地図の倍率（ズームレベル）
    zoom: 9
  });
  // ID名myMapの要素にStatic Mapを表示する
  $("#myMap").attr("src", url);
  // クリックされた場合の処理
  var urlLive = $.liveMapLink({
    // リンク先で表示する地図の住所／場所／緯度経度
    address: "富士山",
    // 表示する地図の倍率（ズームレベル）
    zoom: 11
  });
  // 地図がクリックされた時のリンクを設定する
  $("#mapURL").attr("href", urlLive);
});