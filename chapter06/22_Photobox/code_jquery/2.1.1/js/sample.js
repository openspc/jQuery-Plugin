$(function(){
  // ID名gallery内にあるa要素を対象にする
  $("#gallery").photobox("a", {
    // 自動再生する
    autoplay : true,
    // 繰り返し再生する
    loop : true,
    // 再生時間を指定する
    time : 4000
  });
});