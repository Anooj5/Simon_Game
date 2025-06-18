var gamePattern = [];

var userClickedPattern = [];

var buttonColours = ["red","blue","green","yellow"];

var level = 0;

var started = false;

function checkAnswer(currectLevel){
    if (gamePattern[currectLevel] === userClickedPattern[currectLevel]){
        console.log("success")
        if (gamePattern.length === userClickedPattern.length){
            setTimeout(function() {
            nextSequence()
            }, 1000);
        }
    }else{
        console.log("Fail")
        playSound("wrong")
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

$(document).keypress(function(){
    if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour)
  // var audio = new Audio("sounds/"+userClickedPattern+".mp3");
  playSound(userChosenColour)
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});

function nextSequence(){
    userClickedPattern = []
    level++;
    $("#level-title").text("Level "+ level);
    var randomNumber = Math.floor(Math.random()*4);
    // return randomNumber;
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#"+ randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColour);
}

function playSound(name){
    var aud = new Audio("sounds/"+name+".mp3");
    aud.play();
}

function animatePress(currentColour) {
  $("#"+currentColour).addClass("pressed");
  
  setTimeout(function() {
    $("#"+ currentColour).removeClass("pressed");
  }, 100);
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}