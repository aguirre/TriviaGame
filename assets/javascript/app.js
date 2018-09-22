var qData = [
  {
    question: "What is the name of the Super Mario Bros. sidekick dinosaur?",
    answer1: "Birdo",
    answer2: "Yoshi",
    answer3: "Dino",
    answer4: "Yoda",
    correct: "Yoshi"
  },
  {
    question: "What is the name of the castle in Zelda?",
    answer1: "Helm's Deep",
    answer2: "Hyrule",
    answer3: "Riverrun",
    answer4: "Baron",
    correct: "Hyrule"
  },
  {
    question: "Who is the main antagonist in Crash Bandicoot?",
    answer1: "Doctor Robotnik",
    answer2: "Doctor Claw",
    answer3: "Doctor Cortex",
    answer4: "Doctor Evil",
    correct: "Doctor Cortex"
  },
  {
    question: "What is Sonic the Hedgehog's favorite food?",
    answer1: "Pizza",
    answer2: "Nachos",
    answer3: "Chili Dog",
    answer4: "Hamburger",
    correct: "Chili Dog"
  },
  {
    question: "Who is the main character in Half-Life?",
    answer1: "Adrian Shephard",
    answer2: "Gordon Freeman",
    answer3: "Richard Keller",
    answer4: "Barney Calhoun",
    correct: "Gordon Freeman"
  },
  {
    question: "What is the name of the main AI in Halo?",
    answer1: "Siri",
    answer2: "Cortana",
    answer3: "Alexa",
    answer4: "Serina",
    correct: "Cortana"
  },
  {
    question: "What fruit in PacMan is worth the most points?",
    answer1: "Melon",
    answer2: "Orange",
    answer3: "Cherry",
    answer4: "Apple",
    correct: "Melon"
  }
];

var startTime = 11;
var currentQuestion = 0;
var correctCount = 0;
var incorrectCount = 0;
var unanswered = 0;
var intervalVar;

$(document).read(function() {
  console.log(qData[0].question);
  $("#start").on("click", function() {
    showQuestion();
    intervalVar = setInterval(countDown, 1000);
  });
  function showQuestion() {
    $("#question").empty();
    $(".form").empty();
    $("#question").text(qData[currentQuestion].question);
    $(".form").append(
      "<button class='answer1'>" + qData[currentQuestion].answer1 + "</button>"
    );
    $(".form").append(
      "<button class='answer2'>" + qData[currentQuestion].answer2 + "</button>"
    );
    $(".form").append(
      "<button class='answer3'>" + qData[currentQuestion].answer3 + "</button>"
    );
    $(".form").append(
      "<button class='answer4'>" + qData[currentQuestion].answer4 + "</button>"
    );
  }
});
