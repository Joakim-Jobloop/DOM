const yellowMaker = (element) => {
    // elementet man setter i callbacken får en gul bakgrunnsfarge:
    element.style.backgroundColor = "yellow"
}

// initialiserer variabl for html objekter som har id="grandparent"
const grandParent = document.querySelector("#grandparent")
// initialiserer variable for html objekt som har class="parent"
const parents = document.querySelector(".parent")

//querySelector velger det FØRSTE objektet som det finner som passer inn

//callback funksjonen på toppen, sier at det er objektet med class="parent" som skal targetes
yellowMaker(parents)

// grandParent.classList.add("child")


// initialiserer variabel at man skal lage h1 tag:
const newElement = document.createElement("h1");
// sier at h1 taggen man har initialisert skal ha et spesifikt tekstinnhold:
newElement.textContent = "Jeg ble laget i javascript!"
// sier at denne h1 taggen med tekstinnholdet skal legges inni i en tag som har id="grandParent":
grandParent.append(newElement)


// samme som over bare med p tag istedet og legger det til i en tag som har class="parent"
const newChildElement = document.createElement("p");
newChildElement.textContent = "Jeg ble også laget av js!"
parents.append(newChildElement)

// document.body.prepend(newChildElement)

// initialisere et array:
const fruits = ["Kiwi", "Apple", "Pear", "Melon", "Mango", "Orange"];

// initialiserer variabel at man skal lage ul tag:
const fruitList = document.createElement("ul");
// kjøre standard loop som kjører lengde av arrayet man har definert i forkant:
for (let i = 0; i < fruits.length; i++) {
    // hver gang loopen kjøres:
    // lager et nytt li element:
    const fruitItem = document.createElement("li");
    // li elementet får tekstinnholdet til tilsvarende index i arrayet over:
    fruitItem.textContent = fruits[i];
    // gir li elementet en tilfeldig font størrelse
    fruitItem.style.fontSize = `${Math.floor(Math.random() * 50 + 10)}px`
    // legger li elementet inn i ul'en man har definert på starten:
    fruitList.append(fruitItem);
    //etter alt dette finnes det, men det har ikke blitt sagt hvor det skal være
}

// forteller hvor den ferdige ul + li items skal være:
document.body.prepend(fruitList)
//prepend forteller at man skal legge dette på toppen av siden

// parents.append(fruitList)