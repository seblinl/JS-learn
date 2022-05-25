// Modifying an HTML element: adding an <li>
document.getElementById("languages").innerHTML += '<li id="c">C</li>';

document.querySelector("h3").textContent += " for programming";

document.querySelector("h3").id = "title";

console.log(document.getElementById("title"));

const titleElement = document.querySelector("h3");
titleElement.classList.remove("beginning");
titleElement.classList.add("title");
console.log(titleElement);

const pythonElement = document.createElement("li");
pythonElement.id = "python";
pythonElement.textContent = "Python";
document.getElementById("languages").appendChild(pythonElement);

const rubyElement = document.createElement("li");
rubyElement.id = "ruby";
rubyElement.appendChild(document.createTextNode("Ruby"));
document.getElementById("languages").appendChild(rubyElement);

const perlElement = document.createElement("li");
perlElement.id = "perl";
perlElement.textContent = "Perl";
document.getElementById("languages").insertBefore(perlElement, document.getElementById("php"));

document.getElementById("languages").insertAdjacentHTML("afterBegin", '<li id="javascript">JavaScript</li>');

const lispElement = document.createElement("li");
lispElement.id = "lisp";
lispElement.textContent = "Lisp";
document.getElementById("languages").replaceChild(lispElement, document.getElementById("perl"));

document.getElementById("languages").removeChild(document.getElementById("lisp"));

// Adding a paragraph

const linkParaElement = document.createElement("p");
linkParaElement.innerHTML = 'Here is a more complete <a href="https://en.wikipedia.org/wiki/List_of_programming_languages">list</a> of languages.';
document.getElementById("content").appendChild(linkParaElement);

// Newspaper list

const newspapers = ["https://www.nytimes.com", "https://www.washingtonpost.com", "http://www.economist.com"];

for (const paper of newspapers) {
    const paperElement = document.createElement("p");
    const link = `<a href="${paper}">${paper}</a>`
    paperElement.innerHTML = link;
    document.getElementById("news-content").appendChild(paperElement);
}

// Mini-dictionary

const words = [{
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished"
  }, {
    term: "Tautology",
    definition: "logical argument constructed in such a way that it is logically irrefutable"
  }, {
    term: "Oxymoron",
    definition: "figure of speech that juxtaposes elements that appear to be contradictory"
  }];

const dlElement = document.createElement("dl");
dlElement.id = "wordlist";
document.getElementById("md-content").appendChild(dlElement);

  for (let i = 0; i < words.length; i++) {
    const dtElement = document.createElement("dt");
    const ddElement = document.createElement("dd");
    const strongElement = document.createElement("strong");
    dtElement.textContent = words[i].term;
    ddElement.textContent = words[i].definition;
    document.getElementById("wordlist").appendChild(strongElement);
    document.getElementsByTagName("strong")[i].appendChild(dtElement);
    document.getElementById("wordlist").appendChild(ddElement);
  }

// Updating colors

const backgroundColor = prompt('Type in a background color value:');
const textColor = prompt('Type in a text color value:');
const ucElement = document.getElementsByTagName("div");
  for (let i = 0; i < ucElement.length; i++) {
    if (!ucElement[i].id) {
      ucElement[i].style.backgroundColor = backgroundColor;
      ucElement[i].style.color = textColor;
    }
  }

// Information about an element

const ulInfoElement = document.createElement("ul");
const widthElement = document.createElement("li");
const heightElement = document.createElement("li");
const icStyle = getComputedStyle(document.getElementById("info-content"));
document.getElementById("infos").textContent = "Information about the element:";
widthElement.textContent = `Width: ${icStyle.width}`;
heightElement.textContent = "Height: " + icStyle.height;
document.getElementById("infos").appendChild(ulInfoElement);
document.getElementById("infos").getElementsByTagName("ul")[0].appendChild(widthElement);
document.getElementById("infos").getElementsByTagName("ul")[0].appendChild(heightElement);