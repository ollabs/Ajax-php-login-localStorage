<?php

/** script by Ganjar seftian **/
/** ganjar.seftian20@gmail.com **/
/** www.antarz.com */
/** https://github.com/ollabs/Ajax-php-login-localStorage/upload   */

$host = 'localhost';
$user = 'root';
$password = '';
$db = 'latian';

$link=mysqli_connect($host,$user,$password,$db) or die (mysqli_error());

function load_users($email){
  $query = "SELECT * FROM anggota WHERE email='$email'";
  return runusers($query);
}
function register_user($nama,$username, $pass, $email){
  $nama = escape($nama);
  $username = escape($username);
  $pass = escape($pass);
  $email = escape($email);
  $query = "INSERT INTO anggota (nama,username, password, email, level) VALUES ('$nama', '$username', '$pass', '$email', 2)";
  return runusers($query);
}
function register_cek_user($email){
  $email = escape($email);
  global $link;
  $query = "SELECT * FROM anggota WHERE email='$email'";
  if($result = mysqli_query($link, $query)){
    if(mysqli_num_rows($result) ==0) return true;
    else return false;
  }
}
function cek_login($nama,$pass){
  $nama = escape($nama);
  $pass = escape($pass);
  global $link;
  $query = "SELECT * FROM anggota WHERE email='$nama' AND password='$pass'";
  if($result = mysqli_query($link, $query)){
    if(mysqli_num_rows($result) !=0) return true;
    else return false;
  }
}
function escape($data){
  global $link;
  return mysqli_real_escape_string($link,$data);
}
function cek_status($username){
  $nama = escape($username);
  global $link;
  $query = "SELECT level FROM anggota WHERE username='$nama'";
  if($result = mysqli_query($link, $query)){
    while($row = mysqli_fetch_assoc($result)){
      $status = $row['level'];
    }
    return $status;
  }
}

function runusers($query){
  global $link;
  if($result = mysqli_query($link,$query) or die ('gagal tampil data')){
    return $result;
  }
}
?>
