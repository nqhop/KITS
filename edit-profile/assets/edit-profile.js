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