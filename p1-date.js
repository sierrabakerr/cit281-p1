/*
    CIT 281 Project 1
    Name: Sierra Baker
*/

/*
Directions:
- Output to the console the day of the week of the current day
- Full name (e.g., Sunday, Monday)
- Must use an array that contains the days of the week
- Try to come up with a single line of code
- Execute your program using the command line, as well as the Run and Debug VSCode option

*/

/*const d = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let currentday = d[new Date().getDay()];
^ two liner */

/* let d = [new Date().getDay()]["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; console.log(d);
^ undefined  */


let currentday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date().getDay()];console.log(currentday);

