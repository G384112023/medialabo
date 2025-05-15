function greeting(){
    let i = document.querySelector('input[name="left"]');
    let j = document.querySelector('input[name="right"]');
    hidari = i.value;
    migi = j.value;
    h =  Number(hidari);
    m = Number(migi);
    answer = h + m;
    let p = document.querySelector('span#answer');
    p.textContent = answer;

}

let b = document.querySelector('button#calc');

b.addEventListener('click', greeting);