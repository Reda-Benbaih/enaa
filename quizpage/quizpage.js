const quiz_data = {
  math: [
    {
      question: "What is 7 × 8?",
      answers: ["54", "56", "64", "48"],
      correct_answer: 1
    },
    {
      question: "What is the square root of 64?",
      answers: ["6", "7", "8", "9"],
      correct_answer: 2
    },
    {
      question: "What is 15% of 200?",
      answers: ["25", "30", "20", "35"],
      correct_answer: 1
    },
    {
      question: "What is the value of π (pi) rounded to two decimals?",
      answers: ["3.12", "3.14", "3.16", "3.10"],
      correct_answer: 1
    },
    {
      question: "Solve: 12 + 4 × 3",
      answers: ["48", "24", "20", "36"],
      correct_answer: 1
    },
    {
      question: "What is the next number in the sequence: 2, 4, 8, 16, ?",
      answers: ["18", "20", "24", "32"],
      correct_answer: 3
    },
    {
      question: "What is 9²?",
      answers: ["72", "81", "99", "64"],
      correct_answer: 1
    },
    {
      question: "What is 100 divided by 4?",
      answers: ["20", "30", "25", "40"],
      correct_answer: 2
    }
  ],

  geography: [
    {
      question: "What is the capital of France?",
      answers: ["Rome", "Paris", "Madrid", "Berlin"],
      correct_answer: 1
    },
    {
      question: "Which continent is Egypt in?",
      answers: ["Asia", "Europe", "Africa", "South America"],
      correct_answer: 2
    },
    {
      question: "What is the largest ocean on Earth?",
      answers: ["Atlantic", "Indian", "Arctic", "Pacific"],
      correct_answer: 3
    },
    {
      question: "Which country has the largest population?",
      answers: ["USA", "India", "China", "Russia"],
      correct_answer: 2
    },
    {
      question: "What is the longest river in the world?",
      answers: ["Amazon", "Nile", "Yangtze", "Mississippi"],
      correct_answer: 1
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: ["Mars", "Venus", "Jupiter", "Saturn"],
      correct_answer: 0
    },
    {
      question: "What country is the Great Wall located in?",
      answers: ["Japan", "China", "Korea", "India"],
      correct_answer: 1
    },
    {
      question: "How many continents are there?",
      answers: ["5", "6", "7", "8"],
      correct_answer: 2
    }
  ],

  science: [
    {
      question: "What planet is closest to the sun?",
      answers: ["Venus", "Earth", "Mercury", "Mars"],
      correct_answer: 2
    },
    {
      question: "What gas do humans need to breathe?",
      answers: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
      correct_answer: 1
    },
    {
      question: "What is H₂O commonly known as?",
      answers: ["Salt", "Hydrogen", "Water", "Oxygen"],
      correct_answer: 2
    },
    {
      question: "What force pulls objects toward Earth?",
      answers: ["Magnetism", "Gravity", "Friction", "Energy"],
      correct_answer: 1
    },
    {
      question: "What part of the plant makes food?",
      answers: ["Root", "Stem", "Leaf", "Flower"],
      correct_answer: 2
    },
    {
      question: "What is the boiling point of water (°C)?",
      answers: ["90", "95", "100", "110"],
      correct_answer: 2
    },
    {
      question: "What organ pumps blood in the body?",
      answers: ["Lungs", "Brain", "Heart", "Liver"],
      correct_answer: 2
    },
    {
      question: "What do we call animals that eat only plants?",
      answers: ["Carnivores", "Herbivores", "Omnivores", "Predators"],
      correct_answer: 1
    }
  ],

  history: [
    {
      question: "Who was the first president of the United States?",
      answers: ["Abraham Lincoln", "George Washington", "John Adams", "Thomas Jefferson"],
      correct_answer: 1
    },
    {
      question: "In which year did World War II end?",
      answers: ["1943", "1944", "1945", "1946"],
      correct_answer: 2
    },
    {
      question: "What ancient civilization built the pyramids?",
      answers: ["Romans", "Greeks", "Egyptians", "Mayans"],
      correct_answer: 2
    },
    {
      question: "Who discovered America in 1492?",
      answers: ["Marco Polo", "Christopher Columbus", "Vasco da Gama", "Magellan"],
      correct_answer: 1
    },
    {
      question: "What wall divided Berlin during the Cold War?",
      answers: ["Iron Wall", "Berlin Wall", "Stone Wall", "Cold Wall"],
      correct_answer: 1
    },
    {
      question: "Which empire was ruled by Julius Caesar?",
      answers: ["Greek", "Roman", "Ottoman", "Persian"],
      correct_answer: 1
    },
    {
      question: "What invention is associated with Gutenberg?",
      answers: ["Telephone", "Printing press", "Radio", "Steam engine"],
      correct_answer: 1
    },
    {
      question: "What country started the Olympic Games?",
      answers: ["Italy", "Greece", "France", "Egypt"],
      correct_answer: 1
    }
  ],

  technology: [
    {
      question: "What does CPU stand for?",
      answers: ["Central Processing Unit", "Computer Power Unit", "Central Program Utility", "Control Processing Unit"],
      correct_answer: 0
    },
    {
      question: "What device is used to input text into a computer?",
      answers: ["Monitor", "Mouse", "Keyboard", "Speaker"],
      correct_answer: 2
    },
    {
      question: "What does Wi-Fi allow devices to do?",
      answers: ["Print documents", "Connect to the internet", "Store files", "Create software"],
      correct_answer: 1
    },
    {
      question: "What company created Windows?",
      answers: ["Apple", "Google", "Microsoft", "IBM"],
      correct_answer: 2
    },
    {
      question: "What symbol is used in email addresses?",
      answers: ["#", "@", "&", "%"],
      correct_answer: 1
    },
    {
      question: "What does HTML stand for?",
      answers: ["HyperText Markup Language", "HighText Machine Language", "HyperTool Multi Language", "Home Tool Markup Language"],
      correct_answer: 0
    },
    {
      question: "What is a smartphone?",
      answers: ["A landline phone", "A computer server", "A mobile phone with advanced features", "A tablet"],
      correct_answer: 2
    },
    {
      question: "What does URL stand for?",
      answers: ["Universal Resource Locator", "Uniform Resource Locator", "User Resource Link", "Universal Reference Link"],
      correct_answer: 1
    }
  ],

  entertainment: [
    {
      question: "What movie features a character named Harry Potter?",
      answers: ["Lord of the Rings", "Harry Potter", "Star Wars", "The Hobbit"],
      correct_answer: 1
    },
    {
      question: "What is the name of Mickey Mouse’s dog?",
      answers: ["Goofy", "Pluto", "Donald", "Max"],
      correct_answer: 1
    },
    {
      question: "What color is Hulk?",
      answers: ["Red", "Blue", "Green", "Yellow"],
      correct_answer: 2
    },
    {
      question: "Which superhero uses a shield?",
      answers: ["Iron Man", "Thor", "Captain America", "Hulk"],
      correct_answer: 2
    },
    {
      question: "What animated movie features a talking snowman?",
      answers: ["Frozen", "Shrek", "Toy Story", "Cars"],
      correct_answer: 0
    },
    {
      question: "What is the name of the wizard school in Harry Potter?",
      answers: ["Hogwarts", "Durmstrang", "Beauxbatons", "Ilvermorny"],
      correct_answer: 0
    },
    {
      question: "What movie studio created Toy Story?",
      answers: ["Disney", "DreamWorks", "Pixar", "Illumination"],
      correct_answer: 2
    },
    {
      question: "Who is Batman’s enemy known as the Joker?",
      answers: ["A hero", "A villain", "A robot", "An alien"],
      correct_answer: 1
    }
  ],

  sports: [
    {
      question: "How many players are on a soccer team on the field?",
      answers: ["9", "10", "11", "12"],
      correct_answer: 2
    },
    {
      question: "Which sport uses a basketball?",
      answers: ["Soccer", "Basketball", "Tennis", "Baseball"],
      correct_answer: 1
    },
    {
      question: "What country invented soccer?",
      answers: ["Brazil", "England", "Spain", "Germany"],
      correct_answer: 1
    },
    {
      question: "How many points is a touchdown worth?",
      answers: ["3", "6", "7", "10"],
      correct_answer: 1
    },
    {
      question: "What sport uses a racket and a net?",
      answers: ["Basketball", "Tennis", "Golf", "Cricket"],
      correct_answer: 1
    },
    {
      question: "What is the Olympic symbol made of?",
      answers: ["Stars", "Rings", "Flags", "Circles"],
      correct_answer: 1
    },
    {
      question: "What sport is played at Wimbledon?",
      answers: ["Soccer", "Cricket", "Tennis", "Rugby"],
      correct_answer: 2
    },
    {
      question: "How many minutes are in a soccer match?",
      answers: ["60", "80", "90", "100"],
      correct_answer: 2
    }
  ]
};



