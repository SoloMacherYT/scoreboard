

let count = 0
let count_B = 0

function plus1(){
    count += 1
    document.getElementById("sp1").innerText = count
}

function plus2(){
    count += 2
    document.getElementById("sp1").innerText = count
}

function plus3(){
    count += 3
    document.getElementById("sp1").innerText = count
}


function plus1_B(){
    count_B += 1
    document.getElementById("sp2").innerText = count_B
}

function plus2_B(){
    count_B += 2
    document.getElementById("sp2").innerText = count_B
}

function plus3_B(){
    count_B += 3
    document.getElementById("sp2").innerText = count_B
}

function re(){
    count = 0
    count_B  = 0
    document.getElementById("sp1").innerText = count
    document.getElementById("sp2").innerText = count_B
}