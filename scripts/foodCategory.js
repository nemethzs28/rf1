let list = [];
let restid;

function filter(category,id) {
    restid = id
    if (list.indexOf(category) === -1) {
        list.push(category)
    }
}


function checkCategory() {
    let menudiv = document.getElementById("menu");
    for (const listKey in list) {
        let form = document.createElement("form")
        form.action = "/RestaurantSupply/"+restid+"/"+list[listKey]
        form.method = "POST"
        let div = document.createElement("button")
        div.id = "groupsOf"+list[listKey]
        div.type = "SUBMIT"
        div.style = "border: none; background-color: white;"
        div.onclick = redirectingToFilteredRestaurantSupplyPage
        form.append(div)
        menudiv.append(form)
    }

}
