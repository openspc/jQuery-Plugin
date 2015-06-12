$(function(){
  // 背景に映像を設定する
  $("body").videoBackground("", {
    // 自動再生する
    autoplay : "autoplay",
    // 繰り返し再生する
    loop : "loop",
    // 消音にする
    muted : "muted",
    // サイズに合わせる
    fit : "fill",
    // 映像のURLを指定する
    src : "movie/sample.mp4"
  });
});