//email validation

let cakeType = document.querySelector("#ctype")
let emValid = document.querySelector("#emvalid")
let emailInput = document.querySelector("#emailinput")
const orderForm = document.querySelector("#onlineform")
let currentOrders = document.querySelector(".c_order")

orderForm.addEventListener("submit", onsubmit);

onsubmit = (e) => {
    e.preventDefault();
    if (emailInput.value === "") {
        emValid.innerHTML = "Please enter email";

    } else {
        // let date = new Date()
        const orderNum = document.createElement("ol");
        orderNum.appendChild(document.createTextNode(`${cakeType.value}","${emailInput.value}`));

        currentOrders.appendChild(orderNum);

        //clear fields
        cakeType.value = "";
        emailInput.value = "";


    }

    setTimeout(() => emValid.remove(), 3000);
};