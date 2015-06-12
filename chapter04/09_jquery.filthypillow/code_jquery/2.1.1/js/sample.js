$(function(){
  // 初期化する
  $("#startDate").filthypillow();
  // テキストフィールドにフォーカスしたらカレンダーを表示する
  $("#startDate").on("focus", function(){
    $("#startDate").filthypillow("show");
  });
  // save(保存)ボタンがクリックされた場合の処理
  $("#startDate").on("fp:save", function(evt, dateObj) {
    // 日付フォーマットを変換する
    var dateStr = dateObj.format("YYYY/MM/DD hh:mm A");
    // テキストフィールドに日付と時刻を表示する
    $("#startDate").val(dateStr);
    // カレンダーを非表示にする
    $("#startDate").filthypillow("hide");
  });     
});