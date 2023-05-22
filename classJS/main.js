class Product {
    constructor(name, price) {
        this.name = name || "unknown";
        this.price = price || "unknown";
    }

    isInStock() {
        return Math.round(Math.random()) ? "Con Hang" : "Het hang";
    }

    getThongTin() {
        return "Ten " +this.name + ", price " + this.price;
    }
}

class Mobile extends Product {
    constructor(name, price, brand){
        super(name, price);
        this.brand = brand;
    }

    getBrand() {
        return this.brand;
    }

    getThongTin() {
        return super.getThongTin() + ", brand: " + this.brand;
    }

}

let product1 = new Product("", 12000000);
console.log(product1.getThongTin());
console.log(product1.isInStock());

let mobile1 = new Mobile("Iphone 14", 26440000, "apple");
console.log(mobile1.getThongTin());
console.log(mobile1.getBrand());
console.log(mobile1.isInStock());