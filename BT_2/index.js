// Bài tập 2: Tính giá trị trung bình
// input: nhập vào 5 số thực
let SO_THUC = 47819;
// out put: giá trị trung bình của 5 số thực
let average = 0;
// progress 
average += SO_THUC % 10;
SO_THUC = Math.floor(SO_THUC / 10);

average += SO_THUC % 10;
SO_THUC = Math.floor(SO_THUC / 10);

average += SO_THUC % 10;
SO_THUC = Math.floor(SO_THUC / 10);

average += SO_THUC % 10;
SO_THUC = Math.floor(SO_THUC / 10);

average += SO_THUC;

average = average / 5;

console.log("Giá trị trung bình của 5 số thực: ", average);