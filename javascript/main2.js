var Phone1 = {
    image: "/images/pone.jpg",
    iphone: "image1",
    name: "Iphone SE",
    discountedPrice: 30000,
    originalPrice: 38500,
    itemId: "I001"
};

var Phone2 = {
    image: "/images/ptwo.jpg",
    iphone: "image2",
    name: "Samsung S23",
    discountedPrice: 23000,
    originalPrice: 30000,
    itemId: "I002"
};

var Phone3 = {
    image: "/images/pthree.jpg",
    iphone: "image3",
    name: "Samsung S23",
    discountedPrice: 23000,
    originalPrice: 30000,
    itemId: "I003"
};

var Phone4 = {
    image: "/images/pfour.jpg",
    iphone: "image4",
    name: "Samsung S23",
    discountedPrice: 23000,
    originalPrice: 30000,
    itemId: "I004"
};

var selectId = decodeURIComponent(window.location.search);

var selectedItem = selectId.substring(1);


// console.log(selectedItem, selectId);
document.getElementById("display").innerText = selectedItem;

if(selectedItem ==Phone1.itemId){
    document.getElementById("image1").src = Phone1.image;
    document.getElementById("name1").innerText = Phone1.name;
    document.getElementById("discountedPrice1").innerText = Phone1.discountedPrice;
    document.getElementById("originalPrice1").innerText = Phone1.originalPrice;

    var cost = Phone1.discountedPrice;
    qty(cost);
}

else if(selectedItem ==Phone2.itemId){
    document.getElementById("image1").src = Phone2.image;
    document.getElementById("name1").innerText = Phone2.name;
    document.getElementById("discountedPrice1").innerText = Phone2.discountedPrice;
    document.getElementById("originalPrice1").innerText = Phone2.originalPrice;

    var cost = Phone2.discountedPrice;
    qty(cost);
}

else if(selectedItem ==Phone3.itemId){
    document.getElementById("image1").src = Phone3.image;
    document.getElementById("name1").innerText = Phone3.name;
    document.getElementById("discountedPrice1").innerText = Phone3.discountedPrice;
    document.getElementById("originalPrice1").innerText = Phone3.originalPrice;

    var cost = Phone3.discountedPrice;
    qty(cost);
}

else if(selectedItem ==Phone4.itemId){
    document.getElementById("image1").src = Phone4.image;
    document.getElementById("name1").innerText = Phone4.name;
    document.getElementById("discountedPrice1").innerText = Phone4.discountedPrice1;
    document.getElementById("originalPrice1").innerText = Phone4.originalPrice;

    var cost = Phone4.discountedPrice;
    qty(cost);
}

function qty(cost){
    document.getElementById("qty").onkeyup = function () {
        var amount = parseInt(cost);
        var quantity = parseInt(document.getElementById("qty").value);
        if (quantity > 1) {
            var total = quantity * amount;
            document.getElementById("total").innerText = "Total: KES " + total
            userLocation(total);
        }
        else {
            var total = 1 * amount;
            
            document.getElementById("total").innerText = "Total: KES " + total;

            userLocation(total);
        
        }
    };
}

function userLocation(total) {
    document.getElementById("Location").onchange = function (){
        var Karen = 500;
        var Kitsuru = 600;
        var Muthaiga = 700;

        var delivery = document.getElementById("Location").value;

        if (delivery == "Karen"){
            document.getElementById("total").innerText = "Total KES " + total + Karen;
        }else if(delivery == "Kitsuru"){
            document.getElementById("total").innerText = total + Kitsuru;
        }else if(delivery == "Muthaiga"){
            document.getElementById("total").innerText = total + Muthaiga;
        }
    };
}