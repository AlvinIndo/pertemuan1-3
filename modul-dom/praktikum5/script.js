function gantiGelap() {
  document.body.style.backgroundColor = "#222222";
  document.getElementById("judul").style.color = "gold";
  const judul = document.getElementById("judul");
    judul.textContent = "Belajar DOM Itu Seru";
  const semuaIsi = document.querySelectorAll(".isi");
  semuaIsi.forEach((p) => {
    p.style.color = "white";
  });
}
 
function gantiTerang() {
  document.body.style.backgroundColor = "white";
  document.getElementById("judul").style.color = "black";

  const judul = document.getElementById("judul");
    judul.textContent = "Belajar DOM Itu Seru";

  const semuaIsi = document.getElementsByClassName("isi");
  for (let i = 0; i < semuaIsi.length; i++) {
    semuaIsi[i].style.color = "black";
  }
}
//tombol warna hijau
function gantiHijau() {
    document.body.style.backgroundColor = "green";

    const judul = document.getElementById("judul");
    judul.textContent = "Belajar DOM Itu Seru";
 
  const semuaIsi = document.querySelectorAll(".isi");
  semuaIsi.forEach((p) => {
    p.style.color = "darkgreen";
  });
}
//ganti judul
function gantiJudul() {
    const judul = document.getElementById("judul");
    judul.textContent = "Alvin Dhiya El Raqi";
}
