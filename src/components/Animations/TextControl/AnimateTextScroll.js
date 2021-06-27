export const animatescroll = () => {
  window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    let kiri = document.querySelector(".kiri");
    let kanan = document.querySelector(".kanan");
    let tb = document.querySelector(".tb");
    let h2contact = document.querySelector("#contact h2");
    let rowcontact = document.querySelector("#contact .row");
    let cardcontact = document.querySelector("#contact .row .card");
    let contact = document.getElementById("contact").offsetTop;
    if (scroll <= 500 || scroll >= 800) {
      setTimeout(function () {
        kiri.classList.add("muncul");
        kanan.classList.add("muncul");
        tb.classList.add("muncul");
      }, 400);
    }
    if (scroll <= 400 || scroll >= 900) {
      setTimeout(function () {
        kiri.classList.remove("muncul");
        kanan.classList.remove("muncul");
        tb.classList.remove("muncul");
      }, 400);
    }
    if (scroll > contact - 400) {
      h2contact.classList.add("muncul");
      rowcontact.classList.add("muncul");
      cardcontact.classList.add("muncul");
    }
  });
};
