//Three employees are working in the reception all day. Each of them can handle a different number of students per hour. 
//Your task is to calculate how much time it will take to answer all the questions of a given number of students.
//First, you will receive 3 lines with integers, representing the number of students that each employee can help per hour. 
//On the following line, you will receive students count as a single integer. 
//Every fourth hour, all employees have a break, so they don't work for an hour. 
//It is the only break for the employees, because they don't need rest, nor have a personal life. 
//Calculate the time needed to answer all the student's questions and print it in the following format: "Time needed: {time}h."

//input: 
//5
//6
//4
//20

//output:
//Time needed: 2h.

function demo(arr) {
    let firstEmployee = Number(arr.shift());
    let seconEmployee = Number(arr.shift());
    let thirdEmployee = Number(arr.shift());
    let people = Number(arr.shift());

    let totalpeoplePerHour = firstEmployee+seconEmployee+thirdEmployee;
    let neededHour = 0;
 
    while (people > 0) {
        neededHour++;
        people -= totalpeoplePerHour;
 
        if (neededHour % 4 === 0) {
            neededHour++;
        }
    }
    console.log(`Time needed: ${neededHour}h. `);
    

}
demo(['5','6','4','20']);
