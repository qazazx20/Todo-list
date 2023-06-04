const bored = document.querySelector("#bored span:nth-of-type(2)");

const url = `http://www.boredapi.com/api/activity/`;

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        bored.innerText = `${data.activity}`;
    });