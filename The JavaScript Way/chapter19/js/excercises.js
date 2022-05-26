const starterLinks = [
    {
        author: "Sebastian",
        title: "Wikipedia",
        url: "wikipedia.org"
    },
    {
        author: "Sebastian",
        title: "The Guardian",
        url: "https://www.theguardian.com"
    },
    {
        author: "Sebastian",
        title: "Metacritic",
        url: "www.metacritic.com"
    }
];

const contentElement = document.getElementById("content");
const firstDivElement = document.querySelector("div");

// Check url for http prefix
const ammendUrl = (url) => {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        return "http://" + url;
    } else {
        return url;
    }
};

// Adding a link card
const addLink = (author, title, link) => {
    const linkCardElement = document.createElement("div");
    const headlineElement = document.createElement("h4");
    const titleAnchorElement = document.createElement("a");
    const linkSpanElement = document.createElement("span");
    const authorSpanElement = document.createElement("span");

    linkCardElement.setAttribute("class", "link");
    headlineElement.setAttribute("class", "linkHeadline");
    titleAnchorElement.setAttribute("class", "linkTitle");
    titleAnchorElement.textContent = title;
    titleAnchorElement.href = ammendUrl(link);
    linkSpanElement.setAttribute("class", "linkUrl");
    linkSpanElement.textContent = ammendUrl(link);
    authorSpanElement.setAttribute("class", "linkAuthor");
    authorSpanElement.textContent = "Submitted by: " + author;

    contentElement.insertBefore(linkCardElement, contentElement.childNodes[1]);
    linkCardElement.appendChild(headlineElement);
    headlineElement.appendChild(titleAnchorElement);
    headlineElement.appendChild(linkSpanElement);
    linkCardElement.appendChild(authorSpanElement);
};

// Submitting form
const submitLink = () => {
    const containerElement = document.createElement("form");
    const authorElement = document.createElement("input");
    const titleElement = document.createElement("input");
    const linkElement = document.createElement("input");
    const addButtonElement = document.createElement("button");

    containerElement.setAttribute("class", "linkForm");
    authorElement.placeholder = "Author";
    titleElement.placeholder = "Title";
    linkElement.placeholder = "Link";
    addButtonElement.setAttribute("class", "btn btn-default");
    addButtonElement.textContent = "Add link";
    addButtonElement.addEventListener("click", e => {
        if (authorElement.value === "" || titleElement.value === "" || linkElement.value === "") {
            const errorElement = document.createElement("p");

            errorElement.style.color = "rgba(255,0,0,0.50";
            errorElement.textContent = "Please fill in all text fields";

            containerElement.appendChild(errorElement);

            setTimeout(() => containerElement.removeChild(errorElement), 2000);
        } else {
        addLink(authorElement.value, titleElement.value, linkElement.value);

        containerElement.innerHTML = "";
        containerElement.style.background = "rgba(0,255,0,0.25)";
        containerElement.style.color = "green";
        containerElement.setAttribute("class", "link");
        containerElement.textContent = `The link ${titleElement.value} has been succesfully added.`;

        setTimeout(() => firstDivElement.removeChild(containerElement), 2000);
        }

        e.preventDefault();
    });

    firstDivElement.insertBefore(containerElement, contentElement);
    containerElement.appendChild(authorElement);
    containerElement.appendChild(titleElement);
    containerElement.appendChild(linkElement);
    containerElement.appendChild(addButtonElement);
};

// Populate with pre-saved links
for (link of starterLinks) {
    addLink(link.author, link.title, link.url);
}

document.getElementById("submitButton").addEventListener("click", submitLink);