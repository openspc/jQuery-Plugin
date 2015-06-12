$(function(){
  // データを定義する
  var data = [
    ["A社", 55], ["B社", 25], ["C社", 15], ["その他", 5]
  ];
  // 描画先の要素のIDとグラフデータを指定する
  jQuery.jqplot("myGraph", [data], { 
    seriesDefaults : {
      // レンダラーに円グラフを指定する
      renderer : jQuery.jqplot.PieRenderer,
      // 描画オプションを指定する
      rendererOptions : {
        // 円グラフ内にラベルを描画する
        showDataLabels : true,
        // パイを分割する
        sliceMargin : 5
      }
    },
    // 凡例を表示する
    legend : { show : true, location: "e" }
    }
  );
});