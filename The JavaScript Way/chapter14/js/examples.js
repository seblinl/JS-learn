// Counting elements

const countElements = selector => {
    return document.querySelectorAll(selector).length;
};

console.log('CE: ' + countElements("p"));
console.log('CE: ' + countElements(".adjective"));
console.log('CE: ' + countElements("p .adjective"));
console.log('CE: ' + countElements("p > .adjective"));

// Handling attributes

const linkInfo = () => {
    const linkElements = document.getElementsByTagName("a");
    const allLinks = linkElements.length;
    const firstLink = linkElements[0];
    const lastLink = linkElements[linkElements.length-1];
    if (allLinks <= 0) {
        return 'No links.';
    } else {
    return `${allLinks}\n${firstLink}\n${lastLink}`;
    }
};

console.log('HA: ' + linkInfo());

// Handling classes

const has = (id, someClass) => {
    const idElement = document.getElementById(id);
    if (idElement) {
        if (idElement.classList.contains(someClass)) {
            console.log('HC: true')
        } else {
            console.log('HC: false');
        }
    } else {
        console.error(`HC: No element has id ${id}`);
    }
};

has("saxophone", "woodwind");
has("saxophone", "brass");
has("trumpet", "brass");
has("contrabass", "chordophone");