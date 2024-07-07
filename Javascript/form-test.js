function validateForm() {
    var username = document.forms["myForm"]["username"].value;
    var password = document.forms["myForm"]["password"].value;

    if (username === 'mustakim' && password === 'huda') {
        return true; // Allow form submission
    } else {
        document.getElementById('error').innerText = 'Invalid username or password';
        return false; // Prevent form submission
    }
}