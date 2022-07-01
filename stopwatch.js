window.onload=function(){
    var second=0;
    var tens=0;
    var appendTens=document.getElementById("tens")
    var appendSeconds=document.getElementById("second")
    var buttonStart=document.getElementById("start")
    var buttonStop=document.getElementById("stop")
    var buttonReset=document.getElementById("reset")
    var interval
    buttonStart.onclick=function(){
        clearInterval(interval)
        interval=setInterval(startTimer,10)
    }
    buttonStop.onclick=function(){
        clearInterval(interval)}
        buttonReset.onclick=function(){
            clearInterval(interval)
        tens=00;
    second=00;
appendTens.innerHTML=tens;
appendSeconds.innerHTML=second;
}
function startTimer(){
    tens++
    if(tens<=9)
    {
        appendTens.innerHTML="0"+tens
    }
    if(tens>9)
    {
        appendTens.innerHTML=tens
    }
    if(tens>99)
    {
        console.log("seconds")
        second++
        appendSeconds.innerHTML="0"+second
        tens=0
        appendTens.innerHTML="0"+0
    }
    if(second>9){
        appendSeconds.innerHTML=second
    }
}
}