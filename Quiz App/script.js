const questions =[
    {
        question : "which is the largest animal in the world ?",
        answers : [
            {text:"Lion" , correct: false },
            {text:"Blue whale" , correct: true },
            {text:"Elephant" , correct: false },
            {text:"Ranbeer Kapoor" , correct: false },
        ]
    },
    {
        question : "which is the largest continent in the world ?",
        answers : [
            {text:"Asia" , correct: true },
            {text:"Antarctica" , correct: false },
            {text:"Australia" , correct: false },
            {text:"Russia" , correct: false },
        ]
    },
    {
        question : "who is the prime minister of India ?",
        answers : [
            {text:"Rishi Sunak" , correct: false },
            {text:"Vijay malya" , correct: false },
            {text:"Narendra Modi" , correct: true },
            {text:"Nora Fatehi" , correct: false },
        ]
    },
    {
        question : "who created javascript language ?",
        answers : [
            {text:"Brendan Eich" , correct: true },
            {text:"Richard Feyman" , correct: false },
            {text:"Tim Berner Lee" , correct: false },
            {text:"Tim Cook" , correct: false },
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click" , selectAnswer);
    })
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function handleNextButton(){
    currentQuestionIndex += 1;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else{
        showScore();
        
    }
}

function showScore(){
    
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else{
        startQuiz();
    }
})

startQuiz();