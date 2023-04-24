function result () {
    let score = 0;
    if (document.getElementById("correct1").checked) {
        score++;

    }
    if (document.getElementById("correct2").checked) {
        score++;

}
    if (document.getElementById("correct3").checked) {
        score++;

    } 

document.write("Your score is " + score + " out of 3");
console.log (score);

}




