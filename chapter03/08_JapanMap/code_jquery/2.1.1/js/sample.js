$(function(){
  // 長野県以外の全ての都道府県番号を配列に入れる
  var pref = [];
  for(var i=1; i<=47; i++){
    if(i== 20){ continue; }	// 長野県(20番)は除外する
    pref[i] = i;
  }
  // 日本地図を表示する
  $("#myMap").japanMap({
    // 地図のサイズを指定する
    width : 800,
    height : 600,
    // 地図の背景色を指定する
    backgroundColor : "#0000ff",
    // 南西諸島を地図左上に表示する
    movesIslands : true,
    // 長野県とそれ以外の都道府県別で色を分ける
    areas : [
        {"code": 1 , "name":"全国", "color":"white", "hoverColor":"orange", "prefectures": pref},
        {"code": 2 , "name":"長野県",   "color":"red", "hoverColor":"#ffafaf", "prefectures":[20]}
    ]
  });
});