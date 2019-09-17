function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;
  return function (location){
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    if(warningCounter === 1){
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
    } else {
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`);
    }
  }
}

const rocksWarning = hazardWarningCreator("rocks")
const windWarning = hazardWarningCreator("rocks")
const frostWarning = hazardWarningCreator("rocks")
rocksWarning('street');
rocksWarning('street');
rocksWarning('street');
windWarning('mountain');
frostWarning('sidewalk');
windWarning('mountain');
frostWarning('sidewalk');
windWarning('mountain');
frostWarning('sidewalk');
