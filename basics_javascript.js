/*

    THIS IS THE FIRST CHALLENGE

*/

// BMI calculator. BMI = mass/height^2
// Weight in kilogram and Height in meter

// THIS IS TRUE
//const markWeight = 78;
//const markHeight = 1.69;
//
//const johnWeight = 92;
//const johnHeight = 1.95;


// THIS IS FALSE
//const markWeight = 95;
//const markHeight = 1.88;
//
//const johnWeight = 85;
//const johnHeight = 1.76;
//
//// this calculate the BIM of both
//const markBIM = markWeight / (markHeight**2);
//const johnBIM = johnWeight / (johnHeight**2);
//
//console.log(markBIM);
//console.log(johnBIM);
//
//// This compare both BIM to 
//const markHigherBIM = markBIM > johnBIM;
//
//console.log(markHigherBIM);
//
//



// /*

//     THIS IS THE SECOND CHALLENGE

// */

//if(markBIM > johnBIM){
//    console.log(`Mark's BIM ${Number(markBIM).toFixed(2)} is higher than John's BIM ${Number(johnBIM).toFixed(2)}`);
//}else {
//    console.log(`John's BIM ${Number(johnBIM).toFixed(2)} is higher than Mark's BIM ${Number(markBIM).toFixed(2)}`);
//}




 /*

     THIS IS THE THIRD CHALLENGE

 */



const [dolphinsOne, dolphinsTwo, dolphinsThree] = [125, 112, 101];
const [koalaOne, koalaTwo, koalaThree] = [109, 95, 106];

const dolphinsAve = Number((dolphinsOne + dolphinsTwo + dolphinsThree)/3).toFixed(2);
const koalaAve = Number((koalaOne + koalaTwo + koalaThree)/3).toFixed(2);

console.log(dolphinsAve);
console.log(koalaAve);

if(koalaAve > dolphinsAve ){
    console.log(`Koalas won ${koalaAve} to ${dolphinsAve} Dolphins`)
}else if(dolphinsAve > koalaAve){
    console.log(`Dolphins won ${dolphinsAve} to ${koalaAve} Koalas`);
}else{
    console.log('DRAW'); 
}

// BONUS!!!!!

if(dolphinsAve > koalaAve && dolphinsAve >= 100){
    console.log(`Dolphins won by ${dolphinsAve} to ${koalaAve} Koalas`);
}else if(koalaAve > dolphinsAve && koalaAve >= 100){
    console.log(`Koalas won ${koalaAve} to ${dolphinsAve} Dolphins`);
}else if(dolphinsAve === koalaAve && dolphinsAve >= 100 && koalaAve >= 100){
    console.log('DRAW!')
}else{
    console.log('No team WON the Trophy');
}


















