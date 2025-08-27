// formErrorHandling.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration");
    const errorSummary = document.getElementById("errorSammary");
    const successMessage = document.getElementById("successMessage");
    const userTableBody = document.querySelector("#userTable tbody");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent form submission
        clearMessages();

        let errors = [];

        // Get values
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const password = document.getElementById("password");

        // Validate Name
        if (name.value.trim().length < 3) {
            errors.push("Full Name must be at least 3 characters long.");
            showFieldError(name, "nameError", "Please enter your full name.");
        }

        // Validate Email
        if (!validateEmail(email.value.trim())) {
            errors.push("Please enter a valid email address.");
            showFieldError(email, "emailError", "Invalid email format.");
        }

        // Validate Password
        if (password.value.length < 8) {
            errors.push("Password must be at least 8 characters long.");
            showFieldError(password, "passwordError", "Password too short.");
        }

        if (errors.length > 0) {
            showErrorSummary(errors);
        } else {
            showSuccessMessage("Registration successful!");
            addUserToTable(name.value.trim(), email.value.trim());
            form.reset();
        }
    });

    function clearMessages() {
        errorSummary.hidden = true;
        successMessage.hidden = true;
        document.querySelectorAll(".error").forEach(el => el.textContent = "");
        document.querySelectorAll(".is-invalid").forEach(el => el.classList.remove("is-invalid"));
    }

    function showFieldError(input, errorId, message) {
        document.getElementById(errorId).textContent = message;
        input.classList.add("is-invalid");
    }

    function showErrorSummary(errors) {
        errorSummary.innerHTML = "<strong>Please fix the following errors:</strong><ul>" +
            errors.map(err => <li>${err}</li>).join("") + "</ul>";
        errorSummary.hidden = false;
    }

    function showSuccessMessage(message) {
        successMessage.textContent = message;
        successMessage.hidden = false;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function addUserToTable(fullName, email) {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${fullName}</td><td>${email}</td>`;
        userTableBody.appendChild(row);
    }
});
