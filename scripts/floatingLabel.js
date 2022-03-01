function checkValue(event) {
    if (event.value) {
        document.getElementById(event.id).classList.add("active");
    } else {
        document.getElementById(event.id).classList.remove("active");
    }
}

window.onload = function () {
    var inputs = document.getElementsByTagName("input");

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type === "text" || inputs[i].type === "email" || inputs[i].type === "password")
            checkValue(inputs[i]);
    }
}
