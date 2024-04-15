//! LOOPS
//? 1) Verilmiş 3 rəqəmli ədədin rəqəmlərinin cəmini, hasilini və ədədi ortasını tapan proqram tərtib edin.
// function task1(eded) {
//     if(eded< 100 || eded>999){
//         return "3 rəqəmli ədəd daxil edin"
//     }else{
//         var firstNum = Math.floor(eded / 100); 
//         var secondNum = Math.floor((eded % 100) / 10);
//         var thirdNum = eded % 10; 
        
//         var cem = firstNum + secondNum + thirdNum;
//         var hasil = firstNum * secondNum * thirdNum;
//         var ortaReqem = secondNum;
        
//         return `Cem:${cem} Hasil:${hasil} Orta Reqem:${ortaReqem}
//         `;
//     }
// }
// var eded = prompt("3 rəqəmli ədəd daxil edin:");
// console.log(task1(eded));


//? 2) Verilmiş ədədin bütün bölənlərini console'a çıxaran proqram tərtib edin.
// function task2(eded) {
//     var arr = [];
//     for (var i = 1; i <= eded; i++) {
//         if (eded % i === 0) {
//             arr.push(i);
//         }
//     }
//     return arr;
// }
// var eded = parseInt(prompt("Bir ədəd daxil edin:"));
// console.log(task2(eded));


//? 3) Verilmiş ədədin bölənlərinin sayını tapan proqram tərtib edin.
// function task2(eded) {
//     var arr = [];
//     for (var i = 1; i <= eded; i++) {
//         if (eded % i === 0) {
//             arr.push(i);
//         }
//     }
//     return arr.length;
// }
// var eded = parseInt(prompt("Bir ədəd daxil edin:"));
// console.log(task2(eded));

 
//? 4) for loop'undan istifadə edərək aşağıdakı console'da aşağıdakı görüntünü alın  (0 x 0 = 0)
// for (var i = 0; i <= 10; i++) {
//     console.log(`${i} x ${i} = ${i*i}`);
// }


//? 5) for loop'undan istifadə edərək aşağıdakı console'da aşağıdakı görüntünü alın ( i    i^2   i^3)
// for (var i = 0; i <= 10; i++) {
//     console.log(`${i}  ${i*i}   ${i*i*i}`);
// }


//? 6) 0 - 100 arası yalnız sadə ədədləri console'da çap edin
// for (var i = 2; i <= 100; i++) {
//     var isPrime = true;
//     for (var j = 2; j <= Math.sqrt(i); j++) {
//         if (i % j === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(i);
//     }
// }


//? 7) 0 - 100 arası tək ədədlərin və cüt ədədlərin cəmini tapın
// let tekSayi =0
// let cutSayi =0
// for (let i = 0; i <100; i++) {
//     if(i%2==0){
//         tekSayi+=i
//     }else{
//         cutSayi+=i
//     }
// }
// console.log(`Tek ededlin cemi ${tekSayi}`);
// console.log(`Cut ededlin cemi ${cutSayi}`);



//! ARRAYS
//?  1) studentlərin ortalama score'nu yeni bir arrayda yığın
// const students = [
//     { name: "Ali", scores: [90, 85, 92] },
//     { name: "Davud", scores: [100, 100, 100] },
//     { name: "Mammal", scores: [75, 80, 85] },
//     { name: "Camil", scores: [90, 95, 85] },
// ];
// let arr = []
// for (let i = 0; i < students.length; i++) {
//     let total = 0
//     for (let j = 0; j < students[i].scores.length; j++) {
//         total+=students[i].scores[j]
//     }
//     arr.push(total/students[i].scores.length)
// }
// console.log(arr);


//? 2) webTechs arrayında olan elementlərin uzunluğu 4'dən böyük olanları yeni bir arraya yığın
// const webTechs = [
//     "HTML",
//     "CSS",
//     "JS",
//     "React",
//     "JS",
//     "Redux",
//     "Node",
//     "JS",
//     "MongDB",
// ];
// const arr = []
// for(let i = 0; i < webTechs.length; i++){
//     if(webTechs[i].length > 4){
//         arr.push(webTechs[i])
//     }
// }
// console.log(arr);


