const dropdownMenu = document.querySelector(".dropdownMenu");
const itemContainer = document.getElementById("itemContainer");
const icon = document.getElementById("icon");

dropdownMenu.addEventListener("click", () => {
    itemContainer.style.visibility = "visible";
    icon.innerHTML = "&#x0245;";  
})
