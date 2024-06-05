// Redundant
    // // Step 2 - Hover effect
    // const allGridItems = document.querySelectorAll('.gridItem');
    // allGridItems.forEach(gridItem => {
    //     // Mouse enter div
    //     gridItem.addEventListener("mouseover", function(event) {
    //         event.target.style.background = "yellow";
    //     })
    //     // Mouse leaves div
    //     gridItem.addEventListener("mouseout", function(event) {
    //         event.target.style.background = "";
    //     })
    // })


// Step 1 - Function to setup grid
function createGrid(size) {
    const container = document.querySelector(".container");
    container.innerHTML =  '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("gridItem");
            gridItem.addEventListener("mouseover", function(event) {
                event.target.style.background = "yellow";
            })
            gridItem.addEventListener("mouseout", function(event) {
                event.target.style.background = "";
            })           
            container.appendChild(gridItem);
        }
    }

    const gridItems = document.querySelectorAll('.gridItem');
    const gridItemSize = 640 / size; // Calculate the size for each gridItem

    gridItems.forEach(gridItem => {
        gridItem.style.width = `${gridItemSize}px`;
        gridItem.style.height = `${gridItemSize}px`;
    })

}

// Call function to create 16x16 grid
createGrid(16);


// Step 3 - Set up button on-click event
const container = document.querySelector('.container');
const header = document.querySelector('body');
const btn = document.createElement('button');
btn.textContent = "Click me!";
header.appendChild(btn);

btn.addEventListener("click", () => {
    let input = prompt("How many squares per side should be removed?");
    while (input > 100) {
        alert("Less than 100!")
        input = prompt("How many squares per side should be removed?");
    }
    input = Number.parseInt(input);
    createGrid(input);
})


