let sketchBoard = document.querySelector(".sketch-board");
let createDiv = document.createElement("div");

sketchBoard.append(createDiv);

function createRow() {
	for (let i = 0; i < 16; i++) {
		let element = document.createElement("div");
		// add css height and width
		element.textContent = "X";
		createDiv.append(element);
	}
}

function createBoard() {
	for (let i = 0; i < 16; i++) {
		createBoard();
	}
}
createBoard();

// loop through and create 16x16 div
