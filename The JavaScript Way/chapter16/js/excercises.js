// Counting clicks

const myButtonElement = document.getElementById("myButton");
const clickCountElement = document.getElementById("clickCount");
const deactivateElement = document.getElementById("deactivate");

const clickCount = () => {
    clickCountElement.textContent++;
}

myButtonElement.addEventListener("click", clickCount);

deactivateElement.addEventListener("click", () => {
    myButtonElement.removeEventListener("click", clickCount)
});

// Changing colors

const paraElements = document.getElementsByTagName("div");
const coloring = (array, color) => {
    for (const element of array) {
        element.style.backgroundColor = color;
    }
};

document.addEventListener("keypress", e => {
    switch (e.key) {
        case "r":
            coloring(paraElements, "red");
            break;
        case "y":
            coloring(paraElements, "yellow");
            break;
        case "g":
            coloring(paraElements, "green");
            break;
        case "b":
            coloring(paraElements, "blue");
            break;
        default:
            coloring(paraElements, "white");
    }
});

// A dessert list

const addButtonElement = document.getElementById("addButton");
const dessertsElement = document.getElementById("dessert");

const listItem = () => {
    const listElement = document.createElement("li");
    listElement.textContent = prompt("Add a favorite dessert:");
    listElement.addEventListener("click", () => {
        listElement.textContent = prompt("Change dessert:");
    });
    dessertsElement.appendChild(listElement);
};

addButtonElement.addEventListener("click", listItem);

// Interactive quiz

const questions = [
    {
        statement:"2 + 2?",
        answer: "2 + 2 = 4"
    },
    {
        statement: "In wich year did Christopher Colombus discover America?",
        answer: "1492"
    },
    {
        statement: "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
        answer: "The letter 'E'"
    }
];
const quizElement = document.createElement("dl");
document.getElementById("content").appendChild(quizElement);

for (let i = 0; i < questions.length; i++) {
    const questionElement = document.createElement("dt");
    const answerElement = document.createElement("dd");
    const showAnswerElement = document.createElement("button");
    questionElement.innerHTML = `<strong>Question ${i + 1}:</strong> <em>${questions[i].statement}</em>`;
    showAnswerElement.textContent = "Show answer";
    showAnswerElement.addEventListener("click", () => {
        answerElement.removeChild(showAnswerElement);
        answerElement.textContent = questions[i].answer;
    });
    
    quizElement.appendChild(questionElement);
    quizElement.appendChild(answerElement);
    answerElement.appendChild(showAnswerElement);
}