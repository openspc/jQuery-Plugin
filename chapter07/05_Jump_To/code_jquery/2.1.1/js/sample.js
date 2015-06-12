$(function(){
  // 指定した要素をナビゲーションにする
  $(".page_container").jumpto({
    // ナビゲーションのタイトルを指定
    showTitle : "- 目　次 -",
    // ナビゲーションに表示する見出しレベルを指定
    firstLevel: "> h2",
    secondLevel: "> h3",
    // ラッパーとなるCSSクラスを指定
    innerWrapper: ".jumpto-block",
    // 閉じるボタンを表示する
    closeButton: true,
    // 上からの余白を指定
    anchorTopPadding: 20,
  });
});