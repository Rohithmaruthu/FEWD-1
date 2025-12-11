/*
    Exercise 1: Weather Outfit Advisor
    Scenario: Create a simple function that suggests what to wear based on weather conditions.

    Your Task: Write a function suggestOutfit(temperature, isRaining, isWindy) that returns clothing recommendations.

    Parameters:

    temperature: number (temperature in Celsius)
    isRaining: boolean (true if it's raining)
    isWindy: boolean (true if it's windy)
    Requirements:

    If temperature is below 0: suggest "heavy coat and boots"
    If temperature is 0-15: suggest "warm jacket"
    If temperature is 16-25: suggest "light sweater"
    If temperature is above 25: suggest "t-shirt"
    If it's raining: add "and umbrella" to any suggestion
    If it's windy: add "and windbreaker" to any suggestion
    Example:

    suggestOutfit(10, true, false);
    // Expected: "warm jacket and umbrella"

    suggestOutfit(28, false, true);
    // Expected: "t-shirt and windbreaker"
*/

function suggestOutfit(temperature, isRaining, isWindy) {
    // Your code here

    let outfit = "";

    if (temperature < 0) {
        outfit = "heavy coat and boots";
    } else if (temperature >= 0 && temperature <= 15) {
        outfit = "warm jacket";
    } else if (temperature >= 16 && temperature <= 25) {
        outfit =  "light sweater";
    } else if (temperature > 25) {
        outfit = "t-shirt";
    }

    if (isRaining == true) {
        outfit += " and umbrella";
    }
    
    if (isWindy == true) {
        outfit += " and windbreaker";
    }

    return outfit;
}

// Test your function
console.log(suggestOutfit(5, false, false));
console.log(suggestOutfit(20, true, true));