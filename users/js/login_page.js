/** script by Ganjar seftian **/
/** ganjar.seftian20@gmail.com **/
/** www.antarz.com */
/** https://github.com/ollabs/Ajax-php-login-localStorage/upload   */

var serverweb = "http://localhost:8080/users/";
	var config = {"appname":"Latian Login","versi":"1.0.0 beta"};
window.fn = {};
window.fn.data = null;

ons.ready(function(){

 var ses = localStorage.getItem("session");
 
  if(ses){
  window.location.href="./index.html";
  }
var hash = window.location.hash;
	if(hash){
	 ons.notification.alert("Lanjutkan login menggunakan akun yang baru kamu daftarkan!");
	}
  document.addEventListener("show", function(event){
  captcha();
  $("#appname").html(config.appname);
  $("#versi").html(config.versi);
  
    if(event.target.id=='myPage2Id') {
      document.getElementById('myData').innerHTML = document.getElementById('myInput').value;
    }
    if(event.target.id=='myPage3Id') {
      document.getElementById('myData3').innerHTML = fn.data;
      // This does not need to be set to null; however, by doing so you are running GC
      fn.data = null;
    }
  });

  var myTabBar = document.getElementById('myTabBar')
  myTabBar.addEventListener("postchange", function(event) {
    if (event.index == 1) {
	
      document.getElementById('myData2').innerHTML = document.getElementById('myInput').value;
    }
  });
});


	
	var login = function() {
	var wait = $("#wait");
	wait.fadeIn();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username === '') {
    ons.notification.alert('Masukan akun kamu untuk masuk!');
	wait.fadeOut();
	return false;
	} else if(password === ""){
	ons.notification.alert('Masukan akun kamu untuk masuk!');
	wait.fadeOut();
	return false;
	}else{
  $.get(serverweb+"proses.php?key=semangat&opt=masuk&email="+username+"&pass="+password,function(result){
  //alert(result);
  if(result == 0){
  wait.fadeOut();
  $("#result").html("Cek kembali data akun yang kamu masukan!");
  //ons.notification.alert("Cek kembali data akun yang kamu masukan!");
  } else{
  wait.fadeOut();
   $("#result").html("Berhasil..Silahkan tunggu!!");
   localStorage.setItem("session",result);
   window.location.href="./index.html";

  }
  });
      }
};

var daftar = function() {
	var wait = $("#d-result");
	wait.html('<ons-icon id="d-wait" size="30px" spin icon="md-spinner"></ons-icon>');
	wait.fadeIn();
	var d_nama = document.getElementById('d-nama').value;
	var d_password2 = document.getElementById('d-password2').value;
	var d_email = document.getElementById('d-email').value;
	var d_password = document.getElementById('d-password').value;
	var d_captcha = document.getElementById('d-captcha').value;
	var ses_captcha = localStorage.getItem("captcha");
 
	if (d_nama === '') {
    wait.html('Isi nama lengkap kamu!');
	//wait.fadeOut();
	return false;
	} else 
	if (d_email === '') {
    wait.html('Isi email aktif kamu!');
	return false;
	} else if (d_password === '') {
    wait.html('Buat password untuk masuk!');
	return false;
	} else 
	if(d_password2 === ""){
	wait.html('Ulangi password yang sama!');
	return false;
	}else if (d_captcha === '') {
    wait.html('Masukan dan ikuti angka captcha code!');
	return false;
	} else 
	if (d_captcha !== ses_captcha) {
    wait.html('Captcha kode yang kamu masukan tidak sama!');
	return false;
	} else 
	{
	
	$.get(serverweb+"proses.php?key=semangat&opt=daftar&nama="+d_nama+"&pass="+d_password+"&email="+d_email,function(result){
	
		if(result ==1){
	wait.html("Pendaftaran akun kamu berhasil,,Silahkan login untuk melanjutkan!");
	$("#d-nama").val("");
	$("#d-email").val("");
	$("#d-password").val("");
	$("#d-password2").val("");
	$("#d-captcha").val("");
}
	if(result ==0){
	wait.html("Data gagal di proses!Silahkan ulangi!");
	}
	if(result == 2){
	wait.html("Email sudah terdaftar di database kami!");
	}
	
	});

      }
};

var lupas = function(){
var ses_cp = localStorage.getItem("captcha");
var l_email = document.getElementById('l-email').value;
var l_captcha = document.getElementById('l-captcha').value;
var wait = $("#l-result");
	wait.html('<ons-icon id="d-wait" size="30px" spin icon="md-spinner"></ons-icon>');

	if(l_email == ""){
wait.html("Masukan email yang terkait dengan akun kamu untuk mendapatkan password baru!");
return false;
}
if(l_email.indexOf("@") < 0){
wait.html("Alamat email kamu tidak valid!");
return false;
}
if(l_captcha === ""){
wait.html("Masukan dan ikuti captcha kode!"); 
return false;
}else if(l_captcha !== ses_cp){
wait.html("Pastikan captcha kode yang kamu masukan sama!");
return false;
}else{
	/*--Script proses */
	
	/*script proses end*/
wait.html("");
$("#l-email").val("");
$("#l-captcha").val("");
captcha();
}


};

function captcha(){
         var captcha=Math.floor((Math.random() * 100000) + 1);
localStorage.setItem("captcha", captcha);
   $(".captcha").html(captcha);
      }

