let randomNumber1 = Math.floor(Math.random() * 6) + 1;
// console.log(`\nfirst random: ${randomNumber1}`);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
// console.log(`\nsecond random: ${randomNumber2}`);

// Use the random number you created in the last step to pick out a random dice image between dice1.png to dice6.png then place this image inside the left <img> element.

let leftImage = document.querySelector('.img1');
leftImage.setAttribute('src', `images/dice${randomNumber1}.png`);

let rightImage = document.querySelector('.img2');
rightImage.setAttribute('src', `images/dice${randomNumber2}.png`);


let h1 = document.querySelector('h1');
if (randomNumber1 > randomNumber2) {
    h1.innerText = "Player-1 Won!";    
} else if (randomNumber1 < randomNumber2) {
    h1.innerText = "Player-2 Won!";
} else if (randomNumber1 === randomNumber2) {
    h1.innerText = "Draw";
}

