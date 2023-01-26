var nama = sessionStorage.getItem("nama") ;
var kelamin = sessionStorage.getItem("kelamin") ;
var alamat = sessionStorage.getItem("alamat") ;
var asal = sessionStorage.getItem("asal") ;
var jurusan = sessionStorage.getItem("jurusan") ;
function Konfirmasi() {
    document.getElementById("konfirmasinama").innerHTML = nama
    document.getElementById("konfirmasikelamin").innerHTML = kelamin
    document.getElementById("konfirmasialamat").innerHTML = alamat
    document.getElementById("konfirmasiasal").innerHTML = asal
    document.getElementById("konfirmasijurusan").innerHTML = jurusan
}
Konfirmasi()
function Sudahbenar() {
    window.location.href = "terkirim.html"
}
function belum() {
    window.location.href = "form.html"
}