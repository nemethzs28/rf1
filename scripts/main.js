//hamburger menü
// function moveHamburgerMenu(div) {
//     div.classList.toggle("change");
// }

//navigálások

function redirectingToRestaurantFinder() {
    location.href = "/RF";
}

function redirectingToRestaurantSupplyPage() {
    location.href = "/RestaurantSupply/:id";
}
function redirectingToFilteredRestaurantSupplyPage() {
    location.href = "/RestaurantSupply/:id/:category";
}

function redirectingToAdminRestaurantSupplyPage() {
    location.href = "/adminSupply/:id";
}

function redirectingToDataForPayingPage() {
    location.href = "/dataForPaying";
}

function redirectingToAfterPayingPage() {
    location.href = "../views/AfterPaying.ejs";
}

function AdminRestaurantFinder(){
    location.href = "/admin"
}

function AdminManageUsers(){
    location.href = "/adminUsers"
}

function redirectingToMainPage() {
    location.href = "/";
}

function profileUpdate() {
    location.href = "./profile_update";
}

function itemAddedToCart(foodName){
    window.confirm(foodName + " a kosárba került!");
}




