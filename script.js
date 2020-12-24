let start = document.getElementById('start');
let quiz = document.getElementById('quiz');
let question = document.getElementById('question');
let qImg = document.getElementById('qImg');
let choiceA = document.getElementById('A');
let choiceC = document.getElementById('B');
let choiceB = document.getElementById('C');
let counter = document.getElementById('counter');
let timeGauge = document.getElementById('timeGauge');
let progress = document.getElementById('progress');
let scoreDiv = document.getElementById('score');

let questions = [{
		question: 'Что такое html?',
		imgSrc: 'img/html.png',
		choiceA: 'Язык гипертекстовой разметки',
		choiceB: 'Язык программирования',
		choiceC: 'Каскадный язык стилей',
		correct: 'A'
	},
	{
		question: 'Что такое CSS?',
		imgSrc: 'img/html.png',
		choiceA: 'Язык гипертекстовой разметки',
		choiceB: 'Каскадный язык стилей',
		choiceC: 'Язык програяммировани',
		correct: 'B'
	},
	{
		question: 'Что такое JS?',
		imgSrc: 'img/html.png',
		choiceA: 'Язык гипертекстовой разметки',
		choiceB: 'Каскадный язык стилей',
		choiceC: 'Язык программирования',
		correct: 'C'
	},
	{
		question: 'Что такое PHP?',
		imgSrc: 'img/html.png',
		choiceA: 'Язык гипертекстовой разметки',
		choiceB: 'Язык',
		choiceC: 'Язык программирования',
		correct: 'C'
	},
];

const lastQuestion = questions.length - 1;
console.log(lastQuestion);
let runningQuestion = 0;

function renderQuestion() {
	let q = questions[runningQuestion];
	question.innerHTML = "<p>" + q.question + "</p>";
	qImg.innerHTML = "<img src=" + q.imgSrc + ">";
	choiceA.innerHTML = q.choiceA;
	choiceB.innerHTML = q.choiceB;
	choiceC.innerHTML = q.choiceC;
}

function renderProgress() {
	for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
		progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>"
	}
}

// Счётчик оставшегося времени

let count = 0;
let questionTime = 10;
let gaugeWidth = 100;
let gaugeUnit = gaugeWidth / questionTime;

function renderCounter() {
	if (count <= questionTime) {
		counter.innerHTML = count;
		timeGauge.style.width = count * gaugeUnit + "%";
		count++
	} else {
		count = 0;
	}
}

// Начать игру

start.addEventListener('click', startQuiz)

function startQuiz() {
	let timer = setInterval(renderCounter, 1000);

	renderProgress()
	renderQuestion();
	renderCounter();

	start.style.display = 'none';
	menu.style.display = 'none';
	quiz.style.display = 'block';
}

// Проверить ответ

function checkAnswer(answer) {
	if (answer === questions[runningQuestion].correct) {
		container.style.background = "rgba(50, 255, 0, 0.1)";
	} else {
		container.style.background = "rgba(255, 0, 0, 0.1)";
	}
}

function answerIsCorrect() {

}