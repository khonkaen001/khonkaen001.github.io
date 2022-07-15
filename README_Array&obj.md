# Array

อาเรย์ (Array) คือ ข้อมูลรูปแบบหนึ่งที่สามารถเก็บข้อมูลประเภทเดียวกันแบบเป็นลำดับได้

โดยข้อมูลแต่ละตัวจะเรียกว่า Element และแต่ละ Element จะมีหมายเลขกำหนดลำดับตำแหน่ง คือ Index เช่น

```js
const number1 = "1";
const number2 = "2";
const number3 = "3";
```

เราสามารถเก็บข้อมูลดังกล่าวไว้ในตัวแปรเดียวได้โดยการทำให้ข้อมูลเป็น array ดังตัวอย่าง

```js
const number = ["1", "2", "3"];
```

ต่อ String โดยใช้ concat() Method

```js
let text1 = "kong";
let text2 = "rang";
let result = text1.concat(text2);
```

การคูณค่าใน Array โดยใช้ Loop for

```js
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = [];

for (let i = 0; i < number.length; i++) {
  result.push(number[i] * 2);
}

console.log(result)  //[2,4,6,8,10,12,14,16,18,20]
```
