$(function(){
  $("#myMap").vectorMap({
    // 世界地図のデータを指定する
    map: "world_en",
    // 背景色を指定する
    backgroundColor: "#555555",
    // 地図の色を指定する
    color: "white",
    // マウスオーバー時のオーバーレイの不透明度を指定する
    hoverOpacity: 0.7,
    // クリックして選択された際の領域の色を指定する
    selectedColor: "green",
    // 地図をズームしない
    enableZoom: false,
    // 領域のツールチップを表示しない
    showTooltip: false,
    // 領域の値によって塗る色を指定する
    values: { jp : 60, cn : 80, us : 100},
    scaleColors: ["#00ffff", "#ff0000", "#0000ff"]
  });
});