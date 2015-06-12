$(function(){
  // 指定した要素に対して調整処理をする
  $("#header").autofix_anything({
    // 一番下までスクロールしても表示したままにする
    onlyInContainer: false
  });
});