window.onload = () => {
    console.log(document.URL)
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