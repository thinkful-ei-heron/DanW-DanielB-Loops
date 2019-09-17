function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;

  return location => {
    warningCounter++;
    let plural = '';
    if (warningCounter > 1) plural = 's';
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time${plural} today!`);
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const blizzardWarning = hazardWarningCreator('Whiteout conditions');
const huricaneWarning = hazardWarningCreator('200mph+ winds');

rocksWarning('Colorado');
blizzardWarning('Alaska');
huricaneWarning('Florida');
rocksWarning('California');
blizzardWarning('Michigan');
huricaneWarning('Bahamas');
rocksWarning('Montana');
blizzardWarning('Maine');
huricaneWarning('Cuba');
