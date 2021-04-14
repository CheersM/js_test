function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
const letters = 'ABCDEFGHIKLMNOPQRSTVXYZ';

function getUniqLetter(arrLetters, range) {
    const currentNumber = getRandomInt(range);
    const currentLetter = letters[currentNumber];
    if (arrLetters.indexOf(currentLetter) === -1) {
        return currentLetter;
    } else {
        return getUniqLetter(arrLetters, range);
    }
}
const arr = new Array(5);
for (let i = 0; i < arr.length; i++) {
    arr[i] = getUniqLetter(arr, letters.length);
}

const select = document.getElementById("selectLetters");
for (let i = 0; i < arr.length; i++) {
    let opt = arr[i];
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
};

select.onchange = function(event) {
    const letter = event.target.value;
    const filteredList = list.filter(item => item.name[0] === letter);
    const ul = document.getElementById("names");
    ul.innerHTML = '';
    if (filteredList.length === 0) {
        let element = document.createElement("li");
        element.appendChild(document.createTextNode('No matches found :('));
        ul.appendChild(element);
    }
    for (let i = 0; i < filteredList.length; i++) {
        let element = document.createElement("li");
        element.appendChild(document.createTextNode(filteredList[i].name));
        ul.appendChild(element);
    }
}