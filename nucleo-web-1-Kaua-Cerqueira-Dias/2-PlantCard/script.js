var a = document.getElementById("share");
var mostrarmenu = document.getElementById("menu");
var abrirmenu = document.getElementById("shareUm");
var fecharmenu = document.getElementById("shareDois");

a.addEventListener("click", function clicou(){
    if (mostrarmenu.style.display === "none"){
        mostrarmenu.style.display = "flex";
        abrirmenu.style.display = "none";
        fecharmenu.style.display = "block";
    } else{
        mostrarmenu.style.display = "none";
        abrirmenu.style.display = "block";
        fecharmenu.style.display = "none";
    }
});