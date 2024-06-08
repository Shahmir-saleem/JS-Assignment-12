// TASK-3


let sundays = 0
for(let i = 2024 ; i < 2050 ; i++){
let compl =(new Date(i,0,1));
console.log(compl.getDay());
if(compl.getDay() === 0){
    console.log(i);
}
}
