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
var numOFHitsTeam1 = 0;
var numOfHitsTeam2 = 0;
 var x = Math.random();



//$(document).ready(function(){
 $("#teamone-shoot").click(function(){
     $("body").css("background-color", "lightgray");
     numOfShotsTeam1++;
     	 $("#teamone-numshots").replaceWith(numOfShotsTeam1);
		numOFHitsTeam1 += Math.round(x);
});
//});

//$(document).ready(function(){
 $("#teamtwo-shoot").click(function(){
     $("body").css("background-color", "red");
     numOfShotsTeam2++;
     	 $("#teamtwo-numshots").replaceWith(numOfShotsTeam2);
     	 numOFHitsTeam2 += Math.round(x);
});
//});


//$(document).ready(function(){
 $("#reset").click(function(){
     numOfShotsTeam1 = 0;
	 numOfShotsTeam2 = 0;
	 totalShots = 0;
	 num_resets++;
	 $("#num-resets").replaceWith(num_resets);
							});
 //});

 //$(function(){



 //})
