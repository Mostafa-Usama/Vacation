
var copyBtn = document.getElementById("copy-btn");
var toolt = document.getElementById("toolt");
var textfield = document.getElementById("coupon");
var bookbtn = document.getElementById("bookBtn");

function copyText() {
    toolt.innerHTML = "Copied!!"   
    navigator.clipboard.writeText(textfield.value);
}
function leave() {
    toolt.innerHTML = "Click To Copy";
}
function data() {
    var total = 0;

    var name = document.getElementById("fullName").value;
    var phone = document.getElementById("phoneNum").value;
    var locations = document.getElementById("locations").value;
    var numTickets = document.getElementById("numOfTickets").value;
    var code = document.getElementById("code").value;
    var discount = document.getElementById("discount")

    document.getElementById("name").innerHTML = "Full Name: ";
    document.getElementById("phone").innerHTML = "Phone Number: ";
    document.getElementById("location").innerHTML = "Location: ";
    document.getElementById("tickets").innerHTML = "# Of Tickets: ";
    document.getElementById("cost").innerHTML = "Total Cost: ";
    discount.innerHTML = "Discount: "
    if (locations == "Chicago" || locations == "Aswan") {
        total+= 350 * Number(numTickets)
    }
    else if (locations == "Madrid" || locations == "Paris") {
        total += 450 * Number(numTickets)
    }
    else if (locations == "Rome" || locations == "London") {
        total += 400 * Number(numTickets)
    }

    if (code == "XEA5-W3FJ-Q3EH-AD8M") {
        discount.innerHTML += "20%";
        total -= total *.2;
    }
    else {
        discount.innerHTML += "0%";
    }

    document.getElementById("name").innerHTML += name;
    document.getElementById("phone").innerHTML += phone;
    document.getElementById("location").innerHTML += locations;
    document.getElementById("tickets").innerHTML += numTickets;
    document.getElementById("cost").innerHTML += "$"+(total) ;
}

bookbtn.addEventListener("click", data);
copyBtn.addEventListener("click", copyText);
copyBtn.addEventListener("mouseleave", leave);
