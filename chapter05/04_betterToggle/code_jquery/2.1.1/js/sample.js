$(function(){
  // div要素内の画像を対象にする
  $("#photoList img").click(function(){
    // 画像の表示、非表示を交互に切り替える
    $(this).betterToggle();
    // 現在の要素をeleに入れる
    (function(ele){
      // 3秒経過したら再度表示する
      setTimeout(function(){
        // 画像の表示、非表示を交互に切り替える
        $(ele).betterToggle();
      }, 3000);
    })(this);
  });
});