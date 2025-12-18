function login() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    const passwordPattern = /^[a-zA-Z0-9]{6,}$/;

    if (!gmailPattern.test(email)) {
        message.style.color = "red";
        message.textContent = "Email must be a valid gmail address (example@gmail.com)";
        return;
    }

    if (!passwordPattern.test(password)) {
        message.style.color = "red";
        message.textContent = "Password must be at least 6 letters or numbers";
        return;
    }

    message.style.color = "green";
    message.textContent = "Login successful";
}
