$(function(){
  // 背景のスライド処理を行う
  $.vegas("slideshow", {
    // 表示する背景画像のURLとフェード時間を指定
    backgrounds : [
      { src : "images/1.jpg", fade : 500 },
      { src : "images/2.jpg", fade : 500 },
      { src : "images/3.jpg" },
      { src : "images/4.jpg" }
    ]
  })("overlay", {
    // オーバーレイ画像のURLを指定
    src : "overlays/13.png",
    // オーバーレイ画像の不透明度を指定
    opacity : 0.75
  });
});