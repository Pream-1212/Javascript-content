//let userName = {
firstName: "Hana",
secondName: "Debay"
};

class Furniture{
    constructor(productName,price,stock){
        this.productName = productName;
        this.price = price;
        
    };
    stock(){
        console.log(stock)
    }
    }

    let chair = new Furniture("office Chair",250,10);
    let table = new Furniture("Dining Table",500,5);
    chair.stock(); // 10
    table.stock(); // 5
    chair.price = 300; // Update price
    console.log(chair.price); // 300
    