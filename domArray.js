function randomAnimal() {
    const animals = ["Lion", "Tiger", "Elephant", "Giraffe", "Zebra", "Kangaroo", "Monkey", "Penguin", "Dolphin", "Panda"];

let outPut = document.getElementById("randomElementOutPut")

let child = outPut.firstChild;
while (child) {
    outPut.removeChild(child)
    child = outPut.firstChild;
}

let randomNumber = Math.floor(Math.random() * animals.length)

let newParagraph = document.createElement("p")

newParagraph.textContent = animals[randomNumber];

outPut.appendChild(newParagraph)

return outPut

}