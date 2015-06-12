$(function(){
  // テーマファイル(JS/CSS)を読み込む
  Galleria.loadTheme("themes/classic/galleria.classic.min.js");
  // スライド処理を行う
  Galleria.run(".galleria", {
    // 自動再生を行う
    autoplay: true,
    // 切り替え効果を指定する
    transition : "fadeslide",
    // 1枚目の切り替え効果を指定する
    initialTransition : "slide"
  });
});