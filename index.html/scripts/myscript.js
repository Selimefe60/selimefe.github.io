// myscript.js
function kaydet() {
  const cevaplar = {
    q1: document.querySelector('input[name="q1"]:checked')?.value || "",
    q2: document.querySelector('input[name="q2"]:checked')?.value || "",
    q3: document.querySelector('input[name="q3"]:checked')?.value || "",
    q4: document.querySelector('input[name="q4"]:checked')?.value || "",
    q5: document.querySelector('input[name="q5"]:checked')?.value || "",
  };

  localStorage.setItem("testSonuclari", JSON.stringify(cevaplar));
  window.location.href = "sonuc.html";
}
