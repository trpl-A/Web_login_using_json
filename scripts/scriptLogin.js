function checkServer() {
    let url = window.location.href

    if (url.includes("file://")) {
        window.confirm("USE A LOCAL SERVER")
        window.confirm("JSON CAN ONLY BE USED AND LOADED IF YOU'RE REQUESTING FROM A SERVER")
        window.location = "info.txt"
    }
}


let attempts = 3
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    fetch('./scripts/usersAll.json')
        .then(response => response.json())
        .then(data => {
            const user = data.users.find(u => u.username === username && u.password === password);

            if (user) {
                alert('Login successful!');
                window.location = "dashboard.html"
            }

            else {
                attempts--;
                alert(`Invalid username or password. ${attempts} attempts remaining.`);
                if (attempts === 1) {
                    window.alert("Enter: James (username), jsx1 (password)")
                }
                if (attempts === 0) {
                    disableForm();
                }
            }
        })

        .catch(error => console.error('Error:', error));
}


function disableForm() {
    document.getElementById('username').disabled = true;
    document.getElementById('password').disabled = true;
    document.getElementById('btn-submit').disabled = true;

    // error message
    let msg = document.getElementById("info")
    msg.style.cssText = "color:red;"
    msg.innerHTML = "Form is disabled"
}