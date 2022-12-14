// Bài tập 5: Tính tổng 2 ký sô
// input: nhập vào 1 số có 2 chữ số
let number = 44;
// out put: tính tổng 2 ký số cừa nhập
let sum = 0;
// progress 
sum += number % 10;
number = Math.floor(number / 10);

sum += number;

console.log("Tổng của 2 ký số: ", sum);