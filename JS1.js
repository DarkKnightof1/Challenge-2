function myFunction() {
    var getal = document.getElementById("myText").value;

    for (var teller = 0; teller < 101.; teller++) {
        console.log(getal + "*" + teller + "=" + (getal * teller));
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.font = "15px Arial";
        ctx.fillText(getal + "*" + teller + "=" + (getal * teller), 10, 20 * teller);
    }

}
function clear() {
    location.reload();
}