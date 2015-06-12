$(function() {
  // carouselクラスがあるdiv要素内の画像を処理
  $(".carousel").jcarousel();
  // 制御ボタンの処理
  $("[data-jcarousel-control]").each(function() {
    var el = $(this);
    el.jcarouselControl(el.data());
  });
});
