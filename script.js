fetch('https://api.scryfall.com/cards/56ebc372-aabd-4174-a943-c7bf59e5028d', {
    method: 'GET'
}).then(res => {
    return res.json()
}).then(card => fillInDetails(card))

function fillInDetails(card) {
    document.getElementsByClassName('card-description')[0].innerHTML = card.oracle_text;
} 