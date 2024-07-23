// We are given array of marks of students. Filter out marks of the students that scored 90+.

let marks = [78, 80, 90, 95, 98, 97, 70, 60];

const marksFil = marks.filter((val)=> {
    return val >= 90;
})
console.log("90+ marks: ",marksFil);


