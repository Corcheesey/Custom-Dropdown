const dropdownMenu = document.getElementById("dropdownMenu");
const itemContainer = document.getElementById("itemContainer");
const arrow = document.getElementById("arrowIcon");
const item = document.getElementsByClassName("item");

// Toggle dropdown menu and change arrow icon direction
dropdownMenu.addEventListener("click", () => {
    itemContainer.style.visibility = itemContainer.style.visibility === "visible" ? "hidden" : "visible";
    if (itemContainer.style.visibility == "visible") {
        arrow.innerHTML = "&#x0245;"; 
    } else {
        arrow.innerHTML = "&#x56;";
    }
});

// Select item from menu, replace placeholder text with selected item, highlight selected item, and hide menu.
for (const element of item) {
    element.addEventListener("click", () => {
        for (const el of item) {
            el.classList.remove("selected");
        }
        element.classList.add("selected");
        dropdownMenu.innerHTML = element.innerHTML;
        itemContainer.style.visibility = "hidden";
        arrow.innerHTML = "&#x56;";
    })
}