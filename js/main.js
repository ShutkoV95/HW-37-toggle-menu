const doc = document;
const toggleBtn = doc.querySelector('.toggle-btn');
const closeBtn = doc.querySelector('.toggle-btn-close');
const sideWindow = doc.querySelector('.side-window');


toggleBtn.onclick = function() {
    toggleSideWindow(sideWindow);
}

closeBtn.onclick = function() {
    closeSideWindow(sideWindow);
}

function toggleSideWindow(item) {
    item.classList.add('active');
}

function closeSideWindow(item) {
    item.classList.remove('active');
}
