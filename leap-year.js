
// 2022 % 4 = leap year hoiley vag ses 0 hobe

function myLeapYear(year) {
    if (year % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

const myYear = 2022;
let leapYear = myLeapYear(myYear);

console.log('Is it my leap year', leapYear);

const herYear = 2023;
leapYear = myLeapYear(herYear);

console.log('Is it her leap year', leapYear);






























