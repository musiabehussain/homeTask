
     // array abd there methodes



     // let array1 = [34, 44, 10, 12, 14, 16, 18, 20];
     // let Array2 = ['ali', 'rashid', 'nadeem'];
     // let animals = ['cow', 'dog', 'lion'];
     // let color = ['red', 'green', 'pink', 'yelllow'];
     // let fruit = ['apple', 'pineapple', 'watermillon'];
     // let mobiles = ['oppo', 'samsung', 'apple', 'Qmobile'];
          // let areas = ['hoper', {1: "goshosahll,2:holshall,3:broshall", }, 'nagar', 'danyour', 'gilgit'];
          // let months = ['jun', 'march', 'aprail', 'may', 'june'];
          // let names = ['ali', 'nadeem', 'zhid', 'sabir', 'noshad', 'kazim', 'danish'];


          // //bollion
          // let num = [1, 2, 3, 4];
          // let numcopy = [1, 2, 3, 4];


          // // console.log(areas.concat(mobiles));
          // console.log(array1.concat(Array2));
          // console.log(array1.length);
          // console.log(color.pop());
          // console.log(fruit.push('banana'));
          // console.log(fruit);
          // console.log(animals.shift());
          // console.log(animals.unshift('tiger'));
          // console.log(Array2.includes('ali'));
          // console.log(Array2.includes('rohan'));
          // console.log(array1.indexOf(12));
          // console.log(array1.reverse());
          // console.log(Array2.slice(2));
          // console.log(Array2.slice(1, 3));
          // console.log(months.splice(1, 0, 'feb'));
          // console.log(months);
          // console.log(names.sort());
          // console.log(array1.sort());
          // // confussion
          // console.log(num === numcopy);



          // // object and there methodes


          // //1 assighn method;
          // let obj1 = {a: 1, b: 2, c: 3 };
          // let obj2 = {b: 11, c: 22 };
          // let bojassine = Object.assign(obj1, obj2);
          // console.log(bojassine);






          /// array and there methodes    explaned herer yet,,,,
          let fruit = ['banana', 'apple', 'mango', 'pear'];
          let num = [1, 2, 3, 4, 5, 6, 7, 8];
          let strinum = [12, 23, 45, 66, 89, 99, ['ab', 'cd', 'ef,']];
          let animals = ['dog','cat', 'lion', 'cat', 'ship', 'donkey', 'monkey', 'bear'];

          // result on console start fromr hare.

          // 1 concat.......................
          console.log(fruit.concat(num));

          // copywithin----------------------
          console.log(animals);
          console.log(animals.copyWithin(2, 5, 6));

          //entires----------------
          const inter = num.entries();
          console.log(inter.next().value);
          console.log(inter.next().value);
          console.log(inter.next().value);
          console.log(inter.next().value);

          // evey..................
          const isgrater  =(currentValu)=> currentValu < 41;
          console.log(num.every(isgrater));
          // fill
          console.log(num.fill(6,5,7));
          // filter
          console.log(animals.filter( word => word .length !=3));
          //find
          console.log(strinum.find(element => element < 99));
          console.log(strinum.find(element => element > 50));
          // findindex
          console.log(strinum.findIndex(element => element < 12));
          //flat
          console.log(num.flat(3));
          //for each
          animals.forEach(element => console.log (element));
          num.forEach(element => console.log(element));
          // creating array from string
          console.log(Array.from('musiabe'));
          //include
          console.log(num.includes(1));
          console.log(animals.includes('cat'));
          //indexof
          console.log(animals.indexOf('cat',2));
          console.log(animals);
          // diffrance of indexof and findindex is

          console.log(num.findIndex(element => element > 4));
          console.log(num .indexOf(434));
          // is array

          console.log(Array.isArray(['footer','badisah']));
          console.log(
          Array.isArray('google'));

          //joins.....................'
          console.log(animals.join());
          console.log(animals.join('  , + ali'));
          console.log( animals.join(' '));
          // key================
          let day = Object.keys(animals);
          console.log(day);

          console.log(animals.lastIndexOf('cat',2));
          console.log(animals.lastIndexOf('dog',3));
          console.log(animals.lastIndexOf('car'));

          //map =================
          //
          console.log(num.map( x => x *2));
          console.log(num .map(x => x + 2));
          // array .of==========
          console.log(Array.of(2,3,4,5));
          console.log(animals.pop());
          console.log(animals);
          // shift
          console.log(animals.shift());
          console.log(animals);
          //push
          console.log(animals.push('ali'));
          // unshift
          console.log(num.unshift(100));
          //to string
          console.log(num.toString());
          //splice
          // add and remove element from array
          animals.splice(2,3,'sunyleoane');
          console.log(animals);
          console.log(animals.splice(3,4,'rought'));
          //reduce
          const nms  = (accumulater, currentValu) => accumulater + currentValu;
          console.log(num.reduce(nms));
          //reverse
          const rev = num.reverse();
          console.log(rev);
          // array of
          console.log(Array.of(3,5,7,9,11,13,15));















