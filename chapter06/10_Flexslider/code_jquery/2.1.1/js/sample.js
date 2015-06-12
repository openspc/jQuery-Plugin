$(window).load(function(){
  $(".flexslider").flexslider({
    // アニメーション方法
    animation : "slide",
    // 繰り返しスライドする
    animationLoop : true,
    // 1枚の画像の横幅
    itemWidth : 192,
    // 最小表示枚数
    minItems : 3,
    // 最大表示枚数
    maxItems: 6
  });
});
