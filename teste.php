<?php
if(isset($_POST['add']))
{
$dbhost = "localhost";
$dbuser = "id2091427_makoto";
$dbpass  = "12345678";
$dbname = "id2091427_nowhere";
$conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
if(! $conn )
{
  die('Could not connect: ' . mysql_error() ."<a class='btn' href='index.html'>Voltar</a>");
}

if(! get_magic_quotes_gpc() )
{
   $tag = addslashes ($_POST['tag']);
}
else
{
  $tag = ($_POST['tag']);
}

$comAcentos = array('à', 'á', 'â', 'ã', 'ä', 'å', 'ç', 'è', 'é', 'ê', 'ë', 'ì', 'í', 'î', 'ï',
'ñ', 'ò', 'ó', 'ô', 'õ', 'ö', 'ù', 'ü', 'ú', 'ÿ', 'À', 'Á', 'Â', 'Ã', 'Ä', 'Å',
'Ç', 'È', 'É', 'Ê', 'Ë', 'Ì', 'Í', 'Î', 'Ï', 'Ñ', 'Ò', 'Ó', 'Ô', 'Õ', 'Ö', 'O',
'Ù', 'Ü', 'Ú');

$semAcentos = array('a', 'a', 'a', 'a', 'a', 'a', 'c', 'e', 'e', 'e', 'e', 'i', 'i', 'i', 'i', 'n', 'o', 'o', 'o', 'o', 'o', 'u', 'u',
'u', 'y', 'A', 'A', 'A', 'A', 'A', 'A', 'C', 'E', 'E', 'E', 'E', 'I', 'I', 'I', 'I', 'N', 'O', 'O', 'O', 'O', 'O', '0', 'U',
'U', 'U');
$tag = str_replace($comAcentos, $semAcentos, $tag);

$espaco = ' ';
$semespaco = '+';
$tag = str_replace($espaco, $semespaco, $tag);


$sql = "INSERT INTO google ".
       "(tag)".
       "VALUES ".
       "('$tag')";
$retval = mysqli_query( $conn,$sql );
if(! $retval )
{
  die('Não foi possivel completar o envio: "<a class="btn" href="links.php">Voltar</a>"');
}
echo "NOVO item adicionado com sucesso <br> OBRIGADO PELA CONTRIBUIÇÃO\n";
echo "<a class='btn' href='tag.php'>Voltar</a>";
mysqli_close($conn);
}
else
{
?>
<form method="post" action="<?php $_PHP_SELF ?>">
</form>
<?php
}
?>
