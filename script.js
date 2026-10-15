// ===========================================
// FETCH HTML ELEMENTS
// SECTION A
// ===========================================

const runTasksButton = document.getElementById("runTasksButton");
const outputElement = document.getElementById("output");


// ===========================================
// DATA
// ===========================================

export const marks = [45, 60, 85, 30, 95];

// ===========================================
//SECTION B TASKS
// Complete the functions below.
// Do NOT change the function names.
// ===========================================

 
export function addMark() {
    marks.push(70);
    return marks;
}

function findFirstMarkOver60() {
    return marks.find(mark => mark > 60);
}

export  function increaseMarksBy5() {
    return marks.map(mark => mark + 5);
}

export function getTotalMarks() {
    return marks.reduce((total, mark) => total + mark, 0)
}

export function findFirstMarkOver80() {
    return marks.find(mark => mark > 80)
}

export function sortMarksLowestToHighest() {
    return marks.sort((a, b) => a - b);
}



// ===========================================
// PROVIDED FUNCTIONS
// DO NOT EDIT
// ===========================================

export function displayResult(taskName, result) {

    const paragraph = document.createElement("p");

    paragraph.textContent = `${taskName}: ${result}`;

    if (outputElement) {
        outputElement.appendChild(paragraph);
    }

    console.log(taskName, result);
}

export function runTasks() {

    if (outputElement) {
        outputElement.innerHTML = "";
    }

    displayResult("Task 1", addMark());
    displayResult("Task 2", getMarksOver60());
    displayResult("Task 3", increaseMarksBy5());
    displayResult("Task 4", getTotalMarks());
    displayResult("Task 5", findFirstMarkOver80());
    displayResult("Task 6", sortMarksLowestToHighest());

}


function addMark() {
    marks.push(70);
    return marks;
}

function getMarksOver60() {
    return marks.filter(mark => mark > 60);
}

function increaseMarksBy5() {
    return marks.map(mark => mark + 5);
}

function getTotalMarks() {
    return marks.reduce((total, mark) => total + mark, 0);
}

function findFirstMarkOver80() {
    return marks.find(mark => mark > 80);
}

function sortMarksLowestToHighest() {
    return marks.sort((a, b) => a - b);
}

// ===========================================
// ADD EVENT LISTENER
// SECTION A 
// ===========================================

runTasksButton.Module_3_Component_1_Summative("click", runTasks);