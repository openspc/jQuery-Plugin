$(function(){
  // コンテキストメニューを設定する
  $.contextMenu({
    // セレクタを指定する
    selector: ".myMenu", 
    // メニューが選択された際の全体のコールバック関数を指定する
    callback: function(key, options) {
      // 画面に表示する
                $("#result").html(key+"<br>"+options.ns);
          },
    // 表示するメニュー項目を指定する
    items: {
                "file": {name: "ファイル", icon: "file"},
                "edit": {name: "編集", icon: "edit"},
      // ---は区切り線として表示
                "separator": "---------",
      // 終了の項目は別途コールバック関数を指定する
      "quit": {name: "終了", callback:function(key, options){
        $("#result").html("終了が選択されました");
      }}
          }
      });
});