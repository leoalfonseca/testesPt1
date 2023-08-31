function countSheep(sheepArray) {
  if (!Array.isArray(sheepArray)) {
    return 0;
  }

  let sheepCount = 0;
  
  for (let i = 0; i < sheepArray.length; i++) {
    if (sheepArray[i] === true) {
      sheepCount++;
    }
  }

  return sheepCount;
}

const sheepArray = [true, true, true, false, true, true, 
true, true, true, false, true, false, true, false, false, true, 
true, true, true, true, false, false, true, true];

const totalSheep = countSheep(sheepArray);
console.log("Total de ovelhas:", totalSheep);
