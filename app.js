
/* Move Cursor With image */

const MainBody = document.querySelector(".main");
const MoveCircle = document.querySelector("#circle");

const CursorHandle = (event) => {

  /* Below console's print same result

  console.log(event); 

  console.log(`Just y: ${event.y}`);
  console.log(`Client y: ${event.clientY}`);
  console.log(`Page y: ${event.pageY}`);
  

  console.log(`Just X: ${event.x}`);
  console.log(`Client X: ${event.clientX}`);
  console.log(`Page X: ${event.pageX}`);

  */

  MoveCircle.style.top = `${event.clientY}px`;
  MoveCircle.style.left = `${event.clientX}px`;
  MoveCircle.style.display = 'block';
}
MainBody.addEventListener("mousemove", CursorHandle);


const ParentImages = document.querySelector(".parent");
const image1 = document.querySelector("#img1");
const image2 = document.querySelector("#img2");
const image3 = document.querySelector("#img3");
const image4 = document.querySelector("#img4");

ParentImages.addEventListener("mouseover", (e) => {
  console.log(e.target.tagName);
  if (e.target.tagName === 'IMG') {
    console.log(e.target.dataset);
    // if () {
      
    // }
    
  }

});

// ParentImages.addEventListener("mouseout", () => {
   
// });

