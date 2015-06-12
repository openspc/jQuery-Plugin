$(function(){
  // funクラスを持つ要素の文字を対象にする
  $(".fun").funnyText({
    // アニメーション速度を指定する
    speed : 100,
    // 文字サイズを指定する
    fontSize : "3em",
    // 文字の動きの方向を指定する
    direction : "both",
    // 袋文字の線の色を指定する
    borderColor : "orange",
    // 通常の文字の色を指定する
    color : "green",
    // 袋文字の塗りの色を指定する
    activeColor : "#000"
  });
});