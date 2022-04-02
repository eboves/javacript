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


//
//const [dolphinsOne, dolphinsTwo, dolphinsThree] = [125, 112, 101];
//const [koalaOne, koalaTwo, koalaThree] = [109, 95, 106];
//
//const dolphinsAve = Number((dolphinsOne + dolphinsTwo + dolphinsThree)/3).toFixed(2);
//const koalaAve = Number((koalaOne + koalaTwo + koalaThree)/3).toFixed(2);
//
//console.log(dolphinsAve);
//console.log(koalaAve);
//
//if(koalaAve > dolphinsAve ){
//    console.log(`Koalas won ${koalaAve} to ${dolphinsAve} Dolphins`)
//}else if(dolphinsAve > koalaAve){
//    console.log(`Dolphins won ${dolphinsAve} to ${koalaAve} Koalas`);
//}else{
//    console.log('DRAW'); 
//}
//
//// BONUS!!!!!
//
//if(dolphinsAve > koalaAve && dolphinsAve >= 100){
//    console.log(`Dolphins won by ${dolphinsAve} to ${koalaAve} Koalas`);
//}else if(koalaAve > dolphinsAve && koalaAve >= 100){
//    console.log(`Koalas won ${koalaAve} to ${dolphinsAve} Dolphins`);
//}else if(dolphinsAve === koalaAve && dolphinsAve >= 100 && koalaAve >= 100){
//    console.log('DRAW!')
//}else{
//    console.log('No team WON the Trophy');
//}
//
//


/*

	SWITCH AND IF

 */
 
const day = 'monday';
switch(day){
	case 'monday':
		console.log('practice programming and go to work');
		break;
	case 'tuesday':
	case 'wednesday':
		console.log('days off!!');
		break;
	case 'thursday':
		console.log('first day of work');
		console.log('go to the gym');
		break;
	case 'friday':
		console.log('longest day of work');
		break;
	case 'saturday':
	case 'sunday':
		console.log('finally some easy days');
		break;
	default:
		console.log('q perreria');
}

if(day === 'monday'){
    console.log('practice programming and go to work');
}else if(day === 'tuesday' || day === 'wednesday'){
    console.log('day off!!');
}else if(day === 'thursday'){
    console.log('first day of work');
    console.log('go to the gym');
}else if(day === 'friday'){
    console.log('longest day of work');
}else if(day === 'saturday' || day === 'sunday'){
    console.log('finally some easy days');
}else{
    console.log('q perreria');
}












