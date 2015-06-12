$(function(){
  // a要素のrel属性にprettyPhotoがあるものを対象
  $("a[rel^='prettyPhoto']").prettyPhoto({
    // 自動再生する
    autoplay_slideshow : true,
    // アニメーション速度を500msecにする
    animation_speed : 500,
    // オーバーレイの不透明度を指定する
    opacity : 0.7    
  });
});