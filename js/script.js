document.addEventListener('DOMContentLoaded', () => {
    let count = 0;

    const counterContainer = document.createElement('div');
    counterContainer.className = 'counter-container';
    document.body.appendChild(counterContainer);

    const title = document.createElement('h1');
    title.textContent = 'Counter di Andrea Immacolato';
    counterContainer.appendChild(title);

    const counterElement = document.createElement('div');
    counterElement.id = 'counter';
    counterElement.textContent = count;
    counterContainer.appendChild(counterElement);
    
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    const decreaseButton = document.createElement('button');
    decreaseButton.id = 'decrease-btn';
    decreaseButton.textContent = '-';
    counterContainer.appendChild(decreaseButton);

    const resetButton = document.createElement('button');
    resetButton.id = 'reset-btn';
    resetButton.textContent = 'Reset';
    counterContainer.appendChild(resetButton);

    const increaseButton = document.createElement('button');
    increaseButton.id = 'increase-btn';
    increaseButton.textContent = '+';
    counterContainer.appendChild(increaseButton);

    counterContainer.appendChild(buttonContainer);

    const startValueLabel = document.createElement('label');
    startValueLabel.htmlFor = 'start-value';
    startValueLabel.textContent = 'Scegli il valore di partenza:';
    startValueLabel.style.display = 'block';
    counterContainer.appendChild(startValueLabel);

    const startValueInput = document.createElement('input');
    startValueInput.type = 'text';
    startValueInput.id = 'start-value';
    startValueInput.placeholder = 'Digita un numero';
    counterContainer.appendChild(startValueInput);

    const setValueButton = document.createElement('button');
    setValueButton.id = 'set-value-btn';
    setValueButton.textContent = 'Imposta';
    counterContainer.appendChild(setValueButton);
    
    const errorMessage = document.createElement('div');
    errorMessage.style.color = '#ff7700';  
    errorMessage.style.display = 'none';  
    errorMessage.textContent = 'Inserisci un numero valido';
    counterContainer.appendChild(errorMessage);

    function updateCounter() {
        counterElement.textContent = count;
    }

    increaseButton.addEventListener('click', () => {
        count++;
        updateCounter();
    });

    decreaseButton.addEventListener('click', () => {
        count--;
        updateCounter();
    });

    resetButton.addEventListener('click', () => {
        count = 0;
        startValueInput.value = '';
        errorMessage.style.display = 'none'; 
        updateCounter();
    });

   setValueButton.addEventListener('click', () => {
    const inputValue = parseInt(startValueInput.value); 
    if (!isNaN(inputValue)) {  
        count = inputValue; 
        errorMessage.style.display = 'none';  
    } else {
        errorMessage.style.display = 'block';  
    }
    updateCounter(); 
});

});
