$(function(){
  // カスタムカラーを追加する
  $("#iColor").icolor({
    // ページ内に埋め込んで表示する
    flat :  true,
    // 任意色を指定できるようにする
    showInput : true,
    // 色が選択されたらdiv要素の背景色として設定する
    onSelect : function(color){
      $("#result").css("background-color", color);
    }
  });
});