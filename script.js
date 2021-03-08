$(document).ready(function(){
	
	var magic8Ball = {};
	magic8Ball.listOfAnswers = ["It is decidedly so", "Most likely", "My reply is no", "My sources say no", "Outlook good", "Outlook not so good", "Reply hazy try again", "Signs point to yes", "Very doubtful", "Without a doubt", "Yes", "Yes definitely", "You may rely on it"];
  
  $("#answer").hide();

	magic8Ball.askQuestion = function (question){
			$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
           $("#answer").fadeIn(2000);
			var randomNumber = Math.random();
			var randomNumberArray = randomNumber * this.listOfAnswers.length;
			var randomIndex = Math.floor(randomNumberArray);
			var randomAnswer = this.listOfAnswers[randomIndex];
     $("#answer").text(randomAnswer); 
			console.log(question);
			console.log(randomAnswer);
      
	};
  
	
  
	var askButton = function() {
      $("#answer").hide();
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
      //$("#8ball").effect( "shake" );
		setTimeout(
			function() {
				var question = prompt("Ask a yes/no question!");
$("#8ball").effect( "shake" );
        setTimeout(
			function() {  magic8Ball.askQuestion(question);
                 }, 1000);
                 
	}, 500);
	};
	$("#questionButton").click(askButton);
//magic8Ball.answer("Will my puppy be a good boy today?");
});