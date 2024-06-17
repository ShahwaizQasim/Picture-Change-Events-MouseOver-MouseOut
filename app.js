
/* Move Cursor With image */

const MainBody = document.querySelector(".main");
const MoveCircle = document.querySelector("#circle");

window.CursorHandle = (event) => {
  MoveCircle.style.top = `${event.clientY}px`;
  MoveCircle.style.left = `${event.clientX}px`;
}