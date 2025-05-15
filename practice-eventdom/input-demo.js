function greeting(){
    let i = document.querySelector('input[name="shimei"]');
    shimei = i.value;
    let p = document.querySelector('p#message');
    aisatsu = 'こんにちは、' + shimei + 'さん';
    p.textContent = aisatsu;
}

let b = document.querySelector('button#print');

b.addEventListener('click', greeting);
