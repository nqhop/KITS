async function fetchSingleData(userId) {
    return userData = fetch('https://dummyjson.com/users/' + userId)
        .then(res=>res.json());
}

async function fetchData() {
    const userId = window.localStorage.getItem('userId');
    const userData = await fetchSingleData(userId);
    console.log(userData);
}

window.onload = () => {            
    fetchData();
}

function cancelEdit() {
    let elements = document.getElementsByTagName("input");
    for(let i = 0; i < elements.length; i++) {
        if(elements[i].type == "text") {
            elements[i].value = "";
        }
    }
}


const sidebar =  document.getElementsByClassName("sidebar")[0];
const content = document.getElementsByClassName("content")[0];
const aside = document.getElementsByClassName("aside")[0];
const listSidebarItem = document.getElementsByClassName("sidebar-item");
const listOpacity1 = document.getElementsByClassName("opacity1");
const saveBtn = document.getElementById("save-btn");

function sidebarSetings() {
    console.log("Se");

    sidebar.classList.add('hideSideBar');
    content.classList.add('positionOfContent');
}

aside.addEventListener("click", function(event) {
    content.classList.remove('positionOfContent');
    sidebar.classList.remove('hideSideBar');
});

for (let i = 0; i < listSidebarItem.length; i++) {
    listSidebarItem[i].addEventListener('click', function(event) {

        for(let x = 0; x < listOpacity1.length; x++){
            listOpacity1[x].classList.remove('opacity1');
        }
        listSidebarItem[i].classList.add('opacity1');
    });
}

saveBtn.addEventListener('click', function(event) {
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const address = document.getElementById("address");
    const contactNumber = document.getElementById("contact-number");

    if (firstName.value == '') {
        firstName.style.border = "1.5px solid red";
    }else {
        firstName.style.border = "1.5px solid transparent";
    }

    if (lastName.value == '') {
        lastName.style.border = "1.5px solid red";
    }else {
        lastName.style.border = "1.5px solid transparent";
    }

    if (email.value == '') {
        email.style.border = "1.5px solid red";
    }else {
        email.style.border = "1.5px solid transparent";
    }

    if (address.value == '') {
        address.style.border = "1.5px solid red";
    }else {
        address.style.border = "1.5px solid transparent";
    }

    if (contactNumber.value == '') {
        contactNumber.style.border = "1.5px solid red";
    }else {
        contactNumber.style.border = "1.5px solid transparent";
    }
});