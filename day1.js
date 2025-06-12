// console.log("hello word");
// alert("welcome")




// let name = 'oge';
// console.log(name)

// color = null;
// console.log(color);

// let person = {
// 	name: 'Alice',
// 	age: 43,
// 	isstudent: true

// };

// console.log(person)
// console.log(person.name)
// console.log(typeof name);
// console.log(typeof color);
// console.log(typeof person);

// let fruit=["apple", "banana", "cherry"];
// console.log(fruit)

// function greet(name) {
// 	console.log(`hellow, ${name}!`)
// }
// greet("same"); 

// let a =10;
// let b =5;

// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)
// console.log(a**b)
// let x=10;
// x +=5; 
// console.log(x)


// let c=10;
// c -= 5;
// console.log(c)


// let d=10;
// d *=5;
// console.log(d)

// let e=10;
// d /=5;
// console.log(e)

// let f=10;
// f %=6;
// console.log(f)


// let z =8
// z +=9
// console.log(z)









// console.log(5 =="5");
// console.log(5 ==="5");
// console.log(5 !="5");
// console.log(5 !=="5");
// console.log(5 >"5");
// console.log(5 >="5");
// console.log(5 <"5");
// console.log(5 <="5");



// const g = true;
// const h = false;

// console.log(g || b);
// console.log(false || b);
// console.log(5 > 3 || 10 > 20);
// console.log(5 < 3 || 10 > 20);


//  // 3.logical not(!)
// const i =true;
// const j =false;

// console.log(!i);
// console.log(!j);
// console.log(!(5 > 3));

// // <hr> conditional<hr>
// // 1. if statement

// // let age = 28;
// // if (age >= 18) {
// // 	console.log("you are an adult.");
// // }

// let age = 10;

// if (age >= 18) {
// 	console.log("you are an adult.");
// } else if ( age >=13 ) {
// 	console.log( "you are a tineger");
// } else {
// 	console.log( "you are still a child")
// }




// let day = 2;
// let dayname;
// switch(day){
// case 1:

// 	dayname = "monday";
// 	break;

// case 2:

// 	dayname = "tuesday";

// 	break;
// case 3:
// 	dayname = "wednesday"

// 	break;
// case 4:
// 	 dayname = "thursday"
// 	 break; 
// case 5:

// 	dayname = "friday"
// 	break;
// default:
// dayname = "weekend";

// }

// console.log( dayname)




// for (let i = 0; i < 5; i++) {
// 	console.log("number: " + i);
// }


// let l =0;
//  while(l < 5) {
// console.log("number: " + l); 
//  l++;
//  }



// let m = 0;
// do {
// 	console.log("Number: " + m);
// 	m++;
// } while (m < 5);






// function greet(name, age) {
// 	console.log("hellow, world! " + name  + age);
// }
// greet("case ", 75);






// function add(a, b)  {
// 	return a + b;
// }
// let result = add(6,9)
// console.log(result)

// function sub(m, n) {
// return m - n;
// }
// let answer=sub(8,5)
// console.log(answer)



// let fruits = ["apple", "banana", "cherry"];
// console.log(fruits)
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])

// fruits[1] ="carrot";
// console.log(fruits[1])

// fruits.push("date");
// console.log(fruits)

// console.log(fruits.pop())
// console.log(fruits.shift())

// console.log(fruits.unshift("apricote"))
// console.log( "apricote")

// let person = {
// 	firstname: "john",
// 	lastname: "doe",
// 	age: 30,
// 	isstudent:false

// };
// console.log(person)



// console.log(person.age)
// person.age=31
// console.log(person.age)
// let names = {
// 	firstname: "samuel",
// 	lastname: "emeka",
// 	country: "uh",

// }
// console.log(names.country)


// let message="hellow, world!";
// console.log(message.length);
// console.log(message[0]);
// 	console.log(message[6]);

// console.log(message.toUpperCase())
// console.log(message.toLowerCase())
// console.log(message.charAt(5))
// console.log(message.substring(2,8))
// console.log(message.replace("hellow", "mantleme"))
// console.log(message.trim())
// console.log(message.split(" "))


// console.log(Math.sqrt(2))
// console.log(Math.pow(4,2))
// console.log(Math.round(4.3))
// console.log(Math.floor(7.9))

// console.log(Math.ceil(7.8))

// console.log(Math.max(4,7,8))
// console.log(Math.random());

const para = document.getElementById("a")
para.textContent = 'see it now bbbbbb'


const p = document.getElementsByClassName("a")

const r = document.getElementById("B")
r.innerHTML= ' <strong> ANY TEVThere </strong>'

const button = document.getElementById('see');

button.style.backgroundColor = 'red';
button.style.color= 'blue';


const list = document.getElementById('list');
const newitem = document.createElement('li');
newitem.textContent ='item 2';
list.appendChild(newitem)

const list3 = document.getElementById('me');

list.removeChild(list3);

const sheet=document.getElementById('mybutton');
sheet.addEventListener('click', function() {
	document.getElementById('message').textContent='button was clicked';
});

function clickhandler(){
	alert('button clicked');
}

const newbutton=document.getElementById('newbutton')
newbutton.addEventListener('click', clickhandler);
newbutton.removeEventListener('click', clickhandler);