function to_categories(){
    document.getElementById("menu").classList.add("hidden")
    document.getElementById("categories").classList.remove("hidden")
    generate_categories()
}



let choix;
const categories_choices = document.querySelectorAll(".choice")
const question_counter = document.querySelector(".question_counter")
const questions = document.querySelector(".question")
const answers = document.querySelectorAll(".answer")
const timer = document.querySelector(".timer")
const progress = document.querySelector(".progress_bar");
const score = document.querySelector(".score");
let score_counter = 0
let seleced_category;
let counter = 0
let timer_id


function generate_categories(){
    let categories = ["math","geography","science","history","technology","entertainment","sports"]
    for(let i = 0 ; i < 4 ; i++){
        choix = Math.floor(Math.random() * categories.length)
        categories_choices[i].textContent = categories[choix] 
        categories.splice(choix,1)
        console.log(categories)
    }
}

function to_quiz(button){
    seleced_category = button.textContent
    document.getElementById("categories").classList.add("hidden")
    document.getElementById("quizpage").classList.remove("hidden")
    document.getElementById("next").classList.add("hidden")
    

    show_content()
}

function show_content(){
    clearTimeout(timer_id)
    if (counter >= quiz_data[seleced_category].length) {
        document.getElementById("quizpage").classList.add("hidden")
        document.getElementById("score_page").classList.remove("hidden")
        score.textContent = `Your score is ${score_counter}/8`
        return;
    }
    question_counter.textContent = `Question N'${counter + 1}`
    questions.textContent = quiz_data[seleced_category][counter].question
    
    for(let i = 0 ; i < answers.length ; i++) {
        answers[i].textContent = quiz_data[seleced_category][counter].answers[i]
    }
    counter++
    
    progress.style.width =
    ((counter) / quiz_data[seleced_category].length) * 100 + "%";
    progress.style.background = "#5904BA";

    timer_id = setTimeout(next_button,20*1000)

}

function next_button(){
    
    show_content()
    answers.forEach(answer => answer.style = "quizpage.css")
    timer.style.animation = "none";
    timer.offsetHeight; // force reflow
    timer.style.animation = "timer_animation 20s linear reverse";
    
    document.getElementById("next").classList.add("hidden")
    answers.forEach(answer=> answer.disabled = false)

}

answers.forEach((answer,index) => {answer.addEventListener("click",function handler(event){
    const correctIndex = quiz_data[seleced_category][counter - 1].correct_answer
    if (index === correctIndex) {
      score_counter++
        answer.style.background = "green"
    } else {
        answer.style.background = "red"
    }
    answers[correctIndex].style.background = "green"

    document.getElementById("next").classList.remove("hidden")

    answers.forEach(answer=> answer.disabled = true)
    }
)})

