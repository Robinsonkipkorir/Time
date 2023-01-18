var start=document.getElementById("start");
var reset=document.getElementById("reset");

var h=document.getElementById("hour");
var m=document.getElementById("minute");
var s=document.getElementById("seconds");

reset.addEventListener("click",()=>{
    h.value=0;
    m.value=0;
    s.value=0;
    console.log("hurray ....time has been reset")
})

function clock(){
    h.value = 7
    m.value = 10
    s.value = 59
    setInterval(()=>{
        s.value --
        if(s.value <= 0 ){
            s.value = 59
            m.value --
            if(m.value <= 0 ){
                m.value = 59
                h.value --
            }
        }
    },1000)
}


start.addEventListener("click",()=>{
    clock()
})