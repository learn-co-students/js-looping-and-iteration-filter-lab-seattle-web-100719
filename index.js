// Code your solution in this file
function findMatching(drivers, pickedName)
{
    return drivers.filter(function(name) {return name.toUpperCase() === pickedName.toUpperCase()});
}

function fuzzyMatch(drivers, pickedLetters)
{
    return drivers.filter(function(name) {return name.slice(0, pickedLetters.length) === pickedLetters.slice(0, pickedLetters.length)});
}

function matchName(drivers, pickedName)
{
    return drivers.filter(function(driver) {return driver.name.toUpperCase() === pickedName.toUpperCase()});
}