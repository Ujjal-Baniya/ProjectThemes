var input = document.querySelector("input");
var result = document.querySelector("#result")
var main = document.querySelector("#main")
var choice;
input.addEventListener("change", function(){
    choice = input.value
    input.value = ""
    if(choice==1){
            AboutMe();
    }
    else if(choice==2){
        test();
    }
    
})

function AboutMe(){
    main.innerHTML = "<img id=\"picture\" src=\"dada.jpg\"> <p id=\"text\"><strong>Hello there!</strong><br><span id=\"lol\"></span></p>"
    load()
}

 function test(){
  result.innerHTML = "<img id=\"picture\"src=\"aa.png\">"
 }


 var loadtext = document.getElementById("lol")
 var x = 0
 var str ="I am glad that you wanted to know about me.I am Ujjal Baniya. I am from Nepal. I am studying CS in SRKR engineering college. It is located in AndhraPardesh, India"
 function load(){
    var loadtext = document.getElementById("lol")
    if(x<str.length){
        loadtext.innerHTML += str.charAt(x);
        x++;
        setTimeout(load, 60)
    }   
 }