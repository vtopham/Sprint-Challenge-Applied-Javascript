/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function createCarousel(){

  //create the carousel components
  carousel = document.createElement("div");
  carousel.classList.add("carousel");

    leftButton = document.createElement("div");
    leftButton.classList.add("left-button");
    leftButton.textContent = "<";
    carousel.appendChild(leftButton);

    image1 = document.createElement("img");
    image1.src = "./assets/carousel/mountains.jpeg";
    carousel.appendChild(image1);

    image2 = document.createElement("img");
    image2.src = "./assets/carousel/computer.jpeg";
    carousel.appendChild(image2);

    image3 = document.createElement("img");
    image3.src = "./assets/carousel/trees.jpeg";
    carousel.appendChild(image3);

    image4 = document.createElement("img");
    image4.src = "./assets/carousel/turntable.jpeg";
    carousel.appendChild(image4);

    rightButton = document.createElement("div");
    rightButton.classList.add("right-button");
    rightButton.textContent = ">";
    carousel.appendChild(rightButton);



  return carousel;
}

//Add the carousel
const carouselParent = document.querySelector(".carousel-container");
carouselParent.appendChild(createCarousel());

//create a node tree of pictures
const imageList = document.querySelectorAll("img");

//create a variable that lets you know which picture to focus on
let imageFocus = 0;

imageList[imageFocus].style.display = "block";

//create event listeners for the buttons
const goLeft = document.querySelector(".left-button");
const goRight = document.querySelector(".right-button");

goRight.addEventListener("click",(event) => {
  //change the focus to the right

  imageList[imageFocus].style.display = "none";

  if (imageFocus < imageList.length - 1) {
    imageFocus += 1;
  } else {
    imageFocus = 0;
  }

  //update the page
  imageList[imageFocus].style.display = "block";  
});

goLeft.addEventListener("click", (event) => {
  //change the focus to the left 

  imageList[imageFocus].style.display = "none";

  if (imageFocus > 0) {
    imageFocus -= 1;
  } else {
    imageFocus = imageList.length - 1;
  }

  //update the page
  imageList[imageFocus].style.display = "block";  

});


