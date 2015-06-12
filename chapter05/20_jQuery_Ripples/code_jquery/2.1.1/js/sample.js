$(function(){
  // ページ全体を対象にする
  $("body").ripples({
    // 解像度を指定する
    resolution: 512,
    // 波紋の半径を指定する
    dropRadius: 10,
    // 波紋の乱れ具合（高さ・強さ）を指定する
    perturbance: 1.25,
  });
});