$(function(){
  // テキストエリアにプラグインの処理を設定
  $("#userComment").maxlength({
    // 14文字まで
    max : 14,
    // 表示先要素
    feedbackTarget : "#textcount",
    // 入力時のメッセージ
    feedbackText : "あと{r}文字入力できます"
  });
});