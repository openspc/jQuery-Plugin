$(function(){
  // コンテナであるmyMapにSVG地図を表示する
  $("#myMap").mapael({
    map : {
      // 世界地図のデータがあるJSファイルを指定する
      name : "world_countries",
      // 地図の横幅を指定する
      width : 700,
      // ズーム（倍率）ボタンを有効にする
      zoom : {
        enabled : true
      },
      // 地図全体の色などを指定する
      defaultArea: {
        attrs : {
          stroke : "#999", 
          "stroke-width" : 1,
          fill : "#ccc"
        }
      },
    },
    // 特定の場所を●などのマーカーで表示する
    plots : {
      // 長野県塩尻市を設定する
      shiojiri : {
        // 表示される円のサイズを10にする
        size : 10,
        // 線の色や線の幅を指定する
        attrs : {
          stroke : "#000", 
          "stroke-width" : 1,
          fill : "#f00"
        },
        // 長野県塩尻市の緯度経度を指定する
        latitude : 36.11420809947774, 
        longitude : 137.94789791107178,
        // マウスが●の上に乗ったときに表示する時に表示するテキストを設定する
        tooltip: { content : "長野県塩尻市です"}
      }
    },
    // 日本のエリアにマウスが乗った場合にツールチップに表示するテキストを設定する
    areas: {
      JP: { tooltip: { "content": "日本です" } }
    }
  });
});