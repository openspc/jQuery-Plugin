$(function(){
  // 指定した要素内に文字が表示されるようにする
  $("#textblock").pagination({
    // 全体のページ数
    items : 3,
    // 一度に表示するページ数
    itemsOnPage : 1,
    // 最初に表示するページ数
    currentPage : 2,
    // ページ番号を表示するブロックのCSS
    cssStyle: "compact-theme",
    // ページ番号で使用するIDの先頭に付加する文字
    hrefTextPrefix : "#p",
    // 前に戻るボタン内に表示する文字
    prevText : "前へ",
    // 次に進むボタン内に表示する文字
    nextText : "次へ",
    // ボタンがクリックされた時の処理
    onPageClick : function(num){
      // ページブロック全体を非表示にする
      $(".pageblock").hide();
      // クリックで指定されたページを表示する
      $("#p"+num).show();
    },
    // 初期化処理
    onInit : function(){
      // ページブロック全体を非表示にする
      $(".pageblock").hide();
      // currentPageで指定したページを表示する
      $("#p"+(this.currentPage+1)).show();
    }
  });
});