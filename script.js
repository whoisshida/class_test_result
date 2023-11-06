const listItemArray = document.querySelectorAll("li");

const maxPoints = 120;
const passingPoints = 70;
const samPoints = 84;
let alexPoints = 45;
const jessiePoints = 99;
let didAlexPass = false;
let samPointsDisplay = "Sam earned " + samPoints + " out of " + maxPoints;
let alexPointsDisplay = "Alex earned " + alexPoints + " out of " + maxPoints;
let jessiePointsDisplay = "Jessie earned " + jessiePoints + " out of " +
  maxPoints;
console.log(samPointsDisplay);
console.log(alexPointsDisplay);
console.log(jessiePointsDisplay);
let samPercentage = (samPoints / maxPoints) * 100;
let samPercentDisplay = "Sam scored " + samPercentage + "%. ";
console.log(samPercentDisplay);
let alexPercentage = (alexPoints / maxPoints) * 100;
let alexPercentDisplay = "Alex scored " + alexPercentage + "%. ";
console.log(alexPercentDisplay);
let jessiePercentage = (jessiePoints / maxPoints) * 100;
let jessiePercentDisplay = "Jessie scored " + jessiePercentage + "%. ";
console.log(jessiePercentDisplay);
let samMissedPoints = maxPoints - samPoints;
let alexMissedPoints = maxPoints - alexPoints;
let jessieMissedPoints = maxPoints - jessiePoints;
let samMissedPointsDisplay = "Sam missed " + samMissedPoints + "points. ";
console.log(samMissedPointsDisplay);
let alexMissedPointsDisplay = "Alex missed " + alexMissedPoints + "points. ";
console.log(alexMissedPointsDisplay);
let jessieMissedPointsDisplay = "Jessie missed " + jessieMissedPoints +
  "points. ";
console.log(jessieMissedPointsDisplay);
let classAveragePoints = (samPoints + alexPoints + jessiePoints) / 3;
let classAveragePercent = (classAveragePoints / maxPoints) * 100;
let classAvgDisplay = "The class average was " + classAveragePoints +
  "points or " + classAveragePercent.toFixed(2) + "%. ";
console.log(classAvgDisplay);
alexPoints = 75;
didAlexPass = !didAlexPass;
let alexPointsUpdated =
  "Alex failed initially but did extra credit. Their new score is " +
  alexPoints + "out of " + maxPoints;
console.log(alexPointsUpdated);
listItemArray[0].innerHTML = "Raw Points:";
listItemArray[4].innerHTML = "Percentages:";
listItemArray[8].innerHTML = "Missed Points:";
listItemArray[12].innerHTML = "Final Notes:";
listItemArray[1].innerHTML = samPointsDisplay;
listItemArray[2].innerHTML = alexPointsDisplay;
listItemArray[3].innerHTML = jessiePointsDisplay;
listItemArray[5].innerHTML = samPercentDisplay;
listItemArray[6].innerHTML = alexPercentDisplay;
listItemArray[7].innerHTML = jessiePercentDisplay;
listItemArray[9].innerHTML = samMissedPointsDisplay;
listItemArray[10].innerHTML = alexMissedPointsDisplay;
listItemArray[11].innerHTML = jessieMissedPointsDisplay;
listItemArray[13].innerHTML = classAvgDisplay;
listItemArray[14].innerHTML = alexPointsUpdated;