$(function(){
  // CSSのlazyクラスを対象にする
  $(".lazy").lazyload({
    // フェードさせながら表示する
    effect : "fadeIn"
  });
});