let number=[1,2,3,4,5,6,7,8,9,10]
for(let onenumber of number){
    let ordinalEnding:string
    if (onenumber===1){ordinalEnding="st"}
    else if(onenumber===2){ordinalEnding="nd"}
    else if(onenumber===3){ordinalEnding="rd"}
    else{ordinalEnding="th"}
    console.log(`${onenumber}${ordinalEnding}`)
}