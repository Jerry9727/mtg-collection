function getRandomCard() {
    return new Promise(function (resolve, reject) {
        fetch('https://api.scryfall.com/cards/random', {
            method: 'GET'
        }).then(res => {
            resolve(res.json())
        })
    })
};

//Von Element abhängig machen
async function fillInDetails(id) {
    element = document.getElementById('card-container-' + id);
    let randomCard = await getRandomCard();
    console.log(randomCard)
    document.getElementsByClassName('card-title')[0].innerHTML = randomCard.name;
    document.getElementsByClassName('card-mana-cost')[0].innerHTML = 'Mana cost: ' + insertCardSymbols(randomCard.mana_cost);
    document.getElementsByClassName('card-image')[0].setAttribute('src', randomCard.image_uris.normal);
    document.getElementsByClassName('card-description')[0].innerHTML = insertCardSymbols(randomCard.oracle_text);
}

//tap icon doesn't work. Scryfall returns "{t}" but mana-master expects "tap"
function insertCardSymbols(text) {
    let returnText = text;
    returnText = returnText.replace(/{(.*?)}/g, function(match, p1) {
        return '{' + p1.toLowerCase() + '}';
    });

    returnText = returnText.replaceAll('{', '<i class="ms ms-')
        .replaceAll('}', ' ms-cost ms-shadow"></i>');

    return returnText;
};

fillInDetails();


//Write function to insert as many cards as wanted