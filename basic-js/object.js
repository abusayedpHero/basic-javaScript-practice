var student = { id:121, phone:1735, name:"Abu"};
var student2 = { id:143, phone:1409, name:"Sayed"};

var phoneNo = student['phone'];

//update number
student2.phone = 123456;
student2["phone"] = 1409070288;

//Notun Kisu Add
student2.cinema = "ogni2";
student2["movie"] = "Oviman2";

console.log(phoneNo);
console.log(student2);