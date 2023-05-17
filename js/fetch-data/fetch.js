// API https://fakestoreapi.com/products 

async function getAll() {
    // return fetch('https://fakestoreapi.com/products')
    return fetch('https://fakestoreapi.com/products?limit=5')
        .then(res => res.json());
}

async function fetchData() {
    const products = await getAll();
    console.log(products);

    // const productsDiv = document.getElementById("products")
    // for (let item of products) {
    //     productsDiv.innerHTML += `
    //         <div class="im">
    //             <p>${item.id}</p>
    //             <h2>${item.title}</h2>
    //         </div>
    //         ;`
    // }
    
    const contentListItem = document.getElementById("content-list-item");
    for (let item of products) {
        contentListItem.innerHTML += `
            <div class="content-item" onclick="goToDetail(${item.id})>
                <div  class="item-img">
                    <img src="${item.image}" alt="">
                </div>
                <p class="item-name">${item.title}</p>
                <p class="item-price">${item.price}</p>
            </div>
        `
    }

}

function goToDetail(id) {
    window.location.assign(`datails.html?id=${id}`);
}

window.onload = () => fetchData();