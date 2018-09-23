var qData = [
  {
    question: "What is the name of the Super Mario Bros. sidekick dinosaur?",
    answer1: "Birdo",
    answer2: "Yoshi",
    answer3: "Dino",
    answer4: "Yoda",
    correct: "Yoshi",
    image: "assets/images/yoshi.gif"
  },
  {
    question: "What is the name of the castle in Zelda?",
    answer1: "Helm's Deep",
    answer2: "Hyrule",
    answer3: "Riverrun",
    answer4: "Baron",
    correct: "Hyrule",
    image: "assets/images/hyrule.gif"
  },
  {
    question: "Who is the main antagonist in Crash Bandicoot?",
    answer1: "Doctor Robotnik",
    answer2: "Doctor Claw",
    answer3: "Doctor Cortex",
    answer4: "Doctor Evil",
    correct: "Doctor Cortex",
    image: "assets/images/crash.gif"
  },
  {
    question: "What is Sonic the Hedgehog's favorite food?",
    answer1: "Pizza",
    answer2: "Nachos",
    answer3: "Chili Dog",
    answer4: "Hamburger",
    correct: "Chili Dog",
    image: "assets/images/sonic.gif"
  },
  {
    question: "Who is the main character in Half-Life?",
    answer1: "Adrian Shephard",
    answer2: "Gordon Freeman",
    answer3: "Richard Keller",
    answer4: "Barney Calhoun",
    correct: "Gordon Freeman",
    image: "assets/images/gordon.gif"
  },
  {
    question: "What is the name of the main AI in Halo?",
    answer1: "Siri",
    answer2: "Cortana",
    answer3: "Alexa",
    answer4: "Serina",
    correct: "Cortana",
    image: "assets/images/cortana.gif"
  },
  {
    question: "What fruit in PacMan is worth the most points?",
    answer1: "Melon",
    answer2: "Orange",
    answer3: "Cherry",
    answer4: "Apple",
    correct: "Melon",
    image: "assets/images/pacman.gif"
  }
];

var startTime = 11;
var currentQuestion = 0;
var correctCount = 0;
var incorrectCount = 0;
var unanswered = 0;
var intervalVar;

$(document).ready(function() {
  $("#start").on("click", function() {
    $("#start").hide();
    showQuestion();
    intervalVar = setInterval(timer, 1000);
  });

  function showQuestion() {
    $("#question").empty();
    $(".choices").empty();
    $("#question").text(qData[currentQuestion].question);
    $(".choices").append(
      "<button class='btn-lg btn-secondary hvr-back-pulse answer1'>" +
        qData[currentQuestion].answer1 +
        "</button>"
    );
    $(".choices").append(
      "<button class='btn-lg btn-secondary hvr-back-pulse answer2'>" +
        qData[currentQuestion].answer2 +
        "</button>"
    );
    $(".choices").append(
      "<button class='btn-lg btn-secondary hvr-back-pulse answer3'>" +
        qData[currentQuestion].answer3 +
        "</button>"
    );
    $(".choices").append(
      "<button class='btn-lg btn-secondary hvr-back-pulse answer4'>" +
        qData[currentQuestion].answer4 +
        "</button>"
    );
  }

  function timer() {
    startTime--;
    $("#timer").text("Time Left: " + startTime);
    if (startTime === 0) {
      clearInterval(intervalVar);
      unanswered++;
      $("#alert").html(
        "Out of Time!<br>Correct Answer: " + qData[currentQuestion].correct
      );
      $("#image").append("<img src='" + qData[currentQuestion].image + "'>");
      $(".choices").empty();
      setTimeout(resetQuestion, 5000);
    }
  }

  $(".choices").on("click", ".answer1", function() {
    checkAnswer($(".answer1").text());
  });
  $(".choices").on("click", ".answer2", function() {
    checkAnswer($(".answer2").text());
  });
  $(".choices").on("click", ".answer3", function() {
    checkAnswer($(".answer3").text());
  });
  $(".choices").on("click", ".answer4", function() {
    checkAnswer($(".answer4").text());
  });

  function checkAnswer(answer) {
    clearInterval(intervalVar);
    if (answer === qData[currentQuestion].correct) {
      $("#alert").html("Correct!<br>" + qData[currentQuestion].correct);
      $("#image").append("<img src='" + qData[currentQuestion].image + "'>");
      $(".choices").empty();
      setTimeout(resetQuestion, 5000);
      correctCount++;
    } else {
      $("#alert").html(
        "Wrong!<br>Correct Answer: " + qData[currentQuestion].correct
      );
      $("#image").append("<img src='" + qData[currentQuestion].image + "'>");
      $(".choices").empty();
      setTimeout(resetQuestion, 5000);
      incorrectCount++;
    }
  }

  function resetQuestion() {
    currentQuestion++;
    $("#image").empty();
    $("#alert").empty();

    if (currentQuestion == qData.length) {
      clearInterval(intervalVar);
      $("#alert").empty();
      $("#question").empty();
      $("#result").append("Correct: " + correctCount + "<br>");
      $("#result").append("Wrong: " + incorrectCount + "<br>");
      $("#result").append("Unanswered: " + unanswered);
      $("#restart").show();
    } else {
      showQuestion();
      startTime = 11;
      intervalVar = setInterval(timer, 1000);
    }
  }
});
