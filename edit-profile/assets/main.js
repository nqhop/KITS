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

    let accessToken = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({

            // username: 'kminchelle',
            // password: '0lelplR',

            username: userName,
            password: userPass,
        })
    }).then(res => res.json()).then(data => data.token);


    if(accessToken) {
        console.log(accessToken);
        window.localStorage.setItem('userToken', accessToken);
        window.location = "/?id=1";
    } else {

        incorrectPasswordOrUsername();
    }
}