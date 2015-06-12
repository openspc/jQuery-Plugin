$(function(){
  // ID名blindify内にあるimg要素を対象にする
  $("#blindify").blindify({
    // ブラインドの方向
    orientation : "vertical",
    // 分割数を指定
    numberOfBlinds: 20,
    // ブラインド表示のアニメーション速度
    animationSpeed: 2000,
    // 次の画像を表示するまでの時間
    delayBetweenSlides: 500,
    // バーの上下の間隔
    gap : 150
        });
});