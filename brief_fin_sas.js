const prompt = require("prompt-sync")();

let books = [];
let subscription = [];
let loan = [];
let id_book_counter = 0
let id_subscriber_counter = 0

function add_book(){
    let book_attribut = {
        id_book :"",
        title : "",
        author : "",
        publish_year : "", 
        disponibility  : "",
    }

    id_book_counter++;

    let n_title = prompt("entrer le titre de livre ");
    let n_author = prompt("entrer l'auteur de livre ");
    let n_publish_year = Number(prompt("entrer l'annee de publication de livre "));
    let n_disponibility = prompt("entrer si le livre est disponible (oui/non) ");

    book_attribut.id_book = id_book_counter;
    book_attribut.title = n_title;
    book_attribut.author = n_author;
    book_attribut.publish_year = n_publish_year;
    book_attribut.disponibility = n_disponibility;

    books.push(book_attribut)
}

function show_books(){
    console.table(books)
}

function sort_title_book(){
    let sort_choice = prompt("entrer le choix de triage (ascendant/descendant): ") 
    if (sort_choice == "ascendant"){
        books.sort((a,b)=>a.title.localeCompare(b.title))
    }else if (sort_choice == "descendant"){
        books.sort((a,b)=>a.title.localeCompare(b.title)).reverse()
    }else {
        console.log("ce choix n'existe pas ")
    }
}

function sort_year_book(){
    books.sort((a,b)=> a.publish_year - b.publish_year )
}

function show_disponible_books(){
    const disponible_book = books.filter(a => a.disponibility == "oui")
    console.table(disponible_book)
}

function search_id_book(){
    let search_id = Number(prompt("entrer id rechercher : "));
    let search = books.find(a => a.id_book == search_id);
    if (!search){
        console.log("ce id n'existe pas.");
    }else {
        console.log(search);
    }
}

function add_subscribers(){
    id_subscriber_counter++
    let new_subscriber = {

        id_subscriber : id_subscriber_counter,
        first_name : prompt("entrer le prenom : "),
        last_name : prompt("entrer le nom : "),
        email : prompt("entrer l'email : "),

    }

    subscription.push(new_subscriber);
}

function show_subscribers(){
    console.table(subscription);
}

function save_loan(){
    let search_borrower = Number(prompt("entrer l'id d'abonne : "))
    let check_borrower = subscription.find(a => a.id_subscriber == search_borrower)
    if(!check_borrower){
        console.log("ce personne n'existe pas");
        return;
    } 
    let search_borrowed_book = Number(prompt("entrer l'id de livre : "))
    let check_borrowed_book = books.find(a => a.id_book == search_borrowed_book)
    if (!check_borrowed_book){
        console.log("le livre n'existe pas ")
        return;
    }
    if (check_borrowed_book.disponibility === "non") {
    console.log("Ce livre est déjà emprunté.");
    return;
    }
    check_borrowed_book.disponibility = "non"
    let new_loan = {
        subscriber_id:check_borrower.id_subscriber,
        book_id:check_borrowed_book.id_book,
        loan_date: new Date().toDateString()
    }
    loan.push(new_loan)
}

function return_loan(){
    let search_borrowed_book = Number(prompt ("entrer l'id de livre : "))
    let check_borrowed_book = books.find(a => a.id_book == search_borrowed_book)
    if (!check_borrowed_book){
        console.log("le livre n'existe pas ")
        return;
    }
    let index_loan = loan.findIndex(l => l.book_id === search_borrowed_book);
    if (index_loan === -1){
        console.log("Ce livre n'est pas emprunté.");
        return;
    }
    check_borrowed_book.disponibility = "oui";
    loan.splice(index_loan, 1);
}

function show_borrowed_book(){
    console.table(loan)
}

for(;;){
    console.log(`**************MENU**************
                 *1 pour gestion de livre :     *
                 *2 pour gestion des abonne :   *
                 *3 pour gestion des emprunt :  *
                 *0 pour quitter :              *
                 ********************************`)
    let choice = Number(prompt("entrer un numero : "))
    switch(choice){
        case 0 : process.exit();break;
        case 1 :
            for(;;){
                console.log(`*****************MENU******************
                             * 1 pour ajouter des livres :         *
                             * 2 pour afficher les livres :        *
                             * 3 pour trier les livres par titre : *
                             * 4 pour trier les livres par annee : *
                             * 5 pour afficher les livre disponible*
                             * 6 pour chercher un livre par id :   *
                             * 7 pour quiter :                     *
                             ***************************************`)
                let choice1 = Number(prompt("entrer un numero : "))
                switch (choice1){
                    case 1 :add_book() ;break;
                    case 2 :show_books();break;
                    case 3 :sort_title_book();break;
                    case 4 :sort_year_book();break;
                    case 5 :show_disponible_books();break;
                    case 6 :search_id_book();break;
                    case 7 :break;
                    default:console.log("suit le menu !!!");continue;
                }
                if(choice1 === 7) break;
            }
        break;
        case 2 :
            for(;;){
                console.log(`*****************MENU******************
                             * 1 pour ajouter les abonnes :        *
                             * 2 pour afficher les abonnes :       *
                             * 3 pour quitter :                    *
                             ***************************************`)
                let choice1 = Number(prompt("entrer un numero : "))
                switch (choice1){
                    case 1 :add_subscribers();break;
                    case 2 :show_subscribers();break;
                    case 3 :break;
                    default:console.log("suit le menu !!!");continue;
                }
                if(choice1 === 3) break;
            }
        break;   
        case 3 :
            for(;;){
                console.log(`*****************MENU******************
                             * 1 pour enregistrer un emprunt :     *
                             * 2 pour enregistrer retour :         *
                             * 3 pour afficher les livres emprunte *
                             * 4 pour quitter :                    *
                             ***************************************`)
                let choice1 = Number(prompt("entrer un numero : "))
                switch (choice1){
                    case 1 :save_loan();break;
                    case 2 :return_loan();break;
                    case 3 :show_borrowed_book();break;
                    case 4 :break;
                    default:console.log("suit le menu !!!");continue;
                }
                if(choice1 === 4) break;

            }
        break;                  
    }
}
