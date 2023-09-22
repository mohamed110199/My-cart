document.addEventListener('DOMContentLoaded', function() {
    const numberElement = document.getElementById('number');
    const incrementButton = document.getElementById('plus');
    const decrementButton = document.getElementById('minus');

    let currentNumber = 1;

    function increment() {
        if (currentNumber < 9) {
            currentNumber++;
            numberElement.innerText = currentNumber;
        }
    }

    function decrement() {
        if (currentNumber > 1) {
            currentNumber--;
            numberElement.innerText = currentNumber;
        }
    }

    plus.addEventListener('click', increment);
    minus.addEventListener('click', decrement);
});


