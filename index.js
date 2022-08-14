
function writeCards(names, event){
    const newArray=[];
for(let i=0;i<names.length;i++){
    const newMessage=`Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    newArray.push(newMessage);
    }
    return newArray;
        
}
console.log(writeCards(["Ada", "Brendan", "Ali"], "birthday"));

//while loop
function countDown(){
    let countDown=10;
    while (countDown >= 0){
        console.log(countDown--);

    }
}