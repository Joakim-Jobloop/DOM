const yellowMaker = (element) => {
    element.style.backgroundColor = "yellow"
}

const grandParent = document.querySelector("#grandparent")
const parents = document.querySelector(".parent")

yellowMaker(parents)

// grandParent.classList.add("child")

const newElement = document.createElement("h1");
newElement.textContent = "Jeg ble laget i javascript!"
grandParent.append(newElement)


const newChildElement = document.createElement("p");
newChildElement.textContent = "Jeg ble også laget av js!"
parents.append(newChildElement)

// document.body.prepend(newChildElement)

const fruits = ["Kiwi", "Apple", "Pear", "Melon", "Mango", "Orange"];

const fruitList = document.createElement("ul");
for (let i = 0; i < fruits.length; i++) {
    const fruitItem = document.createElement("li");
    fruitItem.textContent = fruits[i];
    fruitItem.style.fontSize = `${Math.floor(Math.random() * 50 + 10)}px`
    fruitList.append(fruitItem);
}

document.body.prepend(fruitList)

// parents.append(fruitList)