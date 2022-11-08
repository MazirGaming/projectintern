var listCategory = document.querySelectorAll(".category-item")
var mapBase = document.querySelector(".map-base")
var mapFood = document.querySelector(".map-food")
var mapWellness = document.querySelector(".map-wellness")
var mapCafe = document.querySelector(".map-cafe")
var mapAmenity = document.querySelector(".map-amenity")
var listFood = document.querySelector(".list-food")
var listWellness = document.querySelector(".list-wellness")
var listCafe = document.querySelector(".list-cafe")
var listAmenity = document.querySelector(".list-amenity")
var slideImg = document.querySelector(".slide-img")
console.log(slideImg)

for (var i = 0; i < listCategory.length; i++) {
    listCategory[i].onclick = function (e) {
        if (e.target.textContent == "Food & Beverage") {
            mapFood.setAttribute("style", "z-index: 1;")
            mapWellness.setAttribute("style", "z-index: 0;")
            mapCafe.setAttribute("style", "z-index: 0;")
            mapAmenity.setAttribute("style", "z-index: 0;")
            listFood.setAttribute("style", "display:block;")
            listCafe.setAttribute("style", "display:none;")
            listWellness.setAttribute("style", "display:none;")
            listAmenity.setAttribute("style", "display:none;")
        } else if (e.target.textContent == "Wellness") {
            mapWellness.setAttribute("style", "z-index: 1;")
            mapFood.setAttribute("style", "z-index: 0;")
            mapCafe.setAttribute("style", "z-index: 0;")
            mapAmenity.setAttribute("style", "z-index: 0;")
            listFood.setAttribute("style", "display:none;")
            listCafe.setAttribute("style", "display:none;")
            listWellness.setAttribute("style", "display:block;")
            listAmenity.setAttribute("style", "display:none;")
        } else if (e.target.textContent == "Cafés") {
            mapCafe.setAttribute("style", "z-index: 1;")
            mapWellness.setAttribute("style", "z-index: 0;")
            mapFood.setAttribute("style", "z-index: 0;")
            mapAmenity.setAttribute("style", "z-index: 0;")
            listFood.setAttribute("style", "display:none;")
            listCafe.setAttribute("style", "display:block;")
            listWellness.setAttribute("style", "display:none;")
            listAmenity.setAttribute("style", "display:none;")
        } else if ((e.target.textContent == "Amenity")) {
            mapAmenity.setAttribute("style", "z-index: 1;")
            mapCafe.setAttribute("style", "z-index: 0;")
            mapWellness.setAttribute("style", "z-index: 0;")
            mapFood.setAttribute("style", "z-index: 0;")
            listFood.setAttribute("style", "display:none;")
            listCafe.setAttribute("style", "display:none;")
            listWellness.setAttribute("style", "display:none;")
            listAmenity.setAttribute("style", "display:block;")
        }
        console.log(e.target.textContent)

    }
}

var responsiveSlider = function() {

    var slider = document.getElementById("slider");
    var sliderWidth = slider.offsetWidth;
    var slideList = document.getElementById("slideWrap");
    var count = 1;
    var items = slideList.querySelectorAll("li").length;
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var btnSlide = document.getElementsByClassName(".btnSlide")
    var btnItem = document.querySelectorAll(".btn-item")
    
    window.addEventListener('resize', function() {
      sliderWidth = slider.offsetWidth;
    });
    
    var prevSlide = function() {
      if(count > 1) {
        count = count - 2;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = 1) {
        count = items - 1;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
    };
    
    var nextSlide = function() {
      if(count < items && count < 4) {
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count > 2) {
        slideList.style.left = "0px";
        count = 1;
      }
    };
    
    var btnSlide = function() {

    }
    
    next.addEventListener("click", function() {
      nextSlide();
    });
    
    prev.addEventListener("click", function() {
      prevSlide();
    });
    
    setInterval(function() {
      nextSlide()
    }, 8000);
    
    };
    
    window.onload = function() {
    responsiveSlider();  
    }

// Modal header
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var menu = document.querySelector(".menu")

// Get the <span> element that closes the modal

var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
menu.onclick = function() {
console.log(menu)

  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

