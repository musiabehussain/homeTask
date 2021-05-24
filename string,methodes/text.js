//methodes of string
// string.big

// let nmae = 'musiabe hussain';
// console.log(nmae.big());
// console.log(nmae.small());
// console.log(nmae.fontsize(7));

//String.prototype.anchor(),

//confussion


// let name = 'nadeem abass';

// document.write(name.anchore());



//String.prototype.at()


// const sentence = 'The quick brown fox jumps over the lazy dog.';

// let index = 5;

// console.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`);
// // expected output: "Using an index of 5 the character returned is u"

// index = -4;

// console.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`);
// // expected output: "Using an index of -4 the character returned is d"



//String.prototype.blink()



// let newString ='hay! me are a string yet';
// document.write(newString.blink() + '<br>');
// document.write(newString.bold() + '<br>');
// document.write(newString.italics() +'<br>');
// document.write(newString.strike() + '<br>');




//String.prototype.charAt()
// it is some how same with .at
// let newName = 'musiabe hussain .com';
// let index = 3;
// document.write(`this ia index number ${index} ${newName.charAt(index)} `);


//String.prototype.charCodeAt()
// it is use to finde the code of cheracter which is present in string

// let sentence ='no way me are musiabe hussain';
// let insex =5;
// document.write(`the cher code ${sentence.charCodeAt(insex)}  is equall to ${sentence.charAt(insex)}`);



//String.prototype.codePointAt()

///it is spacific for icons code




//String.prototype.concat()


// let firstName = 'nadeem';
// let lastName = 'hussain';
// document.write(firstName .concat('',      lastName));
// document.write(firstName.concat('', firstName));



//String.prototype.endsWith()

// let name = 'ali is';
// document.write(name.endsWith('is',10));
// document.write(name.endsWith('?'));



//String.prototype.fixed()
// it make ann html tt tag





//String.prototype.fontcolor()
// it change the color of fonts in string
// let name = 'musiabe hussain';
// document.write(name.fontcolor('red'));


// String.prototype.includes()
//it shows the value which is present in string if it is present it is true rathe false


// let nmae = 'musiabe hussain is goog';
// let word = 'is';
// document.write(nmae.includes(word));


//String.prototype.indexOf()

// let name = 'hussain is good';
// let news = 'is';

// document.write(name.indexOf(news));



//String.prototype.link()
// let link = 'hussain.como';
// document.write(link.link());


//String.prototype.localeCompare()

// not cleare.................................
// /////////////////////////////////////////////////////////////////////////?????????????????????????????????????????????????????????????????????????????




//String.prototype.match() 


// incomplite

// let pera = 'theb  group of compnies';
// const raw = /[a-z]/ g;
// const found =(pera.match(raw));
// document.write(found);


//String.prototype.padEnd()
// let string = 'musiabe hussain';


// document.write(string.padEnd('22','+'))



//String.prototype.padStart()
// let string = 'musiabe hussain';


// document.write(string.padStart('22', '+'))

//String.raw()
//...........................................................................................................................


//String.prototype.repeat()



// let name = 'musaibe hussain ';

// console.log(name.repeat(100));

//String.prototype.replace()


// let p = 'the grate name of hussain';

// document.write(p.replace('hussain','abass'));




//String.prototype.replaceAll().



// let p ='mhsiabe hussain web developer';
// document.write(p.replaceAll('developer','google'));



//String.prototype.search()


// let n = 'hussain .com';
// document.write(n.search('a'));



// const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// // any character that is not a word character or whitespace
// const regex = /[^\w\s]/g;

// console.log(paragraph.search(regex));
// // expected output: 43

// console.log(paragraph[paragraph.search(regex)]);
// // expected output: "."


//String.prototype.split()



// let n = 'musiabe is hussain';

// let cn=n.split('');
// document.write(cn[3]);




//String.prototype.substr()
//   let nam = 'hussain . com';
//   console.log(nam.substr(1))