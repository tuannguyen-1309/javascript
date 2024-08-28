console.log("Data types");
/*
 * Variables
 * Constants
 * Comment
 */

// Constant (muốn biến k thay đổi giá trị dùng constant)
// const x = 5;
// x = 6;
// console.log(x);

// let x = 5,
//   y = 6,
//   z = 7;
// // Cách in nhiều biến cùng lúc
// console.log("test string", "\n", "x =", x, "y =", y, "z =", z);

/**
 ** Data types
 ** 1. String
 ** 2. Number
 ** 3. BigInt
 ** 4. Boolean
 ** 5. Undefined
 ** 6. Null
 ** 7. Symbol
 ** 8. Object
 */
// 1. String
// Using double quotes:(sử dụng dấu ngoặc kép)
let carName1 = "Volvo XC60";

// Using single quotes:(sử dụng dấu ngoặc đơn)
let carName2 = "Volvo XC60";
// có thể sử dụng dấu ngoặc kép bên trong một chuỗi miến là chúng không khớp với dấu ngoặc kép xung quanh chuỗi
// Single quote inside double quotes:
let answer1 = "It's alright";

// Single quotes inside double quotes:
let answer2 = "He is called 'Johnny'";

// Double quotes inside single quotes:
let answer3 = 'He is called "Johnny"';
// 2. Number
// a.Tất cả các số trong js đều được lưu trữ dưới dạng số thập phân(số thực)
// With decimals:
let x1 = 34.0;

// Without decimals:
let x2 = 34;

// b.Các số cực lớn hoặc cực nhỏ được viết theo dạng ký hiệu khoa học (mũ)
let y = 123e5; // 12300000
let z = 123e-5; // 0.00123
// c.Tất cả các số JavaScript đều được lưu trữ ở định dạng dấu phẩy động 64 bit. JavaScript BigInt là một kiểu dữ liệu mới ( ES2020 ) có thể được sử dụng để lưu trữ các giá trị số nguyên quá lớn để có thể biểu diễn bằng một số JavaScript thông thường.
let x = BigInt("123456789012345678901234567890");
// d.Boolean chỉ có thể có hai giá trị: truehoặc false.
// e.Mảng trong js được viết bằng dấu ngoặc vuông []
// Mảng có tên là cars chứa ba mục (tên xe)
const cars = ["Saab", "Volvo", "BMW"];
// f.Các đối tượng trong js được viết bằng dấu ngoặc nhọn {}
// Thuộc tính đối tượng được viết theo cặp tên:giá trị, phân tách bằng dấu phẩy.
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
// g.Trong JavaScript, một biến không có giá trị sẽ có giá trị là undefined. Kiểu cũng là undefined.
let car;
// h.Giá trị rỗng không liên quan gì tới undefined. Một chuỗi rỗng có cả giá trị hợp lệ và kiểu dữ liệu.
let cat = " "; // The value is "", the typeof is "string"
