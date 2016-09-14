/**
 * Hockey is the game. Make it happen.
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a 
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 * 
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 * 
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */


var numOfShotsTeam1 = 0;
var numOfShotsTeam2 = 0;
var totalShots = 0;
var num_resets = 0;
var numOfHitsTeam1 = 0;
var numOfHitsTeam2 = 0;
 var x = 0;
var y = 0;

    var audio = $("audio")[0];
    audio.play(); 

//$(document).ready(function(){
 $("#teamone-shoot").click(function(){
     numOfShotsTeam1++;
     console.log(numOfShotsTeam1);
     	 $("#teamone-numshots").text(numOfShotsTeam1);
     	 x = Math.random();
		numOfHitsTeam1 += Math.round(x);
		if (Math.round(x)== 1) {
			     $("#teamone-numhits").text(numOfHitsTeam1);
			     $("body").css("background-color", "lightgray");
			 }
});
//});

//$(document).ready(function(){
 $("#teamtwo-shoot").click(function(){
     numOfShotsTeam2++;
     	 $("#teamtwo-numshots").text(numOfShotsTeam2);
     	 y = Math.random();
     	 numOfHitsTeam2 += Math.round(y);
		if (Math.round(y)== 1) {
				 $("#teamtwo-numhits").text(numOfHitsTeam2);
			     $("body").css("background-color", "red");
			 }

});
//});


//$(document).ready(function(){
 $("#reset").click(function(){
     numOfShotsTeam1 = 0;
	 numOfShotsTeam2 = 0;
	 totalShots = 0;
	 numOfHitsTeam1 = 0;
	 numOfHitsTeam2 = 0;
	 num_resets++;
	 $("#num-resets").text(num_resets);
	      	 $("#teamone-numshots").text(numOfShotsTeam1);
     	     $("#teamtwo-numshots").text(numOfShotsTeam2);
			 $("#teamone-numhits").text(numOfHitsTeam1);
			 $("#teamtwo-numhits").text(numOfHitsTeam2);

							});




    $(document).ready(function() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'Hockey_Stick_Slap.mp3');
        audioElement.setAttribute('autoplay', 'autoplay');
        //audioElement.load()

        $.get();

        audioElement.addEventListener("load", function() {
            audioElement.play();
        }, true);

        $('.play').click(function() {
            audioElement.play();
        });

        $('.pause').click(function() {
            audioElement.pause();
        });
    }); 

 //});

 //$(function(){



 //})
