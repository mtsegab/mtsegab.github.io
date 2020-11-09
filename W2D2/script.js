'use strict'

String.prototype.filter = function(temp){
    return this.replace(temp ,"");
}

//**************************************************** */
  //This part is included for test
  //part 1
  console.log("Input: This house is not nice");
  console.log("Output: This house is not nice".filter('not '));

//**************************************************** */

Array.prototype.bubbleSort = function bubbleSort() {
    let swapp;
    let len = this.length - 1;
    const sortedArray = this;
    do {
      swapp = false;
      for (let i = 0; i < len; i++) {
        if (sortedArray[i] > sortedArray[i + 1]) {
          const temp = sortedArray[i];
          sortedArray[i] = sortedArray[i + 1];
          sortedArray[i + 1] = temp;
          swapp = true;
        }
      }
      len--;
    } while (swapp);
    return sortedArray;
  };


//**************************************************** */
    //This part is included for test
  //part 2
  let tempArray1 = [8,10,4,-2,-4,0]
  let tempArray2 = [8,10,4,-2,-4,0]
  console.log(tempArray1);
  console.log(tempArray2.bubbleSort());
  //**************************************************** */

function Person (myname){
    this.name = myname;
}

function Teacher(name, subject){
    Person.call(this, name);
    this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.teach = function(){
    console.log(this.name + ' is now teaching ' + this.subject);
}

//**************************************************** */
    //This part is included for test
  //part 3.1
  const biden = new Teacher('Biden', 'WAP');
  biden.teach();
  
  //**************************************************** */

  
  //**************************************************** */
  //part 3.2

// const person = {
//     name: '',
//     setName: function(newname){
//         this.name = newname;
//     }
// }

// const teacher = Object.create(person);
// teacher.setSubject = function(subject){
//         this.subject = subject;

// }

// teacher.teach = function(){
//     console.log(this.name + 'is now teaching ' + this.subject);
// }


function person(name){
    return{
        name:name
    }
}

function teacher(name,subject){
    let myname = person(name).name;
    return{
        name: myname,
        subject: subject,
        teach: function(){
            console.log(this.name + 'now is teaching ' + this.subject);
        }
    }
}

//**************************************************** */
   //This part is included for test
  //part 3.2
  const trump = teacher('Trump', 'WAP');
  trump.teach();
  
  //**************************************************** */


//**************************************************** */
//Part 4

function Person4(name, age){
    this.name = name;
    this.age = age;
}

Person4.prototype.greeting = function(){
    console.log('Greetings, my name is' + this.name + 'and I am ' + 
    this.age + 'years old.');
}

Person4.prototype.salute = function(){
    console.log('Good morning!, and incase I dont see you, ' 
    + 'good afternoon, good evening and good night!');
}

function Student4(name, age, major){
    Person4.call(this, name, age);
    this.major = major;
}

Student4.prototype = Object.create(Person4.prototype);

Student4.prototype.greeting = function(){
    console.log('Hey, my name is' + this.name + ' and I am studying' + this.major + ',')
}

function Professor4(name, age, department){
    Person4.call(this, name, age);
    this.department = department;
}

Professor4.prototype = Object.create(Person4.prototype);
Professor4.prototype.greeting = function(){
    console.log('Good day, my name is' + this.name + 'and I am in the'
    + this.department + 'department.');
}

//**************************************************** */
   //This part is included for test
  //part 4
const s1 = new Student4('Kebede', 30, 'WAP');
s1.greeting();
s1.salute();

const prof1 = new Professor4('Abebe', 35, 'CS');
prof1.greeting();
prof1.salute();






