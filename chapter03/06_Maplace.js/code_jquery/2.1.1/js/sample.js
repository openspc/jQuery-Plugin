$(function(){
  // コンテナであるmyMapにGoogleマップを表示する
  new Maplace({
    // 地図を表示するコンテナのID名を指定する
    map_div : "#myMap",
    // 地図の中心を塩尻駅にしズームを15にする
    locations : [{
      lat : 36.11420809947774,
      lon : 137.94789791107178,
      zoom : 15
    }],
    // 地図のスタイルを指定する
    styles: {
      // コントロールに表示される文字を指定する
      "簡易": [{
        // 地図に表示される全ての種類を対象にする
        featureType: "all",
        // 地図のスタイルを指定する
        stylers: [
          // 彩度を-100（色がなくなる）にする
          { saturation : -100 },
          // ガンマ値を0.2にする
          { gamma : 0.2 },
          // シンプルな表示にする
          { visibility: "simplified" }
        ]
      }]
    }
  }).Load(); 
});