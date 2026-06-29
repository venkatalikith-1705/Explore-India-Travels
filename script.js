// Wait until the HTML document is fully loaded in the browser
document.addEventListener("DOMContentLoaded", () => {
    
    // Find the contact form on the page
    const contactForm = document.querySelector(".contact-form");

    // If the form exists on the current page, listen for when a user submits it
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            // Prevent the default behavior (which reloads the entire page)
            event.preventDefault();

            // Get the user's name from the input field
            const nameInput = document.getElementById("name").value;
            const packageSelect = document.getElementById("package").options[document.getElementById("package").selectedIndex].text;

            // Display a personalized confirmation alert
            alert(`Thank you, ${nameInput}! Your inquiry for the "${packageSelect}" has been received. Our travel expert will contact you shortly via email.`);

            // Reset all the form fields back to blank
            contactForm.reset();
        });
    }
});