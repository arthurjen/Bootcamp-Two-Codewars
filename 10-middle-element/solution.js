var gimme = (inputArray) => inputArray.indexOf(inputArray.slice().sort((a, b) => b - a)[1]);
