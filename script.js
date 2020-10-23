const person1 = {
    name: 'Nelu',
    age: 30,
    sayHello: function(){
        console.log(`Hello ${this.name}`);
    }
}
console.log(person1.sayHello());

let instructor = {
    name: 'Marc',
    age: 30,
    hasDog: true,
    from: 'Barcelona',
    dog: {
        name: 'lulu',
        age: 4,
        isCrazy: true
    },
    hobbies: ['ski', 'surf', 'climbing']
}

console.log(instructor);

let userChoice = {
    sum: (num1, num2) => {
        return num1 + num2;
    },
    multiply: (num1, num2) => {
        return num1 * num2;
    },
    divide: (num1, num2) => {
        return num1 / num2;
    }    
}

console.log(userChoice.sum(5, 8));





