$(function(){
  // ID名immersive_slider内にあるdiv要素を対象にする
  $("#immersive_slider").immersive_slider({
    // スライド時の動きを指定
    animation : "bounce",
    // スライドする要素を示すセレクタを指定
    slideSelector : ".slide",
    // 全体を内包している要素を指定
    container : ".main",
    // CSSによるぼかし効果を施さない
    cssBlur : false,
    // 画像の下にページを示す表示を行う
    pagination : true,
    // 繰り返し再生する
    loop : true,
    // 自動再生するまでの時間を指定
    autoStart : 5000
  });
});