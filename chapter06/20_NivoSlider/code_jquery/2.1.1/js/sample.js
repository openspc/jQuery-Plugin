$(window).load(function() {
  // 指定した要素でスライドを行うように設定
  $('#slider').nivoSlider({
    // エフェクトを指定
    effect : "boxRainGrow",
    // 表示時間を指定
    pauseTime : 3000,
    // 「Next」文字列を指定
    nextText : "次へ",
    // 「Prev」文字列を指定
    prevText : "前へ",
  });
});