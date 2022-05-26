// Language list

fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/languages.txt")
    .then(response => response.text())
    .then(text => {
        return text.split(";");
    })
    .then(textArr => {
        textArr.forEach(element => {
            const liElement = document.createElement("li");
            liElement.textContent = element;
            document.getElementById("languageList").appendChild(liElement);
        });
    })
    .catch(err => {
        console.error(err.message);
    });

// Famous paintings

fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json")
    .then(response => response.json())
    .then(paintings => {
        paintings.forEach(painting => {
            const trElement = document.createElement("tr");
            const nameElement = document.createElement("td");
            const yearElement = document.createElement("td");
            const artistElement = document.createElement("td");

            nameElement.textContent = painting.name;
            yearElement.textContent = painting.year;
            artistElement.textContent = painting.artist;

            document.getElementById("paintings").appendChild(trElement);
            trElement.appendChild(nameElement);
            trElement.appendChild(yearElement);
            trElement.appendChild(artistElement);
        });
    })
    .catch(err => console.error(err.message));