const body = document.querySelector('body');
const note = document.querySelector('#noter');
const notice = document.querySelector('#clickb');

function closeBtn () {
    notice.onclick = function() {
        note.style.display = "none";
        }
}