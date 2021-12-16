const items = ["candles 🕯️", "decorations 🎄", "chocolate 🍫"]
const checklist = document.getElementById("checklist")
const button = document.querySelector("button")
const input = document.querySelector("input")
const clearAll = document.querySelector(".delete-item")

// Task:
// - For each item in the items array, create a div with a class of "checklist-item", which contains a checkbox input and corresponding label.
// - Make sure that the shopping list can render a checkbox for all the items, even if new items are added to the items array.

// Stretch goals:
// - Add an input which allows the user to add more items.
// - Add a delete button for the items.

// Scrimba solution code
// for (let i=0; i<items.length; i++) {
//     checklist.innerHTML += `
//          <div class="checklist-item">
//                 <input type="checkbox" id="${items[i]}" value="${items[i]}">
//                 <label for="${items[i]}" class="strikethrough">${items[i]}</label>
//             </div>
//     `
// }

function list() {
    const newChecklist = items.map(item =>
        `<li class="checklist-item">
                <input type="checkbox" id="${item}" value="${item}">
                <label for="${item}" class="strikethrough">${item}</label>
        </li>`).join('\n');
    checklist.innerHTML = newChecklist;
}

list(); 

function addItem(e) {
    if (e.code === 'Enter') {
        button.click();
    }
}

button.onclick = () => {
    updateList();
}

function updateList() {
    items.push(input.value);
    input.value = "";
    list();
}

clearAll.addEventListener("click", function () {
    items.length = 0;
    list();
});
