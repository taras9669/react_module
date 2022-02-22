import {IFly} from "./fly.interface";

const fly: Partial<IFly> = {mission_name: "Starlink-15 (v1.0)"}
console.log(fly.mission_name)




const user:{name:string, age:number, gender:string} = {
    name:"Max",
    age:18,
    gender:'male'
}

function sum(a:number,b:number):number{
    return a+b
}
function showSum(a:number,b:number){
    console.log(a + b);
}

function incAge(someUser, inc:number):object{
    someUser.age+=inc
    return someUser
}

console.log(sum(1, 2));
showSum(2,3)
incAge(user, 2)