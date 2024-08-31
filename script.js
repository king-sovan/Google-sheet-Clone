let container = document.getElementById('container');

let selectedCellSet = new Set();


for (let i = 0; i <= 26; i++) {
    let cell = document.createElement('div');
    cell.className = "cell header-cell";
    cell.innerText = i == 0 ? "": String.fromCharCode(64 + i);
    container.append(cell);
}

for (let row = 1; row <= 100; row++) {
    let rowHeader = document.createElement('div');
    rowHeader.className = "cell header-cell";
    rowHeader.innerText = row;
    container.append(rowHeader);

    for (let col = 1; col <=26; col++) {
        let cell = document.createElement('div');
        cell.className = "cell";
        cell.setAttribute("contenteditable", "true")
        container.append(cell);
        cell.addEventListener("click", handleClick)
    }
}

function handleClick(e) {
    let targetCell = e.target;
    if (!e.ctrlKey && !e.metaKey) {
        for (let t of selectedCellSet) {
            t.classList.remove("selectedCell")
        }
        selectedCellSet.clear();
    } 
    else if (selectedCellSet.has(targetCell)) {
        targetCell.classList.remove("selectedCell");
        selectedCellSet.delete(targetCell);
    } 
    else {
        targetCell.classList.add("selectedCell");
        selectedCellSet.add(targetCell);
    }
}

let boldButton = document.getElementById('boldButton');
boldButton.addEventListener("click", () => {
    selectedCellSet.forEach ((cell) => {
        cell.style.fontWeight = cell.style.fontWeight === "bold" ? "normal" : "bold";
    });
});

let italicButton = document.getElementById('italicButton');
italicButton.addEventListener("click", () => {
    selectedCellSet.forEach((cell) => {
        cell.style.fontStyle = cell.style.fontStyle === "italic" ? "normal" : "italic";
    });
});

let underlineButton = document.getElementById('underlineButton');
underlineButton.addEventListener("click", () => {
    selectedCellSet.forEach((cell) => {
        cell.style.textDecoration = cell.style.textDecoration === "underline" ? "none" : "underline";
    });
});

let textColor = document.getElementById('textColor')
textColor.addEventListener("change", () => {
    let selectedColor = textColor.value;
    selectedCellSet.forEach((cell) => {
        cell.style.color = selectedColor
    });
});
