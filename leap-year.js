
// // 2022 % 4 = leap year hoiley vag ses 0 hobe (every 4 year)
// // century waiz leap year 400 dia vag kore jantey hobe




// function myLeapYear(year) {
//     if (year % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// const myYear = 2022;
// let leapYear = myLeapYear(myYear);

// // console.log('Is it my leap year', leapYear);

// const herYear = 2023;
// leapYear = myLeapYear(herYear);

// // console.log('Is it her leap year', leapYear);

// // 0 theke alada hotey hobe (year % 100 != 0) khetrey


function isItLeapYear(year) {
    if (year % 400 == 0) {
        return true;
    } else if (year % 100 == 0) {
        return false;
    } else if (year % 4 == 0) {
        return true;
    } else {
        return false;
    }
}


const year = 2404;

const leapYear = isItLeapYear(year);


console.log('Is it leap year', leapYear);























