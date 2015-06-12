// windowのloadイベントが発生したら処理を行う
$(window).on("load", function() {
  // 画像を選択できるように設定する
  $(document).wrangle({
    // 線の色を指定する
    lineColor : "#f00",
    // 線の太さを指定する
    lineWidth : 10
  });
});
