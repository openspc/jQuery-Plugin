$(function(){
  // ボタンがクリックされたら左側にスライドメニューを表示する
  $("#btn"). sidr({
    // 左側に配置
    side : "left",
    // 速度は1秒（2000msec）
    speed : 1000,
    // 表示するメニュー内容
    name : "myMenu"
  });
});