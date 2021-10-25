const row = document.querySelector('.row');

for (let i = 1; i <= 100; i++){
    const box = document.createElement ('div');
    box.classList.add('gp-box');
    box.innerHTML = i;
    row.append (box);
    console.log(box);

    if (!(i % 5) && !(i % 3)){
        box.classList.add('gp-fifteen');
        box.innerHTML = 'fizzbuzz';
    } else if (!(i % 5)){
        box.classList.add('gp-five');
        box.innerHTML = 'buzz';
    } else if (!(i % 3)){
        box.classList.add ('gp-three');
        box.innerHTML = 'fizz';
    }
}