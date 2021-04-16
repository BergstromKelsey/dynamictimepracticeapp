const button = document.querySelector("button");
const output = document.querySelector(".output")
button.addEventListener("click",showOutput);


function showOutput(){
    const date =new Date();
    let cur = date.getHours();
    let minutes= date.getMinutes();
    console.log(minutes)
    
    let message;
   
    if(cur>17){
        message =+cur+":"+minutes+  " in the evening!";
    }
    else if (cur >12){
        message =+cur+":"+minutes+   " in the afternoon";

    }
    else if (cur >0){
        message= +cur+":"+minutes+  " in the morning!";
       
    }
    else{
        message="somthing is wrong";

    }
    
    output.innerHTML= "<h1>"+message+"</h1>"

}