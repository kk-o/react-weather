import React, { Component } from "react";

// todo: add feature to display pictures of clothing along with text of what to wear 
//  `-> sub: add emojis next to the recommended clothing 

// todo: give the user the option to refresh the clothing that is recommended to them
//  `-> generate new links for the user to click on

const celsiusToFahrenheit = (celsius) => {
    // converts celsius to fahrenheit 
    return celsius *  9/5 + 32;
};

const checkWeather = (temperature) => {

    const pickClothing = (type) => {
        const clothing = {
            light: ["shirt 🎽"], // "wear smtn light"
            medium: ["jacket", "scarf 🧣"],
            heavy: ["coat 🧥"],
            none: ["shirt 👕"] // "you wont need more than a shirt"
        };

        // pick a random piece of light, med, or heavy clothing 
        return clothing.type[Math.floor(Math.random()*clothing.type.length)];
    }

    // convert API temperature (celsius) to fahrenheit
    temperature = celsiusToFahrenheit(temperature);  

    if (temperature > 80) { 
        return "No";
    } else if (temperature < 60) {
        return "Yes";
    } else {
        return "You might need a jacket";
    }

};


class Jacket extends Component {

    render() {
        return (
            <div>
                <h1>Do I need a jacket: {checkWeather(10)}</h1>
            </div>
        );
    }

}

export default Jacket;