const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

//event listener for the click events
//detector de eventos para los eventos de clic ->

btn.addEventListener('click', function() {
    //ger random number between 0 - 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.random();
}

//b87e6167d8d04563e6a946149c87eb6d23e23bb9

