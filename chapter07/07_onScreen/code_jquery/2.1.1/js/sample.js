$(function(){
  // CSSのlazyクラスを対象にする
  $(".lazy").onScreen({
    // フェードインさせながら表示する
    doIn: function() {
      $(this).animate({
        "opacity" : 1.0
      }, 2000);
    },
    // フェードアウトさせる
    doOut: function() {
      $(this).animate({
        "opacity" : 0.15
      }, 2000);
    }
  });
});