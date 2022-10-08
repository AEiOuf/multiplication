let num1, num2, prod, streak = 0;
document.getElementById("answer").addEventListener("keyup", function (event) {
    if(event.code === "Enter"){
        submitAns()
    }
})

function generate(){
    num1 = (Math.floor(Math.random()*10))+1
    num2 = (Math.floor(Math.random()*10))+1
    prod = num1*num2
    document.getElementById("multiply").innerHTML = num1 + " x " + num2
    document.getElementById("correct").style.display = "none"
    document.getElementById("incorrect").style.display = "none"
    document.getElementById("answer").value = ""
}

function submitAns(){
    if(parseInt(document.getElementById("answer").value) === prod){
        streak += 1
        document.getElementById("correct").style.display = "block"
        document.getElementById("streak").innerHTML = "Streak: " + streak + " in a row"
    } else {
        streak = 0
        document.getElementById("incorrect").style.display = "block"
        document.getElementById("streak").innerHTML = "Streak: " + streak + " in a row"
    }
    setTimeout(function(){
        generate()
    }, 1000)
}

function func(a){
    const x = a.key;

    if(x === "Enter"){
        submitAns()
    }
}

generate()