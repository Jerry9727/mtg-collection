function getRandomCard() {
    return new Promise(function (resolve, reject) {
        fetch('https://api.scryfall.com/cards/random', {
            method: 'GET'
        }).then(res => {
            resolve(res.json())
        })
    })
};

async function fillInDetails() {
    let randomCard = await getRandomCard();
    console.log(randomCard)
    document.getElementsByClassName('card-title')[0].innerHTML = randomCard.name;
    document.getElementsByClassName('card-mana-cost')[0].innerHTML = 'Mana cost: ' + insertIcons(randomCard.mana_cost);
    document.getElementsByClassName('card-image')[0].setAttribute('src', randomCard.image_uris.normal);
    document.getElementsByClassName('card-description')[0].innerHTML = randomCard.oracle_text;
}

function insertIcons(text) {
    return text.replace(/{[\d]}/, '<img src="resources/mana_one.svg" class="mana-cost-icon"></img>');
};

fillInDetails();