 /*

     THIS IS THE FIRST CHALLENGE ADVANCE

 */



//const calcAverage = (score1, score2, score3) =>{
//    return (score1 + score2 + score3)/3;
//}
//
//
//    
//function checkWinner(aveDolphin, aveKoala){
//
//    if(aveDolphin >= (aveKoala * 2)){
//        return `Dolphins win (${aveDolphin} vs. ${aveKoala})`
//    }else if(aveKoala >= (aveDolphin * 2)){
//        return `Koalas win (${aveKoala} vs. ${aveDolphin})`
//    }else{
//        return 'none of the team won'
//    }
//}
//
//const aveDol1 = calcAverage(44, 23, 71);
//const aveKoa1 = calcAverage(65, 54, 49);
//
//const aveDol2 = calcAverage(85, 54, 41);
//const aveKoa2 = calcAverage(23, 34, 27);
//
//const data1 = checkWinner(aveDol1, aveKoa1);
//const data2 = checkWinner(aveDol2, aveKoa2);
//
//console.log(data1);
//console.log(data2);


 /*

     THIS IS THE SECOND CHALLENGE ADVANCE

 */


//function calcTip(bill){
//    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
//}
//const bill = [125, 555, 44];
//const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
//const total = [(bill[0] + tips[0]), (bill[1] + tips[1]), (bill[2] + tips[2])];
//
//console.log(tips);
//console.log(total);
//



 /*

     THIS IS THE THIRD CHALLENGE ADVANCE

 */


//const markMiller = {
//    firstName: 'Mark',
//    lastName: 'Miller',
//    weight: 78,
//    height: 1.69,
//    calBMI: function(){
//        this.bmi = Number(this.weight/(this.height ** 2)).toFixed(2);
//        return this.bmi;
//        
//    },
//    sumary: function(){
//        
//        return `${this.firstName} ${this.lastName}'s BMI (${this.calBMI()})`;
//    }
//
//}
//
//const johnSmith = {
//    firstName: 'John',
//    lastName: 'Smith',
//    weight: 92,
//    height: 1.95,
//    calBMI: function(){
//        this.bmi = Number(this.weight/(this.height ** 2)).toFixed(2);
//        return this.bmi;
//    },
//    sumary: function(){
//        return `${this.firstName} ${this.lastName}'s BMI (${this.calBMI()})`;
//    }
//}
//
//if(markMiller.bmi > johnSmith.bmi){
//    console.log(`${markMiller.sumary()} is higher than ${johnSmith.sumary()}`);
//}else{
//    console.log(`${johnSmith.sumary()} is higher than ${markMiller.sumary()}`);
//}


 /*

     THIS IS THE FOURTH CHALLENGE ADVANCE

 */

//
//const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
//const tips = [];
//const totals = [];
//
//function calcTip(bills){
//    return (bills >= 50 && bills <= 300) ? bills * 0.15 : bills * 0.20;
//}
//
//for(let i = 0; i < bills.length; i++){   
//    const tip = calcTip(bills[i]) 
//    tips.push(tip);
//    totals.push(bills[i] + tip)
//}
//
//console.log(tips, 'tips');
//console.log(totals, 'totals');
//
//
//
//
//let sum = 0;
//
//function calcAverage(arr){
//    for(let i = 0; i <= arr.length - 1; i++){
//        sum += arr[i];
//    }
//    return sum / arr.length;
//}
//
//calcAverage(totals)
//console.log(sum);



 /*

     THIS IS THE FIFTH CHALLENGE ADVANCE

 */
//
//const temp1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
//const temp2 = [20, -2, -10, -1, 'error', 9, 13, 17, 'error', 14, 9, 5];
//
//const calvTempAmplitude = function (temps) {
//  let max = temps[0];
//  let min = temps[0];
//  for (let i = 0; i <= temps.length; i++) {
//    const curTemp = temps[i];
//    if (typeof curTemp !== 'number') continue;
//    if (curTemp > max) max = curTemp;
//    if (curTemp < min) min = curTemp;
//  }
//
//  return max - min;
//};
//
//const amplitude = calvTempAmplitude(temp1);
//console.log(amplitude);
//
//// Two arrays
//
//const calvTempAmplitudeNew = function (t1, t2) {
//  const temps = t1.concat(t2);
//
//  let max = temps[0];
//  let min = temps[0];
//  for (let i = 0; i <= temps.length; i++) {
//    const curTemp = temps[i];
//    if (typeof curTemp !== 'number') continue;
//    if (curTemp > max) max = curTemp;
//    if (curTemp < min) min = curTemp;
//  }
//
//  return max - min;
//};
//
//const amplitudeNew = calvTempAmplitudeNew(temp1, temp2);
//console.log(amplitudeNew);


 /*

     THIS IS THE SIXTH CHALLENGE ADVANCE

 */


//const array = [17, 21, 23];
//const array = [12, 5, -5, 0, 4];
//
//const printForecast = function (arr) {
//  let str = '';
//
//  for (let i = 0; i < arr.length; i++) {
//    if (arr[i] <= 1) continue;
//    str += `${arr[i]}C in ${i + 1} days ...`;
//  }
//  console.log('...' + str);
//};
//printForecast(array);
