$(function(){
  // tltクラスを持つ要素の文字を対象にする
  $(".tlt").textillate({
    // 無限に繰り返す
    loop : true,
    // 自動再生する
    autoStart: true,
    // アニメーション開始側の設定
    in : {
      // エフェクトの種類を指定
      effect : "rollIn",
      // 文字を非同期に動かす
      sync : false,
      // アニメーションのタイムラグ
      delay: 500
    }
  });
});