$(function(){
  // スライド処理を行う
  $.supersized({
    // スライドショーモードにする
    slideshow : 1,
    // 自動再生にする
    autoplay : 1,
    // 表示時間を指定する
    slide_interval : 3000,
    // 切り替え方法を指定する
    transition : 6,
    // 切り替え時間を指定する
    transition_speed : 2000,
    // 順番に画像を表示する
    start_slide : 1,
    // スライド画像を指定する
    slides : [
      { image : "images/1.jpg" },
      { image : "images/2.jpg" },
      { image : "images/3.jpg" },
      { image : "images/4.jpg" }
    ]
  });
});