function hasil() {
  var sisi = parseFloat(document.getElementById("hitung").value);
  var luas = sisi * sisi;
  var keliling = 4 * sisi;
  document.getElementById("luasPersegi").value = luas + "cm²";
  document.getElementById("kelilingPersegi").value = keliling + "cm";
}
function hapus() {
  document.getElementById("hitung").value = "";
  document.getElementById("luasPersegi").value = "";
  document.getElementById("kelilingPersegi").value = "";
}
