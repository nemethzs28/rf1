var objectStore;

function createDb() {
    var request = indexedDB.open("ShoppingCartItems");

    if (!window.indexedDB) {
        console.log("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
    }

    request.onupgradeneeded = function (event) {
        console.log("Upgrade needed!");

        var db = event.target.result;
        objectStore = db.createObjectStore("cart", {autoIncrement: true});
    }

    request.onsuccess = function (event) {
        cartColor();
    }

    request.onerror = function (event) {
        console.log("Something went wrong while loading the database: " + request.error);
    };
}

function dataToDB(id, name, price, quantity) {
    var request = indexedDB.open("ShoppingCartItems");

    request.onsuccess = function (event) {
        var db = event.target.result;
        var mealObjectStore = db.transaction(["cart"], "readwrite").objectStore("cart");
        mealObjectStore.add({
            id,
            name,
            price,
            quantity,
        }, id);
    };
}

function getDataFromDb(justSum) {
    var request = indexedDB.open("ShoppingCartItems");

    request.onsuccess = function (event) {
        var db = event.target.result;
        var mealObjectStore = db.transaction(["cart"], "readwrite").objectStore("cart");
        var mealObjectStoreRequest = mealObjectStore.getAll();

        mealObjectStoreRequest.onsuccess = function (event) {
            if (document.getElementById("orders")) {
                var cart = "";
                var cartSum = 0;

                if (mealObjectStoreRequest.result.length) {
                    mealObjectStoreRequest.result.forEach(function (element) {
                        cart += cartItem(element.id, element.name, element.price, element.quantity);
                        cartSum += element.price*element.quantity;
                    });
                    cart += cartSumRow(cartSum);
                } else {
                    cart = "<p>Kosarad még üres!</p>";
                }

                if(justSum) {
                    document.getElementById("sumPrice").innerHTML = cartSum + ' Ft';
                } else {
                    document.getElementById("orders").innerHTML = cart;
                }
            }
        };
    };
}

function changeQuantity(id, e) {
    var quant = Number(e.value);
    var request = indexedDB.open("ShoppingCartItems");

    request.onsuccess = function (event) {
        var db = event.target.result;
        var mealObjectStore = db.transaction(["cart"], "readwrite").objectStore("cart");
        var mealObjectStoreRequest = mealObjectStore.get(id);

        mealObjectStoreRequest.onsuccess = function () {
            let item = mealObjectStoreRequest.result;
            mealObjectStore.delete(id);
            dataToDB(item.id, item.name, item.price, quant);
            getDataFromDb(true);
        }
    }
}

function cartItem(id, name, price, quantity) {
    return '<div class="productContainer">\n' +
        '    <div class="product">' + name + '</div>\n' +
        '    <div class="price">' + price + ' Ft</div>\n' +
        '    <div style="align-self: center;">\n' +
        '        <input type="number" name="quantity" min="1" max="20" onchange="changeQuantity(' + id + ', this)" value="' + quantity + '"\n' +
        '               style="width: 3rem; height: 1.5rem; border: 0;box-shadow: rgba(149, 157, 165, 0.2) 0 .8rem 2.4rem;">\n' +
        '    </div>\n' +
        '    <div class="closeBtn" onclick="deleteFoodFromCart(' + id + ')"></div>\n' +
        '</div>';
}

function cartSumRow(price) {
    return '<div class="orderBtnContainer">\n' +
        '    <div class="sumPrice">Összesen:\n' +
        '        <div id="sumPrice" class="allPrice">' + price + ' Ft</div>\n' +
        '    </div>\n' +
        '    <button class="orderBtn" onClick="redirectingToDataForPayingPage()">Megrendelés</button>\n' +
        '</div>';
}

function deleteFoodFromCart(key) {
    var request = indexedDB.open("ShoppingCartItems");

    request.onsuccess = function (event) {
        var db = event.target.result;
        var mealObjectStore = db.transaction(["cart"], "readwrite").objectStore("cart");
        var mealObjectStoreRequest = mealObjectStore.getAll();

        mealObjectStoreRequest.onsuccess = function (event) {
            mealObjectStoreRequest.result.forEach(function (element) {
                if (element.id === key) {
                    mealObjectStore.delete(key);
                }
            });
            getDataFromDb();
        }
    }
}

function deleteAllFoodFromCart() {
    var request = indexedDB.open("ShoppingCartItems");

    request.onsuccess = function (event) {
        var db = event.target.result;
        var mealObjectStore = db.transaction(["cart"], "readwrite").objectStore("cart");
        var mealObjectStoreRequest = mealObjectStore.getAll();

        mealObjectStoreRequest.onsuccess = function (event) {
            mealObjectStore.clear();
            getDataFromDb();
        }
    }
}

function cartColor() {
    var request = indexedDB.open("ShoppingCartItems");

    request.onsuccess = function (event) {
        var db = event.target.result;

        if (!db.objectStoreNames.contains('cart')) {
            db.createObjectStore('cart');
        }
        var mealObjectStore = db.transaction(["cart"], "readwrite").objectStore("cart");
        var mealObjectStoreRequest = mealObjectStore.getAll();

        mealObjectStoreRequest.onsuccess = function (event) {
            setTimeout(function(){
                if (mealObjectStoreRequest.result.length) {
                    document.getElementById("Cart").style.filter = "sepia(100%)";
                } else {
                    document.getElementById("Cart").style.filter = "invert(1)";
                }
            }, 250);
        }
    }
}

createDb();
