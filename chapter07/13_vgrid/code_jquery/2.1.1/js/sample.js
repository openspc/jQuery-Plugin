$(function(){
  // グリッド処理を設定
  $("#grid-content").vgrid({
    // フェードイン処理を設定
    fadeIn: {
      // 1つのブロックがフェードインするまでの時間
      time: 2000,
      // 次のブロックがフェード開始するまでの時間
      delay: 500
    }
  });
});