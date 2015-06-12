$(function(){
  // 長文を折りたたんで表示するように設定する
  $("#longtext").more({
    // 10文字まで
    length : 10,
    // 交互に切り替える（トグル）
    toggle : true,
    // 長文の末尾に表示する文字
    ellipsisText : "》》》",
    // 展開を示す文字を設定
    moreText : "続きを読む",
    // 折りたたむ際の文字を設定
    lessText : "折りたたむ",
    // 展開／折りたたまれた場合の処理
    onChange : function(expanded){
      // 状態を調べる
      if (expanded === true){
        // 展開されたら背景色をオレンジ色にする
        $("#longtext").css("background-color", "orange")
      }else{
        // 背景色を白色に戻す
        $("#longtext").css("background-color", "white")
      }
    }
  });
});