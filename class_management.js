const fs = require("fs");
const prompt = require("prompt-sync")();

let group = []
let id_student_counter = 1


function load_json_data(){
try {
    const data = fs.readFileSync(".\\output.json")  
    group = JSON.parse(data)
} catch (error) {
    console.log("fichier n'existe pas ")
}

}

function add_student(){
    let new_name = prompt("entrer votre nom : ")
    const add_student = {
        student_id : id_student_counter++,
        student_name : new_name,
        presence : false,
        skills : {
        }
    }
    group.push(add_student)
}

function check_presence(){
    let search_student = Number(prompt("entrer l'id de l'eleve : "))
    if (group.length === 0 ){
        console.log("il y a aucun eleve ")
        return;
    }
    for(let i = 0 ; i < group.length ; i++){
        if (group[i].student_id === search_student){
            let present = prompt("l'eleve present ou non : ")
            if (present === "oui"){
                group[i].presence = true
            }else if (present === "non"){
                group[i].presence = false
            }else {
                console.log("ce choix n'exite pas.")
            }
        }
    }
}

function add_skill(){
    let search_student = Number(prompt("entrer l'id de l'eleve : "))
    if (group.length === 0 ){
        console.log("il y a aucun eleve ")
        return;
    }
    let existe = group.find(x => x.student_id === search_student)
    
    if (!existe){
        console.log("l'eleve n'existe pas")
        return;
    }

    let skills_number = Number(prompt("entrer le numero de competence :"))
    
    if (skills_number <= 0 ){
        console.log("numero pas valide.")
        return;
    }

    for(let i = 0;i <skills_number; i++ ){
        let new_skill = prompt("entrer la nouvelle competence :")
        let skill_level = prompt("entrer le niveau de competence [Critique, Moyen, Bon, Excellent]")
        if ([ "Critique", "Moyen", "Bon", "Excellent"].includes(skill_level)){
            existe.skills[new_skill] = skill_level
        }else {
            console.log("le choix n'existe pas.")
        }
    }
}

function show_student(){
    let search_student = Number(prompt("entrer l'id de l'eleve : "))
    if (group.length === 0 ){
        console.log("il y a aucun eleve ")
        return;
    }
    
    let existe = group.find(x => x.student_id === search_student)

    if (!existe){
        console.log("l'eleve n'existe pas")
    }

    console.table(existe)
}

function show_validate_student(){
    if (group.length === 0 ){
        console.log("il y a aucun eleve ")
        return;
    }
    let good_student = group.filter(x =>{
        return Object.values(x.skills).every(s => s === "Bon" || s === "Excellent" )
    })

    console.table(good_student)
    
}

function save_quit(){
    const convert_json = JSON.stringify(group, null, 2);

    fs.writeFile('output.json', convert_json, (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('JSON data saved to output.json');
      }
    });
}


load_json_data();
for(;;){
console.log(`=== Menu === 
                1. Ajouter un etudiant 
                2. si present ou non 
                3. ajouter competence
                4. afficher liste des eleves 
                5. afficher les eleves reussis 
                0. sauvegarder et Quitter `)
    let number = parseInt(prompt("enter a number : "))
    switch(number){
        case 0 : save_quit();
            process.exit();
        case 1 : add_student() 
            break;
        case 2 : check_presence()
            break;
        case 3 : add_skill()
            break;
        case 4 : show_student()
            break;
        case 5 : show_validate_student()
            break;           
    }
}
