var count = 0;
var output = document.getElementById("counter")
var saveFn = document.getElementById("saveFn")



var increment= ()=>{
    count= count+1;
    output.innerText = count
    
}

var save=()=>{
    saveFn.innerText= saveFn.textContent +count + " - " 
    count=0
    output.innerText=count
}
