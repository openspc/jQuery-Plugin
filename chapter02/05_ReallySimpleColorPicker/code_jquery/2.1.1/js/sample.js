$(function(){
  // カスタムカラーを追加する
  $.fn.colorPicker.addColors([
    "ee0000", "aa0000", "700", "400"
  ]);
  // ページ内にカラーピッカーを埋め込む
  $("#mycolorpicker").colorPicker();
  // カラーが選択された（値が変化した）場合に背景色を設定する
  $("#mycolorpicker").change(function(){
    // カラーピッカーで選択された値を読み出す
    var col = $(this).val();
    // 背景色として設定する
    $("#result").css("background-color", col);
  });
});