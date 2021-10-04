// Write a function named calculateDogAge that:

//     takes 1 argument: your puppy's age.
//     calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
//     outputs the result to the screen like so: "Your doggie is NN years old in dog years!" 

// Call the function three times with different sets of values.
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years
function calculateDogAge(age, convert) {
	var dogAge = age * convert;
	console.log("Your doggie is " + dogAge + " years old in dog years!");
}
calculateDogAge(3, 7);
calculateDogAge(7, 7);
calculateDogAge(0.5, 7);

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

    // Write a function named calculateSupply that:
    //     takes 2 arguments: age, amount per day.
    //     calculates the amount consumed for rest of the life (based on a constant max age).
    //     outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X" 
    // Call that function three times, passing in different values each time.
    // Bonus: Accept floating point values for amount per day, and round the result to a round number. 

function calculateSupply(age, amtPerDay) {
	var years = 80 - age;
	var supply = years * 365 * amtPerDay;
	console.log("You will need " + supply + " to last you until the ripe old age of 80.");
}

calculateSupply(20, 2);
calculateSupply(32, 4);
calculateSupply(21, 8);

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

//     Pass the radius to the function.
//     Calculate the circumference based on the radius, and output "The circumference is NN". 

// Create a function called calcArea:

//     Pass the radius to the function.
//     Calculate the area based on the radius, and output "The area is NN". 

function calcCircumference(radius) {
	var circ = 2 * Math.PI * radius;
		console.log("The circumference is " + Math.round(circ));
}
calcCircumference(4);

function calcArea(radius) {
	var area = Math.PI * radius * radius;
	console.log("The area is " + Math.round(area));
}
calcArea(7);

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

//     Store a celsius temperature into a variable.
//     Convert it to fahrenheit and output "NN°C is NN°F". 

// Create a function called fahrenheitToCelsius:

//     Now store a fahrenheit temperature into a variable.
//     Convert it to celsius and output "NN°F is NN°C." 
// °C to °F 	Divide by 5, then multiply by 9, then add 32
// °F to °C 	Deduct 32, then multiply by 5, then divide by 9

function celsiusToFahrenheit(degC) {
	var degF = degC / 5 * 9 + 32;
	console.log(degC + "°C is " + degF + "°F");
}

celsiusToFahrenheit(20);

function fahrenheitToCelsius(degF) {
	var degC = (degF - 32) * 5 / 9;
	console.log(degF + "°F is " + degC + "°C");
}

fahrenheitToCelsius(68);