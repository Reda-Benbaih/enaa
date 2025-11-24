const prompt = require("prompt-sync")();

let todoList = [];
let ID = 0 ;
let Description;
let Title;
let isDone;



function showList(){
    console.log(todoList);
}

function addTask(){
    ID++;
    Description = prompt("enter description ");
    Title = prompt("enter title");
    isDone = "not done";
    const todoObject = {
        id : ID,
        description : Description,
        titre : Title,
        status: isDone
    }
    todoList.push(todoObject);
}

function searchTask(){
    let search = prompt("enter title u search");
    const searchResult = todoList.find(task => task.titre === search);
    console.log (searchResult);
}

function changeTask(){
    let search_id = parseInt(prompt("enter the id of the descreption u want to modify "))
    const searchResult = todoList.find (di => di.id === search_id);
    if (!searchResult){
        console.log("the id does not exist ")
    }else {
        let new_des = prompt("enter the new description ")
        searchResult.description = new_des
        console.log("done")
    }
}

function deleteTask(){
    let search_id = parseInt(prompt("enter the id of the descreption u want to modify "))
    const searchResult = todoList.find(di => di.id === search_id);
    if (!searchResult){
        console.log("the id does not exist ")
    }else{
        const index = todoList.findIndex(task => task.id === search_id);
        todoList.splice(index , 1)
        console.log("deleted")
    }
}

function changeStatus(){
    let search_id = parseInt(prompt("enter the id of the descreption u want to modify "))
    const searchResult = todoList.find(di => di.id === search_id);
    if (!searchResult){
        console.log("the id does not exist ")
    }else {
        if (searchResult.status === "not done"){
        searchResult.status = "done"
        }else if (searchResult.status === "done"){
        searchResult.status = "not done"
    }
    }
}

function showDoneTask() {
    const doneTasks = todoList.filter(task => task.status === "done");

    if (doneTasks.length === 0) {
        console.log("No tasks are done yet.");
    } else {
        console.log("Done tasks:", doneTasks);
    }
}

function showNotDoneTask(){
    const notdoneTasks = todoList.filter(task => task.status === "not done");

    if (notdoneTasks.length === 0) {
        console.log("No tasks are done yet.");
    } else {
        console.log("Done tasks:", notdoneTasks);
    }
}

for(;;){
    console.log(`=== To-Do List === 
                1. Afficher les tâches 
                2. Ajouter une tâche 
                3. Rechercher une tâche 
                4. Modifier une tâche 
                5. Supprimer une tâche 
                6. Marquer une tâche comme terminée 
                7. Afficher tâches terminées 
                8. afficher taches non termine
                0. Quitter `)
    let number = parseInt(prompt("enter a number : "))
    switch(number){
        case 0 :break;
        case 1 : showList() 
            break;
        case 2 : addTask()
            break;
        case 3 : searchTask()
            break;
        case 4 : changeTask()
            break;
        case 5 : deleteTask()
            break;
        case 6 : changeStatus()
            break;
        case 7 : showDoneTask()
            break;
        case 8 : showNotDoneTask()
            break;   
    }
     
}