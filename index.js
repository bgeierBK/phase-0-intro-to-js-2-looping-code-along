function writeCards(names,event){
    let messages= []
    for (let i=0; i <names.length; i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    debugger;
    return messages
}

writeCards(["Alexander", "Nicklas", "Tom"], "Stanley Cup celebration");

function countDown(n){
    let i= n
    while (i>=0){
        console.log(i--)
    }
}
