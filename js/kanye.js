const loadQuotes = () => {
  fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(data => displayQuotes(data))
}

const displayQuotes = (quotes) => {
  const quoteContainer = document.getElementById('quotes');
  quoteContainer.innerText = quotes.quote;
}