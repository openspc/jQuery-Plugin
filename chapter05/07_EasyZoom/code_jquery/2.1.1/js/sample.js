$(function(){
  // ズームできるように設定する
  $(".easyzoom").easyZoom({
    // 読み込み中のメッセージを指定する
    loadingNotice : "読み込み中です...",
    // 読み込みエラーの場合のメッセージを指定する
    errorNotice : "画像が読み込めませんでした"
  });
});