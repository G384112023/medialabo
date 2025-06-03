
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log(data.coord.lon);
  console.log(data.coord.lat);
  console.log(data.weather[0].description);
  console.log(data.main.temp_min);
  console.log(data.main.temp_max);
  console.log(data.main.humidity);
  console.log(data.wind.speed);
  console.log(data.wind.deg);
  console.log(data.name);
}


// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {

  let result = document.createElement('div');
  result.setAttribute('id', 'result');
  let body = document.querySelector('body');
  body.insertAdjacentElement('beforeend', result);

  let p1 = document.createElement('div');
  p1.textContent = ('経度:　　　' + data.coord.lon);
  p1.classList.add('p1');
  result.insertAdjacentElement('beforeend', p1);
  let p2 = document.createElement('div');
  p2.textContent = ('緯度:　　　' + data.coord.lat);
  p2.classList.add('p1');
  p1.insertAdjacentElement('afterend', p2);
  let p3 = document.createElement('div'); 
  p3.classList.add('p1');
  p3.textContent = ('天気:　　　' + data.weather[0].description);
  p2.insertAdjacentElement('afterend', p3);
  let p4 = document.createElement('div');
  p4.classList.add('p1');
  p4.textContent = ('最低気温:　' + data.main.temp_min);
  p3.insertAdjacentElement('afterend', p4);
  let p5 = document.createElement('div');
  p5.classList.add('p1');
  p5.textContent = ('最高気温:　' + data.main.temp_max);
  p4.insertAdjacentElement('afterend', p5);
  let p6 = document.createElement('div');
  p6.classList.add('p1');
  p6.textContent = ('湿度:　　　' + data.main.humidity);
  p5.insertAdjacentElement('afterend', p6);
  let p7 = document.createElement('div');
  p7.classList.add('p1');
  p7.textContent = ('風速:　　　' + data.wind.speed);
  p6.insertAdjacentElement('afterend', p7);
  let p8 = document.createElement('div');
  p8.classList.add('p1');
  p8.textContent = ('風向:　　　' + data.wind.deg);
  p7.insertAdjacentElement('afterend', p8);
  let p9 = document.createElement('div');
  p9.classList.add('p1');
  p9.textContent = ('都市名:　　' + data.name);
  p8.insertAdjacentElement('afterend', p9);

  let i = document.createElement('img');
  i.setAttribute('id', 'i');
  if(data.weather[0].description == '厚い雲'){
    i.setAttribute('src', 'cloud.png');
  }else if(data.weather[0].description == '雲'){
    i.setAttribute('src', 'cloud(3).png');
  }else if(data.weather[0].description == '曇りがち'){
    i.setAttribute('src', 'cloud(2).png');
  }else if(data.weather[0].description == '霧'){
    i.setAttribute('src', 'fog.png');
  }else if(data.weather[0].description == '小雨'){
    i.setAttribute('src', 'rain.png');
  }else{
    i.setAttribute('src', 'sun.png');
  }
  result.insertAdjacentElement('beforeend', i);
}


//6-1 のイベントハンドラ登録処理は以下に記述
let push = document.querySelector('button#sendRequest');
push.addEventListener('click', sendRequest);


// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

  let l = document.querySelector('div#result');
  let ll = document.querySelector('div#r')
  if(l != null){
    l.remove();
  }
  if(ll != null){
    ll.remove();
  }

  let city = document.querySelector('input#city');
  let c = city.value;
  let id;

  if(c == ''){
    id = '360630';
  }else if(c == 'カイロ' || c == 'Cairo'){
    id = '360630';
  }else if(c == 'モスクワ' || c == 'Moscow'){
    id = '524901';
  }else if(c == 'ヨハネスブルグ' || c == 'Johannesburg'){
    id = '993800';
  }else if(c == '北京' || c == 'Beijing'){
    id = '1816670';
  }else if(c == '東京' || c == 'Tokyo'){
    id = '1850147';
  }else if(c == 'シンガポール' || c == 'Singapore'){
    id = '1880252';
  }else if(c == 'シドニー' || c == 'Sydney'){
    id = '2147714';
  }else if(c == 'ロンドン' || c == 'London'){
    id = '2643743';
  }else if(c == 'パリ' || c == 'Paris'){
    id = '2968815';
  }else if(c == 'リオデジャネイロ' || c == 'Rio de Janeiro'){
    id = '3451189';
  }else if(c == 'ニューヨーク' || c == 'New York'){
    id = '5128581';
  }else if(c == 'ロサンゼルス' || c == 'Los Angeles') {
    id = '5368361';
  }else{
    id = '360630';
  }

  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + id + '.json';


  axios.get(url).then(showResult).catch(showError).then(finish);
  
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;

  if(typeof data === "string"){
    data = JSON.parse(data);
  }

  let city = document.querySelector('input#city');
  let c = city.value;
  
  if(data.name == 'カイロ'){
    if(c != 'カイロ'){
      if(c != 'Cairo'){
        let r = document.createElement('div');
        r.setAttribute('id', 'r');
        let body = document.querySelector('body');
        r.textContent = ('検索できませんでした。正確に都市名を入力してください。');
        body.insertAdjacentElement('beforeend', r);
      }else{
        printDom(data);
      }
    }else{
      printDom(data);
    }
  }else{
    printDom(data);
  } 
  
  
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下は天気のデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
/*let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};*/