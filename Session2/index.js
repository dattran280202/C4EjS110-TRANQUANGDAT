
console.log('The var statement declares a variable. Variables are containers for storing information. Creating a variable in JavaScript is called "declaring" a variable');
console.log('const dùng để khai báo một hằng số - là một giá trị không thay đổi được trong suốt quá trình chạy');
console.log('Phạm vi của biến số sử dụng var là phạm vi hàm số hoặc bên ngoài hàm số, toàn cục, Phạm vi của biến số sử dụng let là phạm vi một khối, xác định bởi cặp {}');
console.log('const hoạt động gần giống như let nhưng khi gán 1 giá trị cho biến const bạn không thể gán lại nó cho giá trị mới');
console.log('Đối tượng Boolean trong JavaScript là một đối tượng đại diện cho giá trị trong hai trạng thái: true hoặc false');
console.log('kết quả của boolean sẽ trả về là true khi biến đó có chứa giá trị và trả về là false khi biến đó không chứa giá trị ');
for(let i = 0 ; i<=7 ; i++){
console.log(i);
}


let x1 = prompt ('Enter a number');
for( let i =0 ; i<x1 ;i++){
    console.log(i);
}
let x2 = prompt ('Enter c ');
let x3 = prompt ('Enter n ');
for( let i = x2;i<x3;i++  ){
    console.log(i);
}
let x4 = prompt ('Enter c');
let x5 = prompt ('Enter n');
for(let i = x3 ; i<x2 ; i++ ) {
    console.log(i);
}
let x6 = prompt ('Enter a number ');
alert(`the factorial of ${x6} is ${x6*x6*x6*x6 }`);
let age = prompt ( 'how old are you ');
if (age<14){
    alert ('you are not old enough to view this content');
}else{
alert('you can view this content');
} 
let number = prompt ( ' Enter the number');
if(number<4){
alert ('lower half of 9');
}    
else if (number>4){
alert ('higher half of 9');
}
let x7 = prompt ('n=?');
let x8 = prompt ('x=?');
if(x7/2>x8){
    alert(`${x8} is in lower half of ${x7}`);
}
else if (x7/2<x8){
alert(`${x8} is in higher half of ${x7}`);
}
let x10 = prompt('Enter a number');
let i2 = x10/2 
if(i2=0){
    alert(`${x10} is even number`);
}  else{
    alert(`${x10} is odd number`);
} 
let weight = prompt('Your weight in kg ?');
let x12 = prompt('Your height in cm ');
let i1 = weight / ((x12/100)*(x12/100));
alert(`Your BMI is ${i1}`);
if(i1<16){
    alert('Severely Underweight');
}else if(16<i1<18.5){
    alert('Underweight');
}else if(18.5<i1<25){
    alert('Normal');
}else if(25<i1<30){
    alert('Overweight');
}else if(i1>30){
    alert ('You are obese');
}
let x15 = prompt('Enter the total number of ');
let x15 = i3 +i4 ;
if(i3 > i4){
    console.log(`${i3} L`);
    console.log(`${i4} H `);
} else{
    console.log(`${i3} H`);
    console.log(`${i4} L `); 
}
let n1=prompt('Enter the number of 1 and 0');
for(let i=0;i<n1;++i ){
if(i%2){
    console.log("1");
}else{
    console.log("0");
}
}








