# Counter Javascript

A simple and interactive web application that allows users to set an initial value and increment or decrement it using buttons. This project uses HTML, CSS, and JavaScript to manipulate the DOM and handle user interactions.

## Features

- Users can set a custom starting value or default to 0.
- The counter can be incremented or decremented using the "+" and "-" buttons.
- The counter can be reset to the initial value.
- An error message is displayed if the user enters an invalid value.

## Project Structure

The project consists of the following main files:

- `index.html`: The structure of the web page, loads the JavaScript and CSS files.
- `styles.css`: Contains the custom styles for the appearance of the counter.
- `script.js`: Contains the JavaScript logic that handles the counter's functionality and user interactions. Additionally, the DOM structure is dynamically created and managed using JavaScript.

## Technologies Used

- **HTML5**: Used to create the structure of the page.
- **CSS3**: Used for styling and layout, including buttons and counter display.
- **JavaScript**: Used for DOM manipulation and interaction handling, including updating the counter value and displaying error messages.

## Installation

Clone or download the repository:

```bash
git clone https://github.com/andreaimmacolato/Progetto_JavaScript.git
```

## Usage

1. Enter a starting value in the input field.
2. Click the "Imposta" button to confirm the starting value.
3. Use the "+" and "-" buttons to increment or decrement the counter.
4. Click "Reset" to reset the counter to the starting value.

## Code Examples

### JavaScript

```javascript

const errorMessage = document.createElement('div');
errorMessage.style.color = '#ff7700';  
errorMessage.style.display = 'none'; 
errorMessage.textContent = 'Inserisci un numero valido';
counterContainer.appendChild(errorMessage);

function updateCounter() {
    counterElement.textContent = count;
}
```
### CSS

```css
button {
    padding: 10px 20px;
    font-size: 1.2em;
    margin: 5px;
    border: none;
    background-color: #ff7700;
    color: white;
    border-radius: 50px;
    cursor: pointer;
    transition: background-color 0.3s;
}
```

## Meta Tags for Social Sharing

The project includes meta tags for the Open Graph protocol, which improve social media sharing:

```html

<meta property="og:title" content="Counter di Andrea Immacolato">
<meta property="og:description" content="Un contatore interattivo che consente agli utenti di impostare, incrementare e decrementare i valori utilizzando JavaScript.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://andreaimmacolato.github.io/Progetto_JavaScript/">
<meta property="og:image" content="https://andreaimmacolato.github.io/Progetto_JavaScript/img/counter.jpg">
```
