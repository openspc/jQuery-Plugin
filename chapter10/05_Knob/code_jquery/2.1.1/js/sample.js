$(function(){
  // CSSのdialクラスを対象にする
  $(".dial").knob({
    // 最小値を指定する
    min : 0,
    // 最大値を指定する
    max : 100,
    // ステップを指定する
    step : 5,
    // 最大値、最小値でイベントを停止する
    stopper : true,
    // 背景色を指定する
    bgColor : "black",
    // ダイヤルの色を指定する
    fgColor : "#a40",
    // ダイヤル操作中に処理する
    change : function(val){
      // 値を表示する
      $("#result").text(val);
    }
  });
});