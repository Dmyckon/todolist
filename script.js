

function lightTheme() {
    document.getElementById("dark1").style.display = "block"
    document.getElementById("light1").style.display = "none"
    document.getElementById("dark2").style.display = "block"
    document.getElementById("light2").style.display = "none"
    document.body.style.backgroundColor = "black"
    document.getElementById("back2").style.display = "block"
    document.getElementById("back1").style.display = "none"
}

function darkTheme() {
    document.getElementById("light1").style.display = "block"
    document.getElementById("dark1").style.display = "none"
    document.getElementById("light2").style.display = "block"
    document.getElementById("dark2").style.display = "none"
    document.body.style.backgroundColor = "white"
    document.getElementById("back1").style.display = "block"
    document.getElementById("back2").style.display = "none"
}

function checkMark() {
    document.getElementById("storage1").innerHTML = 
    document.getElementById("enter1").value
    document.getElementById("storage2").innerHTML = 
    document.getElementById("enter2").value
    
}