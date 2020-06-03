const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const currentQuestionIndex
startButton.addEventListener('click', startGame);

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}
function setNextQuestion(){
    showQuestion([currentQuestionIndex])
}

function showQuestion(question){
    questionElemnt.innerText = question.question
}
function selectAnswer() {


}

const question = [
    {
        question: "what is java script?",
        answers: [
            { text: "a CS language", correct: true },
            { text: "a dog language", correct: false },
            { text: "a cat language", correct: false },
            { text: "a bird language", correct: false },
        ]
    }



]
