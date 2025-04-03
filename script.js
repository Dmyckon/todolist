

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
    document.getElementById("store1").innerHTML = 
    document.getElementById("enter1").value
    document.getElementById("store2").innerHTML = 
    document.getElementById("enter2").value

    document.getElementById("storage1").style.display = "flex"
    document.getElementById("storage2").style.display = "flex"
    document.getElementById("enter1").value = ""
    document.getElementById("enter2").value = ""

}

function crossCheck() {
    document.getElementById("store1").style.textDecoration = "line-through"
    document.getElementById("store2").style.textDecoration = "line-through"
}

function cancelCheck() {
    document.getElementById("store1").style.textDecoration = "none"
    document.getElementById("store2").style.textDecoration = "none"
    document.getElementById("store1").innerHTML = ""
    document.getElementById("store2").innerHTML = ""
}