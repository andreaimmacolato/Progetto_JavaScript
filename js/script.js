document.addEventListener('DOMContentLoaded', () => {
    let count = 0;

    function createElement(tag, { className = '', innerHTML = '', attributes = {}, events = {}, styles = {}, children = [] } = {}) {
        const element = document.createElement(tag);
        
        if (className) element.className = className;
        if (innerHTML) element.innerHTML = innerHTML;
        
        Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
        Object.entries(events).forEach(([event, handler]) => element.addEventListener(event, handler));
        Object.entries(styles).forEach(([style, value]) => element.style[style] = value);
        
        children.forEach(child => {
            element.appendChild(typeof child === 'string' ? document.createTextNode(child) : child);
        });

        return element;
    }

    const counterContainer = createElement('div', { className: 'counter-container' });
    document.body.appendChild(counterContainer);


    const elements = [
        createElement('h1', { innerHTML: 'Counter di Andrea Immacolato' }),
        createElement('div', { innerHTML: count, attributes: { id: 'counter' } }),
        createElement('label', { innerHTML: 'Scegli il valore di partenza:', attributes: { for: 'start-value' } }),
        createElement('input', { attributes: { id: 'start-value', type: 'text', placeholder: 'Digita un numero' } }),
        createElement('button', { innerHTML: 'Imposta', attributes: { id: 'set-value-btn' } }),
        createElement('div', { innerHTML: 'Inserisci un numero valido', styles: { color: '#ff7700', display: 'none' } })
    ];

    elements.forEach(el => counterContainer.appendChild(el));
    const [ , counterElement, , startValueInput, setValueButton, errorMessage ] = elements;

    const buttonActions = [
        { id: 'decrease-btn', label: '-', action: () => count-- },
        { id: 'reset-btn', label: 'Reset', action: () => { count = 0; startValueInput.value = ''; errorMessage.style.display = 'none'; }},
        { id: 'increase-btn', label: '+', action: () => count++ }
    ];

    const buttonContainer = createElement('div', { className: 'button-container' });
    buttonActions.forEach(({ id, label, action }) => {
        const button = createElement('button', {
            innerHTML: label,
            attributes: { id },
            events: { click: () => { action(); updateCounter(); } }
        });
        buttonContainer.appendChild(button);
    });

    counterContainer.appendChild(buttonContainer);

    function updateCounter() {
        counterElement.textContent = count;
    }

    setValueButton.addEventListener('click', () => {
        const inputValue = startValueInput.value;
        if (/^\d+$/.test(inputValue)) { 
            count = parseInt(inputValue);
            errorMessage.style.display = 'none';
        } else {
            errorMessage.style.display = 'block';
        }
        updateCounter();
    });

    updateCounter();
});
