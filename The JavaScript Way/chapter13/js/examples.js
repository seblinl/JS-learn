const b = document.body;

const showChild = (node, index) => {
    if ((index >= node.childNodes.length) || (index < 0)) {
        console.error('Incorrect index');
    } else {
        if (node.childNodes[index].nodeType === document.ELEMENT_NODE) {
            console.log(node.childNodes[index]);
        } else {
            console.log('Wrong node type');
        }
    }
}

showChild(b, 1);
showChild(b, -1);
showChild(b, 8);
showChild(b, 0);