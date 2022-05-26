let menu = '';
const menuMsg = 'Choose an option:\n 1: Show Links\n 2: Add a Link\n 3: Remove a Link\n 0: Quit';
const linkBasket = [];

class LinkTemplate {
    constructor(title, url, author) {
        this.title = title;
        this.url = url;
        this.author = author;
    }
    display() {
        return (`${this.title} (${this.url}). Author: ${this.author}`);
    }
}

const takingInfo = () => {
    const title = prompt('Name your link:');
    let url = prompt('Enter the link URL:');
    const author = prompt('Name the author:');

    // Adding http:// to links without
    if ((!url.startsWith('http://')) && (!url.startsWith('https://'))) {
        url = `http://${url}`;
    }

    linkBasket.push(new LinkTemplate(title, url, author));
};

const displayLinks = array => {
    let linkInfo = '';
    for (let i = 0; i < array.length; i++) {
        linkInfo += `${i}: ${array[i].display()}\n`;
    }

    return linkInfo;
};


const removeLink = (array) => {
    let targetIndex = array.length;
    while (targetIndex > array.length-1 || targetIndex < 0) {
        targetIndex = Number(prompt(`Input the index number of the link to remove:\n(${availableLinks(linkBasket)})`))
    }

    linkBasket.splice(targetIndex, 1);
};

const availableLinks = array => {
    let showAvailability = '';
    if (array.length-1 < 0) {
        showAvailability = 'No links available';
    } else if (array.length-1 === 0) {
        showAvailability = '0';
    } else {
        showAvailability = `0 - ${array.length-1}`;
    }

    return showAvailability;
};

// Main loop routine

while (menu !== 0) {
    menu = Number(prompt(menuMsg));
    switch (menu) {
        case 1: // Show link
            if (linkBasket.length-1 < 0) {
                alert(availableLinks(linkBasket));
            } else {
                alert(displayLinks(linkBasket));
            }
            break;
        case 2: // Add link
            takingInfo();
            break;
        case 3: // Remove link
            if (linkBasket.length > 0) {
                removeLink(linkBasket);
            } else {
                alert(availableLinks(linkBasket));
            }
            break;
        case 0: // Exit confirmation
            alert('Exiting application.');
            break;
    }
}