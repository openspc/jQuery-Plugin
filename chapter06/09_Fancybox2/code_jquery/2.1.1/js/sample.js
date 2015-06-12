$(function(){
  // CSSクラスがfancyboxの要素を対象にする
  $(".fancybox").fancybox({
    // 自動再生する
    autoPlay : true,
    // 繰り返し再生する
    loop : true,
    // 詳細設定
    helpers    : {
      // キャプションの位置を設定する
      title  : { type : "float" }
    }
  });
});