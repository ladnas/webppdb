
var nama= document.getElementById("nama") ;
var kelamin= document.getElementById("Kelamin") ;
var alamat= document.getElementById("Alamat") ;
var asal= document.getElementById("Asal") ;
var jurusan= document.querySelector("#jurusan") ;

function Simpan() {
    sessionStorage.setItem("nama", nama.value) ;
    sessionStorage.setItem("kelamin",kelamin.value) ;
    sessionStorage.setItem("alamat",alamat.value) ;
    sessionStorage.setItem("asal",asal.value) ;
    sessionStorage.setItem("jurusan",jurusan.value) ;
    window.location.href = "konfirmasi.html" ; 
}



