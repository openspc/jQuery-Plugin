$(function(){
  // 画像クリックで処理できるように設定する
  $(".least-gallery").least({
    // サムネールをランダムな順番に表示するかどうか
    random : false,
    // 画像が完全にページ内表示できない場合スクロールさせるか
    scrollToGallery : true,
    // 高解像度デバイスに対応する画像を表示するかどうか('@2x'画像)
    HiDPI : false
  });
});