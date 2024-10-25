let dropDown = document.querySelector(".dropDown");
let regionName = document.querySelector(".region");


let regBtn = document.querySelector(".regBtn");
regBtn.addEventListener("click", () => {
    let computedStyle = window.getComputedStyle(dropDown);
    if (computedStyle.display === "none") {
        dropDown.style.display = "block";
    } else {
        dropDown.style.display = "none";
    }
});

let regionContainer = document.querySelector(".regions");
function createRegionContainer(name) {
    let container = document.createElement("div");
    container.className = "region";

    let span = document.createElement("span");
    span.className = "regionName";
    span.textContent = name;

    let input = document.createElement("input");
    input.className = "regionCheck";
    input.type = "checkbox";

    container.appendChild(input);
    container.appendChild(span);

    return container;
}

const regionsOfGeorgia = [
    "Adjara",
    "Guria",
    "Imereti",
    "Kakheti",
    "Kvemo Kartli",
    "Mtskheta-Mtianeti",
    "Racha-Lechkhumi and Kvemo Svaneti",
    "Samegrelo-Zemo Svaneti",
    "Samtskhe-Javakheti",
    "Shida Kartli",
    "Tbilisi",
    "Imereti"
];

let columnDiv;

for (let i = 0; i < regionsOfGeorgia.length; i++) {
    if (i % 4 === 0) {
        columnDiv = document.createElement("div");
        columnDiv.className = "column";
        regionContainer.appendChild(columnDiv);
    }

    let regionContainerElement = createRegionContainer([regionsOfGeorgia[i]]);
    columnDiv.appendChild(regionContainerElement);
}





