function setAlarm(employed, vacation){
    return employed && !vacation? true:false;
}

console.log(setAlarm(false,true));