// JavaScript for modal functionality
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var images = document.querySelectorAll(".product img");
var span = document.getElementsByClassName("close")[0];

images.forEach(function(image) {
    image.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
});

span.onclick = function() {
    modal.style.display = "none";
}
