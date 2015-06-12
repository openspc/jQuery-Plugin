$(function(){
  // クリッカブルマップの座標をコンテナサイズに合わせて調整する
  $("img[usemap]").rwdImageMaps();
  // クリッカブルマップがクリックされたらアラートダイアログを表示する
  $("area").on("click", function() {
    // alt属性の内容をそのまま表示する
    alert($(this).attr("alt"));
  });
});