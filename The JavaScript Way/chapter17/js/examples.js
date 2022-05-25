// Password checker

const formElement = document.querySelector("form");

formElement.addEventListener("submit", e => {
    const password1 = e.target.elements.password1.value;
    const password2 = e.target.elements.password2.value;
    const passwordHelp = document.getElementById("passwordHelp");
    const passwordRegex = /[0-9]/;
    if (password1 === password2 && password1.length > 5 && passwordRegex.test(password1)) {
        passwordHelp.textContent = "Success: The passwords match";
    } else if (password1.length < 6) {
        passwordHelp.textContent = "Error: Password must contain at least 6 characters";
    } else if (!passwordRegex.test(password1)) {
        passwordHelp.textContent = "Error: Password must contain at least 1 number";
    } else {
        passwordHelp.textContent = "Error: The passwords doesn't match";
    }
    
    e.preventDefault();
});

// Character list

const houses = [
    {
        code: "ST",
        name: "Stark"
    },
    {
        code: "LA",
        name: "Lannister"
    },
    {
        code: "BA",
        name: "Baratheon"
    },
    {
        code: "TA",
        name: "Targaryen"
    }
];

const getCharacters = houseCode => {
    switch (houseCode) {
        case "ST":
            return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
        case "LA":
            return ["Tywin", "Cersei", "Jaime", "Tyrion"];
        case "BA":
            return ["Robert", "Stannis", "Renly"];
        case "TA":
            return ["Aerys", "Daenerys", "Viserys"];
        default:
            return [];
    }
};

for (const house of houses) {
    const optionElement = document.createElement("option");
    optionElement.value = house.code;
    optionElement.textContent = house.name;
    document.getElementById("house").appendChild(optionElement);
}


document.getElementById("house").addEventListener("change", e => {
    document.getElementById("characters").textContent = "";
    
    getCharacters(e.target.value).forEach(character => {
        const listItemElement = document.createElement("li");
        listItemElement.textContent = character;
        document.getElementById("characters").appendChild(listItemElement);
    });
});

// Autocomplete

const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua-and-Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaïjan"
];

const resetSuggestion = () => {
    document.getElementById("suggestions").innerHTML = "";
};

document.getElementById("country").addEventListener("input", e => {
    resetSuggestion();
    countryList.forEach(country => {
        if (country.startsWith(e.target.value)) {
            const paraElement = document.createElement("p");
            paraElement.textContent = country;
            paraElement.setAttribute("class", "suggestion");
            paraElement.addEventListener("click", e => {
                document.getElementById("country").value = e.target.textContent;
                resetSuggestion();
            });
            document.getElementById("suggestions").appendChild(paraElement);
        }
    });
});