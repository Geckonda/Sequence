const mainSection = document.getElementById("mainSection");
const mainBorder = document.getElementById("mainBorder");
const backBTN = document.getElementById("backBTN");
const chooseSection = document.getElementById("chooseSection")


if(screen.width < 1400){
    mainSection.style.transform = 'rotate('+90+'deg)';
    chooseSection.style.transform = 'rotate('+90+'deg)';
    mainBorder.style.height = "100vh"
    backBTN.style.color = "#002525";
}