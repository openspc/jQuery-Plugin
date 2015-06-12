$(function(){
  // クローズボタンのURLを指定する
  $.facebox.settings.closeImage ="css/closelabel.png";
  // ローディング画像のURLを指定する
  $.facebox.settings.loadingImage ="css/loading.gif";
  // rel属性でfaceboxを対象にする
  $("a[rel=facebox]").facebox();
});