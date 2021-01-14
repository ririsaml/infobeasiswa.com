function check(){
    var nama = document.getElementById("nama");
    var email = document.getElementById("email");
    var no = document.getElementById("no");
    var pass = document.getElementById("pass");
    var konfirmasi = document.getElementById("konfirmasi");

    if (nama.value === "" || nama.value == null){
        setErrorFor(nama);
        alert("Nama Lengkap tidak boleh kosong");
    } else{
        setSuccessFor(nama);
    }

    if (email.value === "" || email.value == null){
        setErrorFor(email);
        alert("Email tidak boleh kosong");
    } else if (!isEmail(email.value)){
        setErrorFor(email);
        alert("Email tidak valid");
    } else{
        setSuccessFor(email);
    }

    if (no.value === "" || no.value == null){
        setErrorFor(no);
        alert("No Handphone tidak boleh kosong");
    } else{
        setSuccessFor(no);
    }

    if (pass.value === "" || pass.value == null){
        setErrorFor(pass);
        alert("Password tidak boleh kosong");
    } else if(!isPassword(pass.value)){
        setErrorFor(pass);
        alert("Password harus terdiri atas kombinasi huruf kapital, angka, dan karakter");
    } else if(pass.value.length < 6 || pass.value.length >= 8){
        setErrorFor(pass);
        alert("Password harus 6-8 karakter");
    }else{
        setSuccessFor(pass);
    }

    if (konfirmasi.value === "" || konfirmasi.value == null){
        setErrorFor(konfirmasi);
        alert("Konfirmasi password tidak boleh kosong");
    } else if(!isPassword(konfirmasi.value)){
        setErrorFor(konfirmasi);
        alert("Konfirmasi password harus terdiri atas kombinasi huruf kapital, angka, dan karakter");
    } else if(konfirmasi.value.length < 6 || konfirmasi.value.length >= 8){
        setErrorFor(konfirmasi);
        alert("Konfirmasi password harus 6-8 karakter");
    } else if (konfirmasi.value !== pass.value){
        setErrorFor(konfirmasi);
        alert("Password tidak sama");
    } else{
        setSuccessFor(konfirmasi);
        document.getElementById("valpopup").classList.toggle("show");
    }
}

function setErrorFor(input){
    const formControl = input.parentElement;
    formControl.className = "form-control error";
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPassword(pass){
    return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(pass);
}