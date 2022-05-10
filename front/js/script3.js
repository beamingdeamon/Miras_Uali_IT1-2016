function myFunction() {
    var x = document.getElementById("menuS");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}