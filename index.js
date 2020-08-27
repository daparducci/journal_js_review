// Global variables

const entryForm = document.getElementById("entryForm");
const entriesSection = document.getElementById("entries");
const entriesTextbox = document.getElementById("entry-textbox")
const entriesNav = document.querySelector('.entries-nav')
let buttonCount = 1;

//Handle Events

const onSubmit = (event) => {
    event.preventDefault();
    let entryDiv = document.createElement("div");
    entryDiv.className = "single-entry";
    entryDiv.innerText = entriesTextbox.value
    entryDiv.style.display = "none";
    entriesSection.appendChild(entryDiv)
    entriesTextbox.value = "";

    const navButton = document.createElement("button")
    navButton.className = "navButton"
    navButton.innerText = buttonCount;
    entriesNav.appendChild(navButton)

    navButton.addEventListener("click", function() {
        let allEntries = document.querySelectorAll(".single-entry")
        for (let i=0; i<allEntries.length; i++) {
            allEntries[i].style.display = "none";
        }
        entryDiv.style.display = "block";
    })

    buttonCount++;
}



entryForm.addEventListener('submit', onSubmit)