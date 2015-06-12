$(function(){
  // 指定した要素内の画像をキューブ状に回転させる
  $("#myCube").imagecube({
    // 方向はランダム
    direction : "random",
    // 速度は2秒（2000msec）
    speed : 2000,
    // 停止時間を3秒（3000msec）にする
    pause : 3000,
    // 繰り返すように設定
    repeat : true,
    // 全ての回転処理が終わった時に呼び出す関数
    afterRotate : function(current, next){
      // 現在の画像のalt属性と次の画像のalt属性を表示する
      $("#result").html(current.alt+"<br>"+next.alt);
    }
  });
});