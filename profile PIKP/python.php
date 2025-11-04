<?php
include "koneksi.php"; // Gantilah "koneksi.php" dengan nama file koneksi yang sesuai

$data = mysqli_fetch_array(mysqli_query($koneksi, "SELECT * FROM tb_mahasiswa WHERE id_mhs='$_GET[id]'"));

if ($data['gambar'] != "") {
    unlink("gambar/{$data['gambar']}");
}

mysqli_query($koneksi, "DELETE FROM tb_mahasiswa WHERE id_mhs='$_GET[id]'") or die(mysqli_error($koneksi));

echo "Data telah dihapus";
echo "<meta http-equiv='refresh' content='1; url=index.php'>";
?>