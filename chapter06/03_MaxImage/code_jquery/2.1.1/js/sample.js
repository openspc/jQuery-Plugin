$(function(){
  // ID名maximageの画像を対象にする
  $("#maximage").maximage({
    // スライドショーのオプションを指定する
    cycleOptions : {
      // 特殊効果を指定する
      fx : "fade",
      // 切り替えるまでの時間を指定する
      speed : 3000
    }
  });
});