<?php

/** script by Ganjar seftian **/
/** ganjar.seftian20@gmail.com **/
/** www.antarz.com */
/** https://github.com/ollabs/Ajax-php-login-localStorage/upload   */

require "db.php";

if(isset($_GET["key"])){
if($_GET["key"]!=="semangat"){
return false;
exit();
}}


if(isset($_GET["opt"])){

if($_GET["opt"]=== "masuk"){
$email=htmlentities($_GET["email"]);
$pass=htmlentities($_GET["pass"]);
 if(!empty(trim($email)) && !empty(trim($pass))){
    if(cek_login($email, $pass)){
      $_SESSION['user'] = $email;
      //header('Location: index.php');
     $dtus = load_users($email);
     $u = mysqli_fetch_assoc($dtus);
     $akunku = json_encode($u,JSON_PRETTY_PRINT);
   /*echo'<script> localStorage.setItem("session",'.$akunku.');
</script>';
echo "1";*/
echo $akunku;
    }else {
      echo '0';
    }
}
}

if($_GET["opt"] === "daftar"){
$nama=htmlentities($_GET["nama"]);
$pass=htmlentities($_GET["pass"]);
$email=htmlentities($_GET["email"]);
   $iparr = explode("@", $email); 
   $username = "@".$iparr[0];

if(register_cek_user($email)){
$save = register_user($nama, $username, $pass, $email);
if($save){
echo "1"; //sukses
}else{
echo "0"; //gagal
}
}else{
echo "2";// akun sudah ada
//echo "Email sudah terdaftar di database kami!";
}


}

if($_GET["opt"]=== "keluar"){
unset($_SESSION['user']);
session_destroy();
}



}

?>
