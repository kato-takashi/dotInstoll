<?php
/*
サービス公開時とそうでない時で記述をいちいち書き換えるのは面倒な上にミスの元なので、極力最小の労力で設定が書き換わるようにしておくのが望ましい。以下はURLがlocalhostか否かで設定を切り替える例。
*/
$is_develop = $_SERVER['HTTP_HOST'] === 'localhost';
if($is_develop){
      error_reporting(E_ALL);
        ini_set('display_errors', '1');
}else{
      error_reporting(E_ALL ^ E_NOTICE);
        ini_set('display_errors', '0');
          }
          /**************/

require_once('common/htmlESC.php');
require_once('common/config.php');
require_once('common/connectDb.php');

///////
$title='ログイン';
?>

<!DOCTYPE html>
<html lang="ja">
	<head>
	<meta chrset="UTF-8">
	<title><?php echo h($title)?></title>
	</head>
	<body>
		<h1><?php echo h($title)?> home</h1>
			<a href='redirect.php'>Googleアカウントでログインする</a>
	</body>
</html>