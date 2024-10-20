dropDown = document.querySelector(".dropDown");
let regionBtn = document.querySelector(".regBtn");
regionBtn.addEventListener("click", () => {
    if (dropDown.style.display === "block") {
        dropDown.style.display = "none";
    } else {
        dropDown.style.display = "block";
    }
});
