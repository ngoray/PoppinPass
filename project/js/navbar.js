const a = document.getElementById('nav1');
const b = document.getElementById('nav2');
const c = document.getElementById('nav3');

function nav1() {
    a.classList.add('active');
    b.classList.remove('active');
    c.classList.remove('active');
}
function nav2() {
    a.classList.remove('active');
    b.classList.add('active');
    c.classList.remove('active');
}
function nav3() {
    a.classList.remove('active');
    b.classList.remove('active');
    c.classList.add('active');
}