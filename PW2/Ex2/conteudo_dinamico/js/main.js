import flags from './model/flags.js';

function flagcard(flag) {
    return `
        <div id="${flag.id}"class="flag col-2 my-2 text-center">
            <img src="${flag.image}" alt="${flag.name}">
            <p>${flag.name}</p>
        </div>
    `;
}

const allcards = flags.map( (flag) => flagcard(flag));

const main = document.querySelector('main');
main.innerHTML = allcards.join('');