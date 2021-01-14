function show_menu(){
    var nav = document.querySelector('nav ul');
    var menu1 = document.getElementById('st');
    var menu2 = document.getElementById('nd');
    var menu3 = document.getElementById('rd');
    if (menu1.style.transform == 'rotate(45deg) translate(-1.5px, -1.5px)') {
        menu1.style.transform = 'rotate(0deg)';
        menu2.style.display = 'block';
        menu3.style.transform = 'rotate(0deg)';
    }
    else {
        menu1.style.transform = 'rotate(45deg) translate(-1.5px, -1.5px)';
        menu2.style.display = 'none';
        menu3.style.transform = 'rotate(-45deg) translate(-1.5px, -0.5px)';
    }
    nav.classList.toggle('slide');
}

function normal(){
    show_menu()
}