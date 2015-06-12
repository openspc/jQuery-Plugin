$(function(){
  // クレジットカードの番号形式をチェックする
  $("#cardNumber").formatter({
    // xxxx-xxxx-xxxx-xxxx形式をチェック
    pattern : "{{9999}}-{{9999}}-{{9999}}-{{9999}}",
    // あらかじめ固定文字を入力済みにする
    persistent : true
  });
});