$(function(){
  // myPhotoクラスを対象にし個別表示にする
  $('a.myPhoto').colorbox();
  // myGroup1クラスを対象にしグループ表示にする
  $('a.myGroup1').colorbox({
    rel : "myGroup1"
  });
  // myGroup2クラスを対象にしグループ表示にする
  $('a.myGroup2').colorbox({
    rel : "myGroup2"
  });
});