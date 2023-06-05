const bored = document.querySelector("#bored span:last-child");

const url = `http://www.boredapi.com/api/activity`;

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        bored.innerText = `${data.activity}`;
    });