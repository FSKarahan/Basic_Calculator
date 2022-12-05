"use strict";
  var sayilar = document.getElementsByTagName("button"),
    sayiUzunluk = sayilar.length,
    i = 0;

  for (i = 0; i < sayiUzunluk; i++) {
    sayilar[i].onclick = hesapla;
  }
  "use strict";
  var _sonuc = document.getElementById("sonuc");

  function hesapla() {
    var deger = this.innerHTML;

    if (deger == "=") {
      try {
        sonuc.value = eval(sonuc.value);
      } catch (e) {
        sonuc.value = "0";
      }
      return;
    }

    sonuc.value += deger;
  }
  "use strict";
  var sayilar = document.getElementsByTagName("button"),
    sayiUzunluk = sayilar.length,
    i = 0,
    sonuc = document.getElementById("sonuc");

  for (i = 0; i < sayiUzunluk; i++) {
    sayilar[i].onclick = hesapla;
  }

  function hesapla() {
    var deger = this.innerHTML;

    if (deger == "=") {
      try {
        sonuc.value = eval(sonuc.value);
      } catch (e) {
        sonuc.value = "0";
      }
      return;
    }

    sonuc.value += deger;
  }