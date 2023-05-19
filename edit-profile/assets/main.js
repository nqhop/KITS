async function getAll() {
    return fetch('https://fakestoreapi.com/users')
        .then(res => res.json())
}

async function fetchData() {
    const users = await getAll();
    console.log(users);


}
window.onload = function () {
    fetchData();
}

function incorrectPasswordOrUsername() {
    document.getElementById("incorrect-pass-username").classList.add("show-message");
}

async function login() {
    console.log("login");
    const userName = document.getElementById('login-name').value;
    const userPass = document.getElementById('login-pass').value;

    let data = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({

            // username: 'kminchelle',
            // password: '0lelplR',

            username: userName,
            password: userPass,
        })
    }).then(res => res.json());

    if(data) {
        console.log(data);
        window.localStorage.setItem('userToken', data.token);
        window.localStorage.setItem('userId', data.id);
        window.location = "/";
    } else {

        incorrectPasswordOrUsername();
    }
}