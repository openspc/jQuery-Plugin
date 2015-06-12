$(function(){
  setInterval(function(){
    // 現在の秒数、ミリ秒を取得
    var dateObj = new Date();
    var sec = dateObj.getSeconds();
    var msec = dateObj.getMilliseconds();
    var timeStr = sec+"."+msec;
    // 指定した要素に文字（SVG）を出力する
    $("#time").sevenSeg({
      // 5桁にする
      digits : 5,
      // 表示する数値を指定
      value : timeStr,
      // 消えている部分のセグメント色
      colorOff : "#003310",
      // 表示されている部分のセグメント色
      colorOn : "#22dd22"
    });
  }, 30);
});