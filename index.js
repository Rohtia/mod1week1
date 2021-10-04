/*  --  SECTION 1: FUNCTIONS STRAIGHT UP -- */
//1. Make a function called logFavoriteMovie that logs your favorite movie
function logFavouriteMovie() {
	console.log("Ever After");
}
logFavouriteMovie();

//2. Make a function called sayName that logs your name
function sayName() {
	console.log("Raine");
}
sayName();


//3. Edit the sayName function above to create a variable inside of the function that is equal to a greeting. Change the console log to include the greeting concatenated with your name!
function sayName() {
	var greet = "Hi";
	console.log(greet + " Raine");
}


//4. Make a function called watchMovie that console logs "I watched". Then call the logFavoriteMovie function after the console log.
function watchMovie() {
	console.log("I watched ");
	logFavouriteMovie();
}
watchMovie();


/*  --  SECTION 2: FUNCTIONS WITH PARAMETERS. -- */
//1. Create a function with one parameter that logs the parameter. Invoke the funciton three times with different data types.
function parTest(a) {
	console.log(a);
}
parTest("Sk8ter Boy");
parTest("I'm coding");
parTest(3873);


//2. Create a function takes in two numbers and logs the numbers added together. Invoke the function two times with different numbers.
function sum(a, b) {
	console.log(a + b);
}
sum(3, 6);
sum(5, 1);

//3. Create a function that in first name and last name and logs a greeting that greets somebody by first and last name. Call the function three times with different names.
function greet(first, last) {
	console.log("Hey there " + first + " " + last);
}
greet("Harley", "Quinn");
greet("Ryan", "Smith");


//4. Make a function that takes in an object literal and logs a property of that object literal. Invoke the function once.
var cat = {
  name: "Gilbert",
  weight: "chumby",
}

function ob(lit) {
	console.log(lit);
}
ob(cat);


/*  -- SECITON 3: FUNCTIONS WITH RETURN -- */
//1. Make a function that takes in two numbers and returns the first number divided by the second. Invoke that function two times.
function divide(a, b) {
	return a/b;
}
divide(4, 2);
divide(8, 2);

//2. Make a function that takes in the name of a board game and a person's name and returns a string of "Do you want to play (board game name) with (persons name)?". Invoke the function with two different board game titles and names.
function game(game, name) {
	return "Do you want to play " + game + " with " + name + "?";
}
game("Monopoly", "Shaelyn");
game("Clue", "Bettsy");

//3. Make a function called truth or dare that takes in one boolean parameter and returns a truth if the boolean is true and a dare if the boolean is false.
function truthOrDare(t_f) {
	if(t_f === true) {
		console.log("I had planned to be a chemical engineer and a high school history teacher.");
	} else {
		console.log("I dare you to put a different colour nail polish on each finger.");
	}
}
truthOrDare(true);

//4. Make a function called rollADie that doesn't take in any parameters but returns a random number between 1 and 6
function rollADie() {
	return Math.floor(Math.random(6) * 6 + 1);
}
rollADie();

//5. Make a function called gambleOnSnakeEyes that creates two variables where each equal an invocation of the rollADie function. If both variables are 1s, then return "You won, congratulations!". Otherwise return "No luck this time, try again!";
function gambleOnSnakeEyes() {
	var dice1 = Math.floor(Math.random(6) * 6 + 1);
	var dice2 = Math.floor(Math.random(6) * 6 + 1);

	if (dice1 === 1) {
		if (dice2 === 1) {
			console.log("You won, congratulations!");
		} else {
			console.log("No luck this time, try again!");
		}
	} else{
		console.log("No luck this time, try again!");
	}
}
gambleOnSnakeEyes();

//MORE PRACTICE: https://www.teaching-materials.org/javascript/exercises/functions