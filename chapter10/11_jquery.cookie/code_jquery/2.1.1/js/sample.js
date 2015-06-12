$(function(){
  // テキストエリアの内容をCookieに保存する
  $("#save").click(function(){
    // テキストエリアの内容を読み込む
    var text = $("#userComment").val();
    // Cookieに保存する
    $.cookie("myData", escape(text), { expires : 7 });
    // 結果を表示する
    $("#result").text("Cookieに保存しました");
  });
  // Cookieに保存した内容を読み込んで表示する
  $("#load").click(function(){
    // テキストエリアの内容を読み込む
    var text = $.cookie("myData");
    // 結果を表示する
    $("#result").text(unescape(text));
  });
});