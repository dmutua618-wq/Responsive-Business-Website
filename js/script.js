// Select the contact form
const contactForm = document.getElementById("contactForm");

// Select the feedback message element
const formMessage = document.getElementById("formMessage");

// Check whether the contact form exists
if (contactForm && formMessage) {

    // Listen for form submission
    contactForm.addEventListener("submit", function(event) {

        // Prevent the browser from submitting the form normally
        event.preventDefault();

        // Retrieve form input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value.trim();

        // Clear previous feedback
        formMessage.textContent = "";
        formMessage.className = "";

        // Validate required fields
        if (!name || !email || !phone || !subject || !message) {

            showMessage("Please fill in all required fields.", "error");
            return;
        }

        // Validate name length
        if (name.length < 2) {

            showMessage("Your name must contain at least 2 characters.", "error");
            return;
        }

        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            showMessage("Please enter a valid email address.", "error");
            return;
        }

        // Validate phone number
        const phonePattern = /^[0-9+\-\s]{10,15}$/;

        if (!phonePattern.test(phone)) {

            showMessage("Please enter a valid phone number.", "error");
            return;
        }

        // Validate message length
        if (message.length < 10) {

            showMessage("Your message must contain at least 10 characters.", "error");
            return;
        }

        // Display successful validation feedback
        showMessage(
            "Thank you, " + name + "! Your form has been validated successfully. This demonstration does not send an actual email.",
            "success"
        );

        // Reset the form fields
        contactForm.reset();

        // Log submitted information for demonstration purposes
        console.log("Validated Contact Form Submission:");
        console.log({
            name: name,
            email: email,
            phone: phone,
            subject: subject,
            message: message
        });

    });

}

// Function for displaying feedback messages
function showMessage(message, type) {

    formMessage.textContent = message;
    formMessage.className = type;

}
