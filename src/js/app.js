const body = document.querySelector('body');
const note = document.querySelector('#noter');
const notice = document.querySelector('#clickb');

function closeBtn () {
    notice.onclick = function() {
        note.style.display = "none";
        }
}

// grab everything we need
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

// add event listeners
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
