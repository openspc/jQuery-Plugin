$(function(){
  // ページ内にカラーピッカーを埋め込む
  $("#mycolorpicker").smallColorPicker({
    // デフォルトのカラーを設定する
    defaultColor : "pink",
    // カラーピッカーで横に表示する色の数を指定する
    colorRows : 8,
    // カラーピッカーで選択可能な色のコードを配列で指定する
    colorValues : [  "#000202","#953503","#35381D","#003906",
            "#03316D","#020274","#282AA1","#373737",
            "#7C0200","#F76905","#848000","#037B0D",
            "#008589","#0001FE","#63649D","#7E7E7E",
            "#FE0000","#F7981A","#93CD00","#2D9C69",
            "#21D4CE","#3860FF","#700788","#909090",
            "#F60EE0","#FFC500","#FFFC01","#00FF00",
            "#0CFFFD","#03CBFF","#AB245F","#B9B9B9",
            "#FF8CCE","#FFCB90","#FFFF94","#BFFFC5",
            "#C4FFFF","#92CDFF","#D996FF","#FFFFFF" ]
  });
  // カラーが選択された（値が変化した）場合に背景色を設定する
  $("#result").on("click", function(){
    // カラーピッカーで選択された値を読み出す
    var col = $("#mycolorpicker").val();
    // 背景色として設定する
    $(this).css("background-color", col);
  });
});