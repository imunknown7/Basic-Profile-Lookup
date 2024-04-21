const usrname = document.getElementById('usrname');
const display = document.getElementById('display');

let data = [
    {
        "name": "John",
        "phnumber": "1234567890",
        "email": "John@email.com",
        "address": "New York"
    },
    {
        "name": "Mike",
        "phnumber": "1532458480",
        "email": "mike@email.com",
        "address": "Washington"
    },
    {
        "name": "Ryan",
        "phnumber": "9375820573",
        "email": "ryan@email.com",
        "address": "London"
    },
    {
        "name": "Jack",
        "phnumber": "7294627684",
        "email": "jack@email.com",
        "address": "India"
    },
    {
        "name": "James",
        "phnumber": "8375927098",
        "email": "james@email.com",
        "address": "Dubai"
    }
];


function lookUp() {
    let found = false;
    for (let i = 0; i < data.length; i++) {
        if (usrname.value == data[i].name) {
            display.innerHTML = `Name: ${data[i].name}<br>Number: ${data[i].phnumber}<br>Email: ${data[i].email}<br>Address: ${data[i].address}`;
            found = true;
            break;
        }
    }
    if (!found) {
        display.innerHTML = "No matching record found.";
    }
}
