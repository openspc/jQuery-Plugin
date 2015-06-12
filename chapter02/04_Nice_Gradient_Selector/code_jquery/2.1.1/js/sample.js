$(function(){
  // グラデーションのカラーピッカーを表示する
  gradX("#colorpicker" , {
    // リニア（直線）のグラデーションとして設定する
    type : "linear",
    // グラデーションの初期値を設定する
    sliders: [
      {  // 最初のグラデーション位置と色を設定する。
        color: "rgb(255, 0, 0)",
        position: 20
      },
      {  // 2番目のグラデーション位置と色を設定する。
        color: "rgb(255, 255, 0)",
        position: 80
      }
    ],
    change : function(stops, styles){
      // 設定されたグラデーション情報をdiv要素に反映する
      $("#result").css("background", styles[0]);
    }
  });
});