function myFunction() {
    var x = document.getElementById("navNone");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}