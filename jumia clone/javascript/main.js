var Phone1 = {
    image: "/images/pone.jpg",
    iphone: "image1",
    name: "Iphone SE",
    discountedPrice: "Ksh" + " " + 30000,
    originalPrice: "Ksh" + " " + 38500,
    itemId: "I001"
};
document.getElementById("image1").src = Phone1.image;
document.getElementById("name1").innerText = Phone1.name;
document.getElementById("discountedPrice1").innerText = Phone1.discountedPrice;
document.getElementById("originalPrice1").innerText = Phone1.originalPrice;


var Phone2 = {
    image: "/images/ptwo.jpg",
    iphone: "image2",
    name: "Samsung S23",
    discountedPrice: "Ksh" + " " + 23000,
    originalPrice: "Ksh" + " " + 30000,
    itemId: "I002"
};
document.getElementById("image2").src = Phone2.image;
document.getElementById("name2").innerText = Phone2.name;
document.getElementById("discountedPrice2").innerText = Phone2.discountedPrice;
document.getElementById("originalPrice2").innerText = Phone2.originalPrice;


var Phone3 = {
    image: "/images/pthree.jpg",
    iphone: "image3",
    name: "Samsung S23",
    discountedPrice: "Ksh" + " " + 23000,
    originalPrice: "Ksh" + " " + 30000,
    itemId: "I003"
};
document.getElementById("image3").src = Phone3.image;
document.getElementById("name3").innerText = Phone3.name;
document.getElementById("discountedPrice3").innerText = Phone3.discountedPrice;
document.getElementById("originalPrice3").innerText = Phone3.originalPrice;


var Phone4 = {
    image: "/images/pfour.jpg",
    iphone: "image4",
    name: "Samsung S23",
    discountedPrice: "Ksh" + " " + 23000,
    originalPrice: "Ksh" + " " + 30000,
    itemId: "I004"
};
document.getElementById("image4").src = Phone4.image;
document.getElementById("name4").innerText = Phone4.name;
document.getElementById("discountedPrice4").innerText = Phone4.discountedPrice;
document.getElementById("originalPrice4").innerText = Phone4.originalPrice;

document.getElementById("Pone").onclick = function () {
    window.location.href = "/index2.html" + "?" + Phone1.itemId;
};
document.getElementById("Ptwo").onclick = function () {
    window.location.href = "/index2.html" + "?" + Phone2.itemId;
};
document.getElementById("Pthree").onclick = function () {
    window.location.href = "/index2.html" + "?" + Phone3.itemId;
};
document.getElementById("Pfour").onclick = function () {
    window.location.href = "/index2.html" + "?" + Phone4.itemId;
};

