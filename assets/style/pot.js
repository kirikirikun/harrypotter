function tampilkan(){
 
    var nama_mantra=document.getElementById("form1").select1.value;
    var p_fungsi=document.getElementById("charm");
   
    if (nama_mantra=="alohomora")
      {
          p_fungsi.innerHTML="Alohomora merupakan sebuah mantra yang digunakan untuk membuka pintu yang terkunci";
      }
    else if (nama_mantra=="lumos")
      {
          p_fungsi.innerHTML="Lumos merupakan sebuah mantra yang digunakan untuk membuat cahaya sebagai penerangan";
      }
    else if (nama_mantra=="wingardiumLeviosa")
      {
          p_fungsi.innerHTML="Wingardium Leviosa merupakan mantra dasar. Mantra ini berfungsi membuat sebuah benda/makhluk hidup melayang.";
      }
    else if(nama_mantra=="expelliarmus"){
        p_fungsi.innerHTML="Expelliarmus merupakan mantra sihir yang sering digunakan dalam seri harry potter. Mantra ini berfungsi untuk melucuti/menjatuhkan tongkat musuh";
    }
    else if(nama_mantra=="crucio"){
        p_fungsi.innerHTML="Crucio merupakan salah satu dari mantra kutukan. Mantra ini mengutuk korbannya dengan membuat sakit tubuhnya";
    }
    else if(nama_mantra=="avadaKedavra"){
        p_fungsi.innerHTML="Avada Kedavra merupakan mantra yang sering digunakan voldemort. Mantra ini dapat langsung membunuh korbannya";
    }
    else if(nama_mantra=="accio"){
        p_fungsi.innerHTML="Accio merupakan mantra untuk menemukan barang. Dengan menyebut 'Accio nama barang' maka barang yang diambil akan menghampiri";
    }
    else if(nama_mantra=="protego")
        p_fungsi.innerHTML="Protego merupakan mantra pelindung yang berguna untuk melindungi diri dari serangan musuh";
  }