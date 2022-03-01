function rate(rating, id) {
    var rates = rating.toString();
    var slicedRate = rates.slice(0,4);
    var ratingDiv = document.getElementById("RatingDiv" + id);
    var labels = ratingDiv.getElementsByClassName("stars");
    var slicedRateNumber = Math.round(Number(slicedRate));

    for (let i = 0; i < slicedRateNumber; i++) {
        labels[i].classList.add("rated");
    }
}
