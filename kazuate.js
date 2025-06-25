// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

let x = 0;
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  
  let y = document.querySelector('input[name="kazu"]');
  let yn = y.value;
  let yoso = Number(yn);
  kaisu = kaisu + 1;
  let p = document.querySelector('span#kaisu');
  p.textContent = kaisu;
  let a = document.querySelector('span#answer');
  a.textContent = yoso;
  let r = document.querySelector('p#result');
  if(kaisu >= 4 || x === 1){
    result = "答えは " + kotae + " でした. すでにゲームは終わっています";
    r.textContent = result;
  }else if(yoso === kotae){
    result = "正解です. おめでとう！";
    r.textContent = result;
    x = 1;
  }else if(kaisu === 3){
    result = "まちがい. 残念でした答えは " + kotae + " です.";
    r.textContent = result;
  }else if(kaisu <= 2){
    if(yoso < kotae){
      result = "まちがい. 答えはもっと大きいですよ";
      r.textContent = result;
    }else{
      result = "まちがい. 答えはもっと小さいですよ"
      r.textContent = result;
    }
  }
  

  

}


let b = document.querySelector('button#print');

b.addEventListener('click', hantei);