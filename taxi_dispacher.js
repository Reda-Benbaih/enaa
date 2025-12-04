const prompt = require("prompt-sync")();

let waiting_request = []
let request_counter = 0
let Taxis = [ 
{ id: 1, position: 5, available: true, timeRemaining: 0, totalRides: 0 }, 
{ id: 2, position: 12, available: true, timeRemaining: 0, totalRides: 0 }, 
{ id: 3, position: 20, available: true, timeRemaining: 0, totalRides: 0 } 
] 


function add_request(){
    request_counter++;
    let new_request = {
        request_id : request_counter,
        position : Number(prompt("entrer la position : ")),
        finish_position : Number(prompt("entrer la position d'arrive :")),
        duration : Number(prompt("entrer la duration : ")),
    }
    waiting_request.push(new_request);
}

function find_closest(){
    let arr = []
    let index = [];
    for (let i =0 ;i < Taxis.length ; i++){
        if (Taxis[i].available === true ){
            let distance = waiting_request[0].position - Taxis[i].position
            if (distance < 0){
                distance *= -1
            }
            arr.push(distance)
            index.push(i)
        }
    }
    let minindex = arr.indexOf(Math.min(...arr))
    let closest_taxi = Taxis[index[minindex]]
   
    return closest_taxi
}



function assign_taxi(){

    let closest_taxi = find_closest()
if (!closest_taxi) return null; // ai
    closest_taxi.totalRides++;
    closest_taxi.timeRemaining = waiting_request[0].duration
    closest_taxi.available = false
    closest_taxi.position = waiting_request[0].finish_position
    return closest_taxi
}

function wait (time_sec){
    return new Promise((res)=>{
        setTimeout(res, time_sec * 1000 )
    })
}


async function empty_taxi(){
    let closest_taxi = assign_taxi()
if (!closest_taxi) return; // ai
    await wait(waiting_request[0].duration)
    closest_taxi.timeRemaining = 0
    closest_taxi.available = true 
    closest_taxi.position = waiting_request[0].finish_position
    waiting_request.shift()
    
}

async function main() {
   let number = prompt("entrer le nombre de demande : ")
    for(let i = 1 ;i <= number;i++){
        add_request()
    }
    while(waiting_request.length > 0){
        
        if (waiting_request.length === 0){
            break;
        }       
        await empty_taxi()
    } 
    console.table(Taxis)
}
main()


