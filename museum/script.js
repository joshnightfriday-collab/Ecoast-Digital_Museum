// =========================================
// ECOAST DIGITAL MUSEUM
// JAVASCRIPT
// =========================================


// =========================================
// 1. GET ALL MUSEUM PAGES
// =========================================

const pages = {
    entrance: document.getElementById("entrance"),
    lobby: document.getElementById("lobby"),
    founders: document.getElementById("foundersRoom"),

    painting: document.getElementById("paintingRoom"),
    sculpture: document.getElementById("sculptureRoom"),
    photography: document.getElementById("photographyRoom"),
    music: document.getElementById("musicRoom"),
    drama: document.getElementById("dramaRoom")
};


// =========================================
// 2. FUNCTION TO CHANGE MUSEUM PAGES
// =========================================

function showPage(pageName) {

    // Hide every page
    Object.values(pages).forEach(function(page) {
        page.classList.remove("active");
    });

    // Show the selected page
    pages[pageName].classList.add("active");

    // Start the page from the top
    pages[pageName].scrollTop = 0;
}


// =========================================
// 3. ENTER THE MUSEUM
// =========================================

document.getElementById("enterButton").addEventListener("click", function() {

    showPage("lobby");

});


// =========================================
// 4. MEET THE FOUNDERS
// =========================================

document.getElementById("foundersEntranceButton").addEventListener("click", function() {

    showPage("founders");

});


// =========================================
// 5. GALLERY BUTTONS
// =========================================

document.querySelectorAll(".gallery-door").forEach(function(button) {

    button.addEventListener("click", function() {

        // Get the gallery name from data-gallery
        const galleryName = button.dataset.gallery;

        // Open the selected gallery
        showPage(galleryName);

    });

});


// =========================================
// 6. BACK BUTTONS
// =========================================

document.querySelectorAll("[data-back]").forEach(function(button) {

    button.addEventListener("click", function() {

        // Get the page we want to return to
        const previousPage = button.dataset.back;

        // Show that page
        showPage(previousPage);

    });

});


// =========================================
// 7. ARTWORK INFORMATION MODAL
// =========================================

// Get the modal
const modal = document.getElementById("artModal");


// Get all information areas inside the modal
const modalFields = {

    category: document.getElementById("modalCategory"),

    title: document.getElementById("modalTitle"),

    creator: document.getElementById("modalCreator"),

    description: document.getElementById("modalDescription"),

    elements: document.getElementById("modalElements"),

    meaning: document.getElementById("modalMeaning"),

    fact: document.getElementById("modalFact"),

    source: document.getElementById("modalSource"),

    note: document.getElementById("modalNote")

};


// =========================================
// 8. OPEN ARTWORK INFORMATION
// =========================================

document.querySelectorAll(".exhibit-card").forEach(function(card) {

    // Find the VIEW EXHIBIT button
    const viewButton = card.querySelector(".view-details");


    viewButton.addEventListener("click", function() {

        // Put the artwork information into the modal

        modalFields.category.textContent =
            card.dataset.category || "";


        modalFields.title.textContent =
            card.dataset.title || "";


        // Combine artist/creator and year
        modalFields.creator.textContent =
            [card.dataset.creator, card.dataset.year]
                .filter(Boolean)
                .join(" · ");


        modalFields.description.textContent =
            card.dataset.description || "";


        modalFields.elements.textContent =
            card.dataset.elements || "";


        modalFields.meaning.textContent =
            card.dataset.meaning || "";


        modalFields.fact.textContent =
            card.dataset.fact || "";


        // Show source
        if (card.dataset.source) {

            modalFields.source.textContent =
                "Source: " + card.dataset.source;

        } else {

            modalFields.source.textContent = "";

        }


        // Optional classification note
        modalFields.note.textContent =
            card.dataset.note || "";


        // Open the modal
        modal.classList.add("open");

        modal.setAttribute("aria-hidden", "false");

    });

});


// =========================================
// 9. CLOSE ARTWORK MODAL
// =========================================

function closeModal() {

    // Hide the modal
    modal.classList.remove("open");

    // Update accessibility information
    modal.setAttribute("aria-hidden", "true");

}


// =========================================
// 10. CLOSE BUTTON
// =========================================

document.getElementById("closeModal").addEventListener("click", function() {

    closeModal();

});


// =========================================
// 11. CLOSE MODAL BY CLICKING OUTSIDE
// =========================================

modal.addEventListener("click", function(event) {

    // If the user clicks the dark area outside
    // the information box, close the modal

    if (event.target === modal) {

        closeModal();

    }

});


// =========================================
// 12. CLOSE MODAL USING ESCAPE KEY
// =========================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeModal();

    }

});
