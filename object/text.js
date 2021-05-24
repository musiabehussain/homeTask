


let array1 = {
     firstName: 'ali',
     lastName: 'hussain',
     age: 22,
};
let nunmber = {
     a: 1,
     b: 2,
     c: 3,
     d: 4,
     e: 5,

};
//Object.isExtensible()
nunmber[0],'ali';

console.log(Object.isFrozen(nunmber));

// Object.freeze(nunmber);
// console.log(Object.isFrozen(nunmber));





//Object.isFrozen(),

// it determine if an object is frozen









// Object.isSealed() 

// not be importent i think





// Object.keys() 
// it is some how same with object.proprtynmae
// its make an arry from object keys
// console.log(Object.keys(nunmber));





//Object.preventExtensions()
// const object1 = {
// }
// Object.preventExtensions(object1);
// try {
//      Object.defineProperty(object1, 'property', {
//           value: 11111
//      });
// } catch (e) {
//  console.log(e);
// }











    //Object.seal()


//     let new1 ={
//          proer:12,


//     };
// Object.seal(new1);
// new1.proer =11;
// console.log(new1.proer);





    //Object.getPrototypeOf()

// const proper={};
// const object1 = Object.create(proper);
// console.log(Object.getPrototypeOf(object1)  ===proper);



//Object.getOwnPropertyNames();

// it make an array from object keys,

// console.log(Object.getOwnPropertyNames(nunmber));



    // object.GetOwenPropreetis

// let dis = Object.getOwnPropertyDescriptor(array1,  'lastName');
// console.log(dis.configurable);
// console.log(dis.value);






























      // object methodes 
          // 1 object.assign
//           let target = { a: 1, b: 2 };
//           let source = { b: 3, c: 4 };
//           let returntarget = Object.assign(target, source);
//           console.log(returntarget);
//           // 2 create

//      const person = {
//                isHuman: false,
//                printIntroduction: function () {
//                     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//                }
//           };

//           const me = Object.create(person);

//           me.name = 'Matthew'; 
//           me.isHuman = true; 
//           me.printIntroduction();
//           //create

//           let area ={
//                hoper:false,
//                targetew: function () {
//                     console.log(`my area is ${this.name}.is it ${this.hoper} oh!!!!  yes true  , her cher is ${this.cher}`);

//                }
//           };
//          let  you= Object.create(area);
//           you.name = 'good';
//           you.hoper = true;
//           you.cher = 'bed';
//           you.targetew();


//        // object.defineproperties
//        let obj1={};
//        Object.defineProperties(obj1,{
//             property1:{
//                //   name:'ali',
//                //   age:27,
//             },
//             property2:{},

//        });
// console.log(obj1.property1);

// // object. entries
// let object1={
//      a: 'son',
//      b:30,

// }
//      for (const [key, value] of Object.entries(object1)) {
//           console.log(`${key}: ${value}`);
//      };
//      // object.entries
//      let apple = {
//           color:'red',
//           weaght:12,
//      }

//      for (const [key,value] of Object.entries(apple)){
//           console.log(`${key}:${value}`);
//      };
// // object.freeze
// let obj2 ={
//      numb:120,

// }
// Object.freeze(obj2);
// obj2.numb=12;
// console.log(obj2.numb);

// // object.fromEntries()
// const myobj = new Map([


//      ['nmae','ali'],
//      ['age',30],

// ]);
// const newObj = Object.fromEntries(myobj);
// console.log(newObj);

// object.getOwnpropertyDiscriotion

// let name = {
//   proper1 :12, 
// };
// let display1 = Object.getOwnPropertyDescriptor(name, 'proper1');
// console.log(display1 .configurable);
// console.log(display1.value);
// // object.getOwnpropertyDiscriotions

// let names = {
//      proper11: 18,
// };
// let display11 = Object.getOwnPropertyDescriptors(names);
// console.log(display11.writable);
// console.log(display11.proper11.value);
