var closesth = document.querySelector("h1")
closesth.closest("header").style.border = "5px"
document.querySelector("nav ul").style.background = "blue"
document.querySelector("nav ul").style.display = "flex"
document.querySelector("nav ul").style.justifyContent = "space-around"
var lis = document.querySelectorAll("nav ul li")
for (i = 0; i < lis.length; i++) {
    lis[i].style.listStyle = "none"
    lis[i].style.padding="10px";
    lis[i].style.color="white"
}
closesth.style.textAlign = "center"
var info = document.getElementsByClassName("info")
info[0].style.display = "flex";
info[0].style.flexWrap = "warp"
info[0].style.justifyContent = "space-around"


var infoChild = info[0].children

for (i = 0; i < infoChild.length; i++) {
    infoChild[i].style.borderBottom = "2px solid blue"
    infoChild[i].querySelector("img").style.border = "1px solid black";
    infoChild[i].querySelector("img").style.width = "300px";
    infoChild[i].querySelector("img").style.height = "200px";

}
var p = document.querySelectorAll(".info-package p")
for(i=0;i<p.length;i++){
    p[i].style.fontSize="30px"
}

document.querySelector("h2").style.textAlign = "center"

var prices = document.getElementsByClassName("prices")
prices[0].style.display = "flex"
prices[0].style.justifyContent = "space-around"
var price = prices[0].children
for (i = 0; i < price.length; i++) {
    price[i].style.display = "flex";
    price[i].style.alignItems = "center";
    price[i].style.justifyContent = "center";
    price[i].style.marginTop = "20px"
    price[i].style.width = "120px";
    price[i].style.height = "120px";
    price[i].style.border = "3px solid blue"
    price[i].style.borderRadius = "50% 50%"
}

var footer = document.querySelector("footer ul")
footer.style.display="flex";
footer.style.justifyContent="space-around";
footer.style.background="blue";
footer.style.marginTop="20px"

footer.style.padding="40px"
for(i=0;i<footer.children.length;i++){
    footer.children[i].style.listStyle="none"
    footer.children[i].querySelector("a").style.color="white"
}
