const dropdownMenu = document.querySelector(".dropdownMenu");
const itemContainer = document.getElementById("itemContainer");
const arrow = document.getElementById("arrowIcon");

// Toggle dropdown menu and change arrow icon direction
dropdownMenu.addEventListener("click", () => {
    itemContainer.style.visibility = itemContainer.style.visibility === "visible" ? "hidden" : "visible";
    if (itemContainer.style.visibility == "visible") {
        arrow.innerHTML = "&#x0245;"; 
    } else {
        arrow.innerHTML = "&#x56;";
    }
})

// Toggle check mark icon when selecting an item
