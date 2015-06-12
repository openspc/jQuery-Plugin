$(function(){
  // CSSのdatatableクラスの表をレスポンシブ対応にする
  $(".datatable").ReStable({
    // ヘッダーを表示する
    rowHeaders: true,
    // ブレークポイントを480pxにする
    maxWidth: 480
  });
});