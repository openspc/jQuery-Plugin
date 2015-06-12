$(function(){
  // ページ内にカラーピッカーを埋め込む
  $("#mycolorpicker").ColorPicker({
    // カラーピッカーを埋め込む
    flat: true,
    // 色が変更された場合に処理する
    onChange : function(hsb, hex, rgb){
      // 選択された色を要素の背景色として設定する
      $("#result").css("background-color", "#"+hex);
    }
  });
});