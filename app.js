// メイン部分
let alertString;

//　作成した関数を呼び出し、変数へ格納
alertString = addString("WebCamp");

//変数の中身をアラートで表示する
alert(alertString);

// 作成した関数
// 関数名：addString
// 引数：strA
// 戻り値：addStr
// 機能：引数で受け取った値を連結して返す
function addString(strA){
  let addStr = "Hello" + strA;
  return addStr;
}

let promptStr = prompt("何か好きな文字を入力してください。");
 alert(promptStr);

//　じゃんけんの手を入力してもらうプロンプト欄を生成
let user_hand = prompt('じゃんけんの手を選んでください。グー、チョキ、パーのいずれかを入力してください。');

while((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  //　じゃんけんの手を入力してもらうプロンプト欄を生成
  //　入力が不正な場合は、再度入力を促す
  //　入力がキャンセルされた場合は、何もしない
  alert("グー、チョキ、パーのいずれかを入力してください。");
  user_hand = prompt('じゃんけんの手を選んでください。グー、チョキ、パーのいずれかを入力してください。');
}

//  じゃんけんの手をランダムに作成する関数を呼び出す
let js_hand = getJShand();

// ユーザーの手とJavaScriptの手を比較する関数を呼び出し、結果をjudgeに格納
let judge = winLose(user_hand, js_hand);

// 結果を表示する
if(user_hand == null){
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
}
else{
  alert("またチャレンジしてね");
}

// じゃんけんの手をランダムに決定する関数
function getJShand() {
  let js_hand_num = Math.floor(Math.random() * 3);
  let hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  }
  else if(js_hand_num == 1){
    hand_name = "チョキ";
  }
  else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

// ユーザーの手とJavaScriptの手を比較する関数
function winLose(user, js) {
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー") {
      winLoseStr = "あいこ";
    }
    else if(js == "チョキ") {
      winLoseStr = "勝ち";
    }
    else if(js == "パー") {
      winLoseStr = "負け";
    }
  }
  else if(user == "チョキ"){
    if(js == "グー") {
      winLoseStr = "負け";
    }
    else if(js == "チョキ") {
      winLoseStr = "あいこ";
    }
    else if(js == "パー") {
      winLoseStr = "勝ち";
    }
  }
  else if(user == "パー"){
    if(js == "グー") {
      winLoseStr = "勝ち";
    }
    else if(js == "チョキ") {
      winLoseStr = "負け";
    }
    else if(js == "パー") {
      winLoseStr = "あいこ";
    }
  }
  return winLoseStr;
}