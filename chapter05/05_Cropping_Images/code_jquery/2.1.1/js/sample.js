$(function(){
  // CSSクラス名myPhoto1内にある画像を切り抜き
  $(".myPhoto1 img").fakecrop();
  // CSSクラス名myPhoto1内にある画像をフィット
  $(".myPhoto2 img").fakecrop({
    // 縦横比を調整し四角形内に納めるように表示する
    fill: false
  });
});