//? 3) product arrayindəki producların qiymətləri cəmini və ortalamasını tapın\
// const products = [
//     {
//       id: 1,
//       title: "Smartphone",
//       description: "A high-end smartphone with the latest features.",
//       price: 799.99,
//     },
//     {
//       id: 2,
//       title: "Laptop",
//       description: "Powerful laptop with a large screen and fast processor.",
//       price: 1299.99,
//     },
//     {
//       id: 3,
//       title: "Coffee Maker",
//       description: "An automatic coffee maker with a built-in grinder.",
//       price: 99.99,
//     },
//     {
//       id: 4,
//       title: "Headphones",
//       description: "Wireless over-ear headphones with noise-cancellation.",
//       price: 199.99,
//     },
//     {
//       id: 5,
//       title: "Smart TV",
//       description: "55-inch 4K Smart TV with streaming apps built-in.",
//       price: 699.99,
//     }
// ];
// let summ = products.reduce((acc,arr)=> acc+arr.price ,0)
// let summOrta = summ/(products.length)
// console.log(`Arrayindəki producların qiymətləri cəmi: ${summ} `);
// console.log(`Arrayindəki producların qiymətləri ortalamasi: ${summOrta} `);


//? 4) countries arrayində a ilə başlayıb a ilə bitən ölkələri tapın
// let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];
// let arr = []
// for (let i = 0; i < countries.length; i++) {
//     if(countries[i].charAt(0) == "A" && countries[i].charAt(countries[i].length - 1) == "a"){
//         arr.push(countries[i])
//     }
// }
// console.log(arr);


//? 5) # Verilmiş ədədin bölənlərinin sayını tapan funksiya tərtib edin.
// function findNumberOfDivisors(n) {
//     let arr = []
//     for (let i = 0; i < n; i++) {
//         if(n%i==0){
//             arr.push(i)
//         }
//     }
//     return arr
// }
// var eded = parseInt(prompt("Bir ədəd daxil edin:"));
// console.log(findNumberOfDivisors(eded));


//? 6) daxil edilmiş cümlə daxilində boşluqların sayini tapan function yazin
// function findSpaceCounts(str){
//     let count = 0
//     for(let i = 0; i < str.length; i++){
//         if(str[i] === " "){
//             count++
//         }
//     }
//     return count
// }
// var cumle = prompt("Bir cumle daxil edin:");
// console.log(findSpaceCounts(cumle));



//! FUNCTIONS
//? 1) printFullName adında funksiya yaradırsız və 2 parameter qəbul edir (firstName: "lorem", lastName: ipsum)
// function printFullName(firstName,lastName){
//     return `I am ${firstName} ${lastName}`
// }
// console.log(printFullName("jhon", "doe"));


//? 2) daxil edilən ədədin kvadratını return edən funksiya yazın
// function square(n) {
//     return n*n
// }
// var eded = parseInt(prompt("Bir ədəd daxil edin:"));
// console.log(square(eded)); 


//? 3) 4 funksiya yazın. Hər biri 2 parametr qəbul etsin və riyazi əməlləri yerinə yetirsin.
// function sum(a,b){
//     return a +b
// }
// function multiply(a,b){
//     return a*b
// }
// function subtruct(a,b){
//     return a-b
// }
// function divide(a,b){
//     return a/b
// }
// var eded1 = parseInt(prompt("Birinci ədəd daxil edin:"));
// var eded2 = parseInt(prompt("Ikinci ədəd daxil edin:"));
// console.log(sum(eded1, eded2));
// console.log(multiply(eded1, eded2)); 
// console.log(subtruct(eded1, eded2));
// console.log(divide(eded1, eded2)); 


//? 4) Elə bir funksiya yazın ki, 3 parametr qəbul etsin, 2 ədəd və 1 ədəd operator. Operatora uygun nəticəni return etsin.
// function calculator(a,b,operator){
//     if (operator === "+") {
//         return a + b;
//     } else if (operator === "-") {
//         return a - b;
//     } else if (operator === "*") {
//         return a * b;
//     } else if (operator === "/") {
//         return a / b;
//     } else {
//         return "Sevh operator! (+ - * /)";
//     }
// }
// console.log(calculator(2, 5, "+"));
// console.log(calculator(2, 5, "*")); 
// console.log(calculator(2, 5, "/")); 
// console.log(calculator(2, 5, "-")); 


