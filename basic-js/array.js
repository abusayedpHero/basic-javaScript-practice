var friendsAge = [15, 17, 14, 16];

var sonaliAge =friendsAge[2];

friendsAge[1] =21;

var position = friendsAge.indexOf(141);

console.log(friendsAge.length);
friendsAge.push(15);
friendsAge.push(20);
console.log(friendsAge.length);

var teaLine = ['kalam', 'salam', 'balam'];
teaLine.unshift('palam');
console.log(teaLine);
var part =teaLine.slice(2, 5);
console.log(part);