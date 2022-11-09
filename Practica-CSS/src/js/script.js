const date = document.querySelector('#date');
const select = document.querySelector('#vaccine');
const arrows = document.querySelectorAll('.arrow');
const country = document.querySelector('#location');

window.addEventListener('DOMContentLoaded', getCountry);

date.value = new Date().toISOString().substring(0, 10);
date.addEventListener('input', () => date.style = 'opacity: 1');

select.addEventListener('input', () => {
    select.value == '' ? select.style = 'opacity: .8' : select.style = 'opacity: 1';
});

arrows.forEach(arrow => {
    arrow.addEventListener('click', displayText);
});

function displayText(e) {
    const arrow = e.target;
    const cardHidden = arrow.parentElement.nextElementSibling;
    const icon = arrow.previousElementSibling.previousElementSibling

    if(arrow.classList.contains('show')) {
        arrow.classList.remove('show');
        cardHidden.style.display = 'none';
        arrow.style = `
            background-color: rgba(52, 84, 210, .08);;
            color: var(--primary-blue)    
        `;
        arrow.innerText = 'arrow_drop_down';
        icon.style = 'box-shadow: 0px 2px 4px 1px rgb(0 0 0 / .1);';
    } else {
        arrow.classList.add('show');
        cardHidden.style.display = 'block';
        arrow.style = `
            background-color: rgba(0, 0, 0, .08);
            color: var(--grey)    
        `;
        arrow.innerText = 'arrow_drop_up';
        icon.style = 'box-shadow: 3px 5px 6px 0px rgb(0 0 0 / .2);';
    }
}


async function getCountry() {
    const url = 'https://api.ipgeolocation.io/ipgeo?apiKey=20df3911f037420387692f3dc039c0d0';
    await fetch(url)
    .then(response => response.json())
    .then(data => showcountry(data));
}

function showcountry(data) {
    country.value = data.country_capital;
}