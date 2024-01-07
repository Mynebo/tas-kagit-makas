/* SEÇİM İŞLEMLERİ */

const oyuncu_skor = document.getElementsByClassName("oyuncu_skor")[0];
const bilgisayar_skor = document.getElementsByClassName("bilgisayar_skor")[0];
const tas=document.getElementById("tas");
const kagit=document.getElementById("kagit");
const makas=document.getElementById("makas");
const oyuncu_secimi=document.getElementById("oyuncu_secimi");
const bilgisayar_secimi=document.getElementById("bilgisayar_secimi");
const mesaj =document.getElementsByClassName("mesaj")[0];

/* SEÇİM İŞLEMLERİ */

let oyuncu=0;
let bilgisayar=0;

function bilgisayarSecim(){
const secim=["tas","kagit","makas"];
const rasgeleSayi=Math.floor(Math.random()*3);
//console.log(rasgeleSayi);
bilgisayar_secimi.setAttribute("src",`res/${secim[rasgeleSayi]}.png`)
return secim[rasgeleSayi];
}
//bilgisayarSecim();

function eventListeners(){
    tas.addEventListener("click",function(){
        //console.log("Çalıştı");
        oyuncu_secimi.setAttribute("src",`res/tas.png`);
        let bil_secim=bilgisayarSecim();
        sonuc("tas",bil_secim);
    });
    kagit.addEventListener("click",function(){
        //console.log("Çalıştı");
        oyuncu_secimi.setAttribute("src",`res/kagit.png`);
        let bil_secim=bilgisayarSecim();
        sonuc("kagit",bil_secim);
    });
   
    makas.addEventListener("click",function(){
        //console.log("Çalıştı");
        oyuncu_secimi.setAttribute("src",`res/makas.png`);
        let bil_secim=bilgisayarSecim();
        sonuc("makas",bil_secim);
    });
}
eventListeners();
/*SONUÇ OLAYI*/ 
 function sonuc(oyuncu,bilgisayar){
    switch(oyuncu+bilgisayar){
        case "tasmakas":
        case "kagittas":
        case "makaskagit":
            kazan();
        break;

        case "taskagit":
        case "kagitmakas":
        case "makastas":
            kaybet();
        break;
        case "tastas":
        case "kagitkagit":
        case "makasmakas":
            berabere();
        break;
        default:"HATA!!";
        break;
    }
    
 }
 /*SONUÇ OLAYI*/ 
 
 function showCustomAlert(message) {
    document.getElementById('alertMessage').innerHTML = message;
    document.getElementById('customAlert').style.display = 'block';
  }
  
  function kapatCustomAlert() {
    document.getElementById('customAlert').style.display = 'none';
  }


 function kazan(){
    oyuncu+=1;
    mesaj.innerHTML="SİZ KAZANDINIZ";
    oyuncu_skor.innerHTML=oyuncu.toString();
    if(oyuncu >= 5){
        showCustomAlert("SİZ KAZANDINIZ");
        skorlariSifirla();
    }
}

function kaybet(){
    bilgisayar+=1;
    mesaj.innerHTML="Rakip KAZANDI";
    bilgisayar_skor.innerHTML=bilgisayar.toString();
    if(bilgisayar >= 5){
        showCustomAlert("Rakip kazandı");
        skorlariSifirla();
    }
}

function skorlariSifirla() {
    oyuncu = 0;
    bilgisayar = 0;
    oyuncu_skor.innerHTML = "0";
    bilgisayar_skor.innerHTML = "0";
}

function berabere(){
    mesaj.innerHTML="Rakip KAZANDI";
    mesaj.innerHTML="BERABERE";
 }
