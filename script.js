var n = 1
var temps_passer=10000
var temps_decompte = temps_passer/1000

function dimage(n) {
    element = document.querySelector("#picture")
    var v = element.getAttribute("src");
    image = n.toString() + ".jpg"
    if (v == element.getAttribute("src")) {
        v = image;}
    element.setAttribute("src", v);
    temps_moins()
    clearTimeout(time)
}
function suivant() {
    n++
    if (n > 4) { n = 1 }
    dimage(n)
    clearInterval(change)
    change= setInterval(suivant,temp_passer);
    temps_decompte= temps_passer/1000

}
function précedent() {
    n--
    if (n < 1) { n = 4 }
    temps_decompte = temps_passer /1000
    changeImage(n)
    clearInterval(change)
    change=setInterval(next, temps_passer);
    temps_decompte= temps_passer /1000
}
function gestion_timer() {
    change=setInterval(suivant,temps_passer);
    temps_moins()
}
function temps_moins(){
    if(temps_decompte>0){
        document.getElementById("bip").innerHTML = temps_decompte +" secondes restantes";
        temps_decompte = temps_decompte -1
    }
    else{
        document.getElementById("bip").innerHTML= "image suivante !!";
        temps_decompte= temps_passer/1000
    }
    time=setTimeout(temps_moins, 1000)
}

function pause(){
    clearTimeout(time)
    document.getElementById("bip").innerHTML = "en pause";
    clearInterval(change)
}
function play(){
    change= setInterval(next, temps_passer);
    time=setTimeout(temps_moins, 1000)
}