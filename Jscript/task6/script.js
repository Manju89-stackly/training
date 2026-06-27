// Task 6 - Login Validation
// Ask the user to enter their username:
let username = prompt("Enter your username:");

// Check if the username is empty or if the user clicked cancel
if (username === null || username.trim() === "") {
    // 1. Show a warning using console.warn():
    console.warn("Warning: Username is empty.");
    
    // 2. Print the warning on the HTML page:
    document.writeln("Warning: Username is empty.");
} else {
    // 1. Print success message in the console:
    console.log("Login Successful: " + username);
    
    // 2. Print success message on the HTML page:
    document.writeln("Login Successful: " + username);
}