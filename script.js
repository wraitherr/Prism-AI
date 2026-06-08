// -- 1 s. dashboard
function pokazatSekciju(idSekcii) {
  var sekcje = ["dashboard-main", "conferences", "ai-translation", "settings"];
  for (var i = 0; i < sekcje.length; i++) {
    document.getElementById(sekcje[i]).style.display = "none";
  }
  document.getElementById(idSekcii).style.display = "block";

  // Btn podswetka
  var przyciski = ["btn-main", "btn-conf", "btn-ai", "btn-sett"];
  for (var j = 0; j < przyciski.length; j++) {
    document.getElementById(przyciski[j]).classList.remove("active");
  }
  if(idSekcii == "dashboard-main") document.getElementById("btn-main").classList.add("active");
  if(idSekcii == "conferences") document.getElementById("btn-conf").classList.add("active");
  if(idSekcii == "ai-translation") document.getElementById("btn-ai").classList.add("active");
  if(idSekcii == "settings") document.getElementById("btn-sett").classList.add("active");
}

// --- 2 kalkukator
function obliczOszczednosci() {
  var godziny = document.getElementById("calc-hours").value;
  var jezyki = document.getElementById("calc-langs").value;
  
  // Zwykly tłumacz = 100$ za godz na język
  // Prism AI = 5$ za godz na język
  var kosztLudzki = godziny * jezyki * 100;
  var kosztAI = godziny * jezyki * 5;
  var oszczednosc = kosztLudzki - kosztAI;

  document.getElementById("calc-result").innerText = oszczednosc + " $";
}
if(document.getElementById("calc-result")) obliczOszczednosci();
// --- 3 slajders
var aktualnySlajd = 0;
function nastepnySlajd() {
  var track = document.getElementById("slider-track");
  if (aktualnySlajd < 1) {
    aktualnySlajd++;
    track.style.transform = "translateX(-50%)";
  } else {
    aktualnySlajd = 0;
    track.style.transform = "translateX(0%)";
  }
}
function poprzedniSlajd() {
  var track = document.getElementById("slider-track");
  aktualnySlajd = 0;
  track.style.transform = "translateX(0%)";
}

// --- 4 konfy
function dodajKonferencje() {
  var nazwa = document.getElementById("conf-name").value;
  var data = document.getElementById("conf-date").value;
  
  if (nazwa == "" || data == "") {
  alert("Wypełnij nazwę i datę!");
  return;
  }

  var lista = document.getElementById("conf-list");
  
  if (lista.innerHTML.includes("Brak zaplanowanych")) {
  lista.innerHTML = "";
  }

  var nowyBlok = document.createElement("div");
  nowyBlok.className = "dash-card";
  nowyBlok.style.marginBottom = "10px";
  nowyBlok.innerHTML = 
  "<div class='conf-info'>" +
  "<strong>" + nazwa + "</strong>" +
  "<div class='conf-date'>📅 " + data + "</div>" +
  "</div>" +
  "<span class='status-badge'>Planowana</span>";
  
  lista.appendChild(nowyBlok);
  
  // Clear
  document.getElementById("conf-name").value = "";
  document.getElementById("conf-date").value = "";
}

// --- 5 paralax
window.addEventListener("scroll", function() {
  var scroll = window.scrollY;
  var fon = document.querySelector(".background-glow");
  if (fon) fon.style.transform = "translateY(" + (scroll * 0.3) + "px)";
  
  var kartochka = document.querySelector(".big-card");
  if (kartochka) kartochka.style.transform = "translateY(" + (scroll * -0.15) + "px)";
});

// --- !!!SETKA

window.addEventListener("mousemove", function(sobytie) {
  var setka = document.querySelector(".cursor-grid-glow");
  
  if (setka) {
  var x = sobytie.clientX;
  var y = sobytie.clientY;
  setka.style.setProperty("--x", x + "px");
  setka.style.setProperty("--y", y + "px");
  }
});