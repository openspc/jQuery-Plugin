$(function(){
  // 指定したIDの画像をスライド表示する
  $('#myPhoto').slippry({
    // 自動再生する
    auto : true,
    // 表示している時間を4秒にする
    pause : 4000,
    // 最初に表示する画像を3番目に設定する
    start : 3,
    // 画面の切り替え方法をfadeにする
    transition : "fade",
    // 画面の切り替え時間を500ミリ秒にする
    speed : 500
  });
});