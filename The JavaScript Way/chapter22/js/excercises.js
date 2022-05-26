// More beer please
const grabRandomBeer = () => {
    fetch("https://api.punkapi.com/v2/beers/random")
        .then(response => response.json())
        .then(beers => {
            const beer = beers[0];
            
            const nameElement = document.createElement("h2");
            nameElement.textContent = beer.name;

            const taglineElement = document.createElement("h3");
            taglineElement.textContent = beer.tagline;
            
            const descriptionElement = document.createElement("p");
            descriptionElement.textContent = beer.description;
            
            const infoElement = document.createElement("p");
            infoElement.textContent = `Alcohol by volume: ${beer.abv}%. Volume: ${beer.volume.value + " " +  beer.volume.unit}. First brewed on ${beer.first_brewed}.`;

            const beerElement = document.getElementById("beer");
            beerElement.innerHTML = "";
            
            beerElement.appendChild(nameElement);
            beerElement.appendChild(taglineElement);
            beerElement.appendChild(descriptionElement);
            beerElement.appendChild(infoElement);
        })
        .catch(err => console.error(err.message));
};

document.getElementById("grabButton").addEventListener("click", grabRandomBeer);

// GitHub profile

const usernameElement = document.getElementById("username");

const githubProfile = (username) => {
    fetch("https://api.github.com/users/" + username)
        .then(response => response.json())
        .then(user => {
            const avatarElement = document.createElement("img");
            avatarElement.src = user.avatar_url;
            avatarElement.setAttribute("width", "200px");
            avatarElement.style.marginTop = "5px";

            const nameElement = document.createElement("h2");
            nameElement.textContent = user.name;
            nameElement.style.margin = "5px 0px";

            const websiteElement = document.createElement("a");
            websiteElement.textContent = user.blog;
            websiteElement.href = user.blog;

            const userInfoElement = document.getElementById("userInfo");
            userInfoElement.innerHTML = "";

            userInfoElement.appendChild(avatarElement);
            userInfoElement.appendChild(nameElement);
            userInfoElement.appendChild(websiteElement);
        })
        .catch(err => console.error(err.message));
};

document.getElementById("searchButton").addEventListener("click", e => {
    githubProfile(usernameElement.value);

    usernameElement.value = "";
});

// Star Wars universe

const getPlanet = (id) => {
    fetch("https://swapi.dev/api/planets/" + id)
        .then(response => response.json())
        .then(planet => {
            const nameElement = document.createElement("h3");
            nameElement.textContent = planet.name;

            const infoParaElement = document.createElement("p");
            infoParaElement.textContent = `Climate: ${planet.climate}. Population: ${planet.population}. Appears in ${planet.films.length} movie(s).`;

            const infosElement = document.getElementById("infos");
            infosElement.innerHTML = "";

            infosElement.appendChild(nameElement);
            infosElement.appendChild(infoParaElement);
        })
        .catch(err => console.error(err.message));
};

for (let i = 1; i <= 10; i++) {
    const planetIdElement = document.createElement("a");
    planetIdElement.style.borderRight = "1px solid black";
    planetIdElement.style.padding = "0px 2px";
    planetIdElement.textContent = i;
    planetIdElement.href = "#";
    planetIdElement.addEventListener("click", e => {
        getPlanet(e.target.textContent);

        e.preventDefault();
    });

    document.getElementById("links").appendChild(planetIdElement);
}