const prompt = require("prompt-sync")();

let cart = [];
let products = [];
let product_counter = 1; 

// admin command 

function add_products(){
    const add_product = {
        product_id :product_counter,
        Name:prompt("ajouter le nom de produit : "),
        price:Number(prompt("ajouter le prix de produit :")),
        stock:Number(prompt("entrer la quantite de ce produit : "))
    }
    products.push(add_product)
    product_counter++;
}

// user command

function show_products(){
    console.table(products)
}

function add_in_cart(){
    let wanted_id = Number(prompt("entrer l id de produit : "))
    let search_product_id = products.find(a => a.product_id === wanted_id)
    if(!search_product_id){
        console.log("ce produit n'existe pas!!");
        return;
    }
    let quantity = Number(prompt("entrer la quantite que tu veux : "))
    if(quantity > search_product_id.stock ){
        console.log("il y a moins en stocke")
        return;
    }
    const add_cart = {
        product_ID : search_product_id.product_id,
        Name : search_product_id.Name,
        price: search_product_id.price,
        Quantity : quantity
    }
    cart.push(add_cart)
}

function show_cart(){
    console.table(cart);
}

function remove_product_cart(){
    let wanted_remove_id = Number(prompt("entrer l id de produit : "))
    let search_removed_id = cart.find(a => a.product_ID === wanted_remove_id)
    if(!search_removed_id){
        console.log("ce id n existe pas ")
        return;
    }
    let removed_index = cart.findIndex(a => a.product_ID === wanted_remove_id)
    cart.splice(removed_index,1);
}

function accept_purchase(){
    let total = 0
    for(let i = 0 ; i < cart.length;i++){
        total += cart[i].price * cart[i].Quantity
        for(let j = 0; j < products.length;j++){
            if (cart[i].product_ID === products[j].product_id){
                products[j].stock -= cart[i].Quantity
            }
        }
    }
    total *= 1.2
    console.log("le total avec tva : ",total)
    cart = []
}

for(;;){
    let user = prompt("entrer admin or user ou 0 pour quitter: ")
    console.log("")
    if (user === "admin"){
        for(;;){
            console.log(`
                ***************MENU**************
                * 1 pour ajouter des produit :  *
                * 2 pour quiter               : *
                *********************************`)
            let choice = prompt("entrer un nombre : ")
            switch(choice){
                case "1" :add_products();break;
                case "2" : break;
                default : console.log("suit le menu !!")
            }
            if (choice == "2"){
                break;
            }
        }      
    }else if (user === "user"){
        for(;;){
            console.log(`
                ********************MENU*******************
                * 1 pour ajouter des produit au panier    *
                * 2 pour afficher le pannier              *
                * 3 pour supprimmer un produit            *
                * 4 pour la caisse                        *
                * 6 pour afficher les produits            *
                * 5 pour quitter                          *
                *******************************************`)
            let choice = prompt("entrer un nombre : ")
            switch(choice){
                case "1" : add_in_cart();break;
                case "2" : show_cart();break;
                case "3" : remove_product_cart();break;
                case "4" : accept_purchase();break;
                case "5" : break;
                case "6" : show_products();break;
                default  : console.log("suit le menu !!")
            }
        if (choice === "5"){
            break;
        }        
        }
    }else if (user === "0"){
        break;
    }
}