window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('aktif', header, windowPosition);;
})

function myPopup() {
    var popup = document.getElementById("popup");
    popup.classList.toggle("show");
}

function myPopup2() {
    var popup2 = document.getElementById("tabelpopup");
    popup2.classList.toggle("show2");
}

function myClick() {
    var popup3 = document.getElementById("list3");
    popup3.classList.toggle("appear");
}