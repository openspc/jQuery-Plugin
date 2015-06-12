$(function(){
  // CSSクラスがbxsliderの要素を対象にする
   $(".bxslider").bxSlider({
    // 自動再生する
    auto: true,
    // Start/Stopのコントロールを表示する
    autoControls: true,
    // 自動再生時の画像の表示時間を指定する
    pause : 4000
  });
});