//? 5) arrayın ilk və son elementinin cəmini return edən function yazın
// const getSum = (array) => {
//     return (array[0] + array[array.length-1] )
// };
// console.log(getSum([1, 2, 3]));
// console.log(getSum([80, 5, 58, 17, 100])); 
// console.log(getSum([15, -500, 0, 50])); 


//? 6) arrayın bütün elementlərinin cəmini qaytaran funksiya yazın
// const toplama = (arr) => {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum+=arr[i]
//     }
//     return sum
// }
// console.log(toplama([1, 2, 3]));
// console.log(toplama([80, 5, 58, 17, 100])); 
// console.log(toplama([15, -500, 0, 50]));


//? 7) arrayin daxilindəki max elementi return edən funksiya yazın
// const maxElement = (arr) => {
//     return Math.max(...arr);
// }
// console.log(maxElement([1, 7 , 2, 3]));
// console.log(maxElement([80, 5, 58, 17, 100])); 
// console.log(maxElement([15, 344, -500, 0, 50]));


//? 8) filterEmployees adında funksiya yaradın, parameter kimi bir array alsın və salary > 60000 olan objectləri return etsin
// const employees = [
//     { name: "Jamil", salary: 50000, department: "IT" },
//     { name: "Jale", salary: 60000, department: "HR" },
//     { name: "Bayram", salary: 55000, department: "IT" },
//     { name: "Sahil", salary: 75000, department: "HR" },
//     { name: "Maryam", salary: 65000, department: "IT" },
//     { name: "Elnara", salary: 80000, department: "HR" },
//     { name: "Davud", salary: 70000, department: "IT" },
// ];
// function filterEmployees(arr){
//     let arrey = []
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i].salary > 60000){
//             arrey.push(arr[i])
//         }
//     }
//     return arrey
// }
// console.log(filterEmployees(employees));


//? 9) verilmiş ədədin array'in elementləri arasında olub olmadığını müəyyən edən function yazın
// function findElement(arr, number) {
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] == number){
//             return true
//         }else{
//             return false
//         }
//     }
// }
// console.log(findElement([33, 28, 45, 17], 45)); // 45 array elemenlərindən biridir
// console.log(findElement([33, 28, 45, 17], 33)); // 38 array elementləri arasında yoxdur
// console.log(findElement(["a", "g", "y", "d"], "d")); // d array elementərindən biridir


//? 10) task: sampleNews  mətnində olan boşluqların sayını təyin edən proqram yazın.
// let sampleNews = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen.`;
// function space(text) {
//     let spaceCount = 0;
//     for (let i = 0; i < text.length; i++) {
//         if (text[i] == " ") {
//             spaceCount++;
//         }
//     }
//     return spaceCount;
// }
// console.log(space(sampleNews)); 


//? 11. Daxil edilən iki arrayi birləşdirən funksiya yazın.
// function concatArray(arr1, arr2) {
//     return arr1.concat(arr2);
// }
// const arr1 = [1,2,3,4,5]
// const arr2 = [6,7,8,9]
// console.log(concatArray(arr1,arr2))


//? 12. Bir funksiya yazın 2 parametr qəbul etsin. 2 ci parametr 1ci parametr qədər array-ə yazılsın.
// function array_filled(length,element){
//     let arr = []
//     for (let i = 0; i < length; i++) {
//         arr.push(element)
//     }
//     return arr
// }
// console.log(array_filled(6, 0));


//? 13. Bir funksiya yazın , 3 parametr qəbul etsin.Birincisi array olsun ikinci və rəqəm arraydəki elementin hal-hazırda olduğu mövqeni,
//? 3cü isə hansı mövqeyə hərəkət etdirməli olduğunuzu göstərsin.Beləliklə arrayın elementlərini bir yerdən başqa yerə hərəkət etdirin.
// function move(arr, fromIndex, toIndex) {
//     let temp = arr[fromIndex];
//     arr.splice(fromIndex, 1);
//     arr.splice(toIndex, 0, temp);
//     return arr;
// }
// console.log(move([10, 20, 30, 40, 50], 0, 2));


//? 14. Bir funksiya yazın 2 parametr qəbul etsin, birinci başlanğıcı ikinci sonu göstərsin. Siz isə arada qalan rəqəmləri doldurun.
// function range(start, end) {
//     let result = [];
//     for (let i = start; i <= end; i++) {
//         result.push(i);
//     }
//     return result;
// }
// console.log(range(1, 4));
