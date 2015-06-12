$(function(){
  // 画像を菱形にして表示／配置する
  $("#imageList").diamonds({
    // 画像のサイズを指定する
    size: 128,
    // 画像と画像の間の余白を指定する
    gap : 2,
    // 対象となる画像のCSSクラスを指定する
    itemSelector : ".photo",
    // 配置が不完全な場合でも処理する
    hideIncompleteRow : false,
    // ウィンドウリサイズ時に再描画する
    autoRedraw : true
  });
});