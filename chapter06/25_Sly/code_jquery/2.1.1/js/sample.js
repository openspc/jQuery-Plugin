$(function(){
  // ID名smart内の画像を対象にする
  $("#smart").sly({
    itemNav: "centered",
    // 画像がコンテナ内に収まっていない場合にスクロール
    smart: 1,
    // clickでアクティブにする
    activateOn: "click",
    // マウスドラッグを有効にする
    mouseDragging: 1,
    // タッチ操作を有効にする
    touchDragging: 1,
    // ドラッグ＆タッチ終了時にスイングする
    releaseSwing: 1,
    // マウスホイールでスクロールする
    scrollBy: 1,
    // アニメーション速度を指定する
    speed: 300,
    // ドラッグ＆タッチ時に画面外までスクロールさせる
    elasticBounds: 1,
    // アニメーションの動きを指定する
    easing: "easeOutExpo"
  });
});