// // Functions in Javascript
// // Syntax: Function FunctionName(){}
// // 1.Anonymous Function
// // function (){
// //     return 0;
// // }
// // 2.Named Function

// function demo(a,b){
//     console.log(a+b);
// retun a;
// }
// let res=demo(10,20);
// console.log(res);
// // demo(10,20)

// // 3.Function with expression:
// let foo=function(a,b){
//     console.log("HI");
// }
// foo(200,500);

// // 4.arrow function
// let sum=(a+b)=>{
//     console.log(a+b);
//     return a;
// }
// let res=sum(100,200);
// console.log(res);

// //let arr=(a,b)=>a+b;
// // let arr=()=>{
//     // return "HI"
// //}
// // console.log(arr(10,2o));


// let check=a=>a>30;
// console.log(check(20));

// //5.HOF(HIGH ORDER FUNCTION)

// let HOF=function(a,b,cb){
//     console.log(a);
//     console.log(b);
//     console.log(cb);//call back function
// }
// HOF("str", true, function(){
//     console.log("HI");
// });

// let ar=["string", true, 2n, null,undefined,[10,20],e=>e];
// // key():

// let keyRes=ar.keys();
// console.log(keyRes);

// for(let index of keyRes){
//     console.log(index);
// }

// //values{}:

// let valRes=ar.values();
// console.log(valRes);

// for(let val of valRes){
//     console.log(val);
// }

// // entries():

// let entRes=ar.entries();
// console.log(entRes);

// for(let entries of entRes){
//     console.log(entries);
// }

// OBJECTS IN JAVASCRIPT:
// In object we can store any datatype, value inside object
// In JS everything is Object 

// 1. Literal Way:

let emp={
    name:"Swaraj", ID:139396, Gender: "Male" , Number:9912 , skills: ["js","react","node"], arr:()=>{
        console.log("This is Arrow Function");
    },
    nf:function(){
        return "This is Normal Function";
    },
    isDeveloper:true,
    address:{
        doorNo: 340,
        area:"Thane West",
        pincode:400605,
        Nested:{
            nest:"I am Nested",
        }
    }
}
console.log(emp);
console.log(emp.name);
console.log(emp.hhh);

let skillAr=emp.skills;
skillAr.forEach((val, index)=>{
console.log(val, index);
})

emp.arr();
console.log(emp.nf());
console.log(emp.address.Nested.nest);

console.log(emp["isDeveloper"]);
console.log(emp["id"]);
console.log(emp["address"]["area"]);


//add keys and valyes:

emp.designation="SWE";
console.log(emp);
let h="Hobbies";
emp[h]=["playing"];
console.log();

//update the values:
emp.ID=2000;
console.log(emp.ID);

emp["name"]="virat"
console.log(emp.name);
//1.delete the keys and values:

delete emp.arr;
console.log(emp);

delete emp["nf"];
console.log(emp);

//2.using object constructor:

let obj=new Object();
// console.log(obj);

obj.name="sonal";
obj.id=1234;
obj["designation"]="SWE";
console.log(obj);