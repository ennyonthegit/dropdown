let dropDown = document.querySelector(".dropDown");
let allRegions = document.querySelector(".regions");
let firstColumn = document.querySelector(".column-1");
let secondColumn = document.querySelector(".column-2");
let thirdColumn = document.querySelector(".column-3");
let forthColumn = document.querySelector(".column-4");
let regBtn = document.querySelector(".regBtn");

for (let i = 0; i < 3; i++) {

}

regBtn.addEventListener("click", () => {
    let computedStyle = window.getComputedStyle(dropDown);
    if (computedStyle.display === "none") {
        dropDown.style.display = "block";
    } else {
        dropDown.style.display = "none";
    }
});



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
    "Tbilisi"
];


let numberOfRegionContainer = 4;
function createRegion() {
    for (let i = 0; i < numberOfRegionContainer; i++) {
        // column 1 
        let regContainer1 = document.createElement("div");
        regContainer1.classList.add("regContainer");
        firstColumn.appendChild(regContainer1);

        let regionName = document.createElement("span");
        regionName.classList.add("regName");
        regionName.textContent = regionsOfGeorgia[i];

        let regCheckbox = document.createElement("input");
        regCheckbox.classList.add("regionCheckBox");
        regCheckbox.type = "checkbox";

        regContainer1.appendChild(regionName);
        regContainer1.appendChild(regCheckbox);

        // column 2 
        let regContainer2 = document.createElement("div");
        regContainer2.classList.add("regContainer");
        secondColumn.appendChild(regContainer2);

        let regionName2 = document.createElement("span");
        regionName2.classList.add("regName");
        regionName2.textContent = regionsOfGeorgia[i];

        let regCheckbox2 = document.createElement("input");
        regCheckbox2.classList.add("regionCheckBox");
        regCheckbox2.type = "checkbox";

        regContainer2.appendChild(regionName2);
        regContainer2.appendChild(regCheckbox2);


        // column 3 
        let regContainer3 = document.createElement("div");
        regContainer3.classList.add("regContainer");
        thirdColumn.appendChild(regContainer3);

        let regionName3 = document.createElement("span");
        regionName3.classList.add("regName");
        regionName3.textContent = regionsOfGeorgia[i];

        let regCheckbox3 = document.createElement("input");
        regCheckbox3.classList.add("regionCheckBox");
        regCheckbox3.type = "checkbox";

        regContainer3.appendChild(regionName3);
        regContainer3.appendChild(regCheckbox3);

        // column 4 
        let regContainer4 = document.createElement("div");
        regContainer4.classList.add("regContainer");
        forthColumn.appendChild(regContainer4);

        let regionName4 = document.createElement("span");
        regionName4.classList.add("regName");
        regionName4.textContent = regionsOfGeorgia[i];

        let regCheckbox4 = document.createElement("input");
        regCheckbox4.classList.add("regionCheckBox");
        regCheckbox4.type = "checkbox";

        regContainer4.appendChild(regionName4);
        regContainer4.appendChild(regCheckbox4);


    }
}

createRegion();







