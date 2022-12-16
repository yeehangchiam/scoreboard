let home = document.getElementById("home_count")
let guest =  document.getElementById("guest_count")
let home_count = 0
let guest_count = 0


function add1(){
    home_count += 1
    home.textContent = home_count
}


function add2(){
    home_count += 2
    home.textContent = home_count
    
}

function add3(){
    home_count += 3
    home.textContent = home_count
}

function add1g(){
    guest_count += 1
    guest.textContent = guest_count
}


function add2g(){
    guest_count += 2
    guest.textContent = guest_count
    
}

function add3g(){
    guest_count += 3
    guest.textContent = guest_count
}