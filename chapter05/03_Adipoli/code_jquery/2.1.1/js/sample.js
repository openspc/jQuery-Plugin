$(function(){
  // 画像にhover効果を設定する
  $("#myPhoto").adipoli({
    // 開始前のエフェクトを指定
    startEffect : "overlay",
    // ホバー（マウスが重なった）時のエフェクトを指定
    hoverEffect : "fold",
    // エフェクトが完了するまでの時間
    animSpeed : 3000,
    // foldエフェクトの場合に縦に分割する数
    slices : 4,
    // overlayエフェクト時に重ねて表示する文字
    overlayText : "■■■　御嶽山　■■■"
  });
});