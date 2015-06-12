$(function(){
  // ボタンクリックで標準装飾にする
  $("#default").click(function(){
    // オプションなしだと標準装飾
    $("table tr > :nth-child(3)").tableColorScale();
  });
  // ボタンクリックでデータバーを表示にする
  $("#databar").click(function(){
    // typeオプションにdatabarを指定する
    $("table tr > :nth-child(3)").tableColorScale({
      type : "databar",
      // データバーの色を設定する
      css : {
        // 薄い赤色にする
        databar : {
          backgroundColor : "rgba(0,128,255,0.75)"
        }
      }
    });
  });
  // ボタンクリックで上位3位を表示にする
  $("#up").click(function(){
    // topnオプションで指定する
    $("table tr > :nth-child(3)").tableColorScale({
      type : "topn",
      typeOpt : 3
    });
  });
  // ボタンクリックで下位3位を表示にする
  $("#down").click(function(){
    // topnオプションで指定する
    $("table tr > :nth-child(3)").tableColorScale({
      type : "topn",
      typeOpt : -3
    });
  });
});