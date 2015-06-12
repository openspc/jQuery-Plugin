$(function(){
  // 指定したCSSクラスを調整対象にする
  $(".responsive").fitText(3, {
    // 最小の文字サイズを12ptにする
    minFontSize: "12pt",
    // 最大の文字サイズを64ptにする
    maxFontSize: "64pt"
  });
});