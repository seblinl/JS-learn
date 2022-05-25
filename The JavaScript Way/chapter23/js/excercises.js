// New articled

document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();

    const formData = new FormData(e.target);

    fetch("https://thejsway-server.herokuapp.com/articles", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        document.getElementById("updateInfo").textContent = result;
    })
    .catch(err => console.error(err.message));
});

// Visited countries

const travelInfo = {
        name: "Sebastian",
        countries: [
            {
                name: "Denmark",
                year: 2002
            },
            {
                name: "Poland",
                year: 2004
            },
            {
                name: "Germany",
                year: 2007
            }
        ]
    };

fetch("http://localhost:3000/api/countries", {
    method: "POST",
    headers: {
        Accept: "application/json",
        "Content-type": "application/json"
    },
    body: JSON.stringify(travelInfo)
})
    .then(response => response.text())
    .then(result => {
        console.log(result);
    })
    .catch(err => console.error(err.message));