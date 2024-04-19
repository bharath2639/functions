function byAdding() {
    let number1 = 55;
    let number2 = 5625;
    let adding = number1 + number2;
    console.log(adding); 
}

byAdding()   //calling function

function byAddingString() {
    let string1 = "bharath";
    let string2 = " kumar";
    let addingstring = string1 + string2;
    console.log(addingstring); 
}

byAddingString() 


// expressions function:

let dataStored = function(){
    let num1 = 556;
    let num2 = 5625;
    let add = num1 + num2;
    console.log(add); 
}

dataStored()

let data2 = function(){
    let multi = 55;
    let multi2 = 152;
    let multiply = multi * multi2;
    console.log(multiply);
}

data2() // declared varible will be the fuction calling


// Arrow function

let data3 = () => {
    let division = 555;
    let divide = 152;
    let divisionTwo = division / divide;
    console.log(divisionTwo);
}

data3() //calling function



let bioData = (fName,lName,age) => {
    return `My name is ${fName} ${lName} and my age is ${age}`;
}

console.log(bioData("bharath","kumar",25)); //argument passing in the calling function 


let conditionSupply = (n,n2,operator) => {
    // let n = 55;
    // let n2 =100;
    if(operator==='+'){
        return `the sum of ${n} ${operator} ${n2} = ${n} + ${n2}`
    }else if(operator=='/'){
        return `the division of ${n} ${operator} ${n2} is =${n} / ${n2}`
    }
}



console.log(conditionSupply(55,100,'/'));


let object = {
    fName : "bharath",
    lName : "kumar",
    rollNumber : 52521,
    moreDetails :{
        favourite : ["food","cars","movies"]

    }
}

// console.log(object);

let objectDetails = (personData) => {
    return `${personData.lName}`;

}

// objectDetails(object)
console.log(objectDetails(object));


let printPrimeNumber = (number) =>{
    if(number<2){
        return false;
    }

    for(n=2; n<=Math.sqrt(number); n++){
        if(number%n === 0){
            return false;
        }
        
    }
    return true;
}

console.log(printPrimeNumber(2));































