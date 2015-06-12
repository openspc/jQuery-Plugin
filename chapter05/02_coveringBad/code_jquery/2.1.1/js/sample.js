$(function() {
  // CSSのcoveredクラスの対象にする
  $(".covered").coveringBad({
    // 上下に分割する
    direction : "vertical",
    // ハンドルのY座標を50pxに設定する
    setY : 50
  });
});