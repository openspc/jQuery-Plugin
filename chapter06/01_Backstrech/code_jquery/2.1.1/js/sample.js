$(function(){
  // 指定された画像を背景としてフルスクリーン表示する
  $.backstretch([
    // 切り替えて表示する画像のURLを列記する
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
  ], {
    // 表示時間を4秒にする
    duration: 3000,
    // フェード時間を1秒にする
    fade: 1000
  });
});