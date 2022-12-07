<?php header('Content-Type: text/html; charset=utf-8');

//Пример создан сайтом http://blogjquery.ru/ajax-rdmailform-forma-otpravki-soobshhenij-bez-perezagruzki-stranicy/

//Первая форма
if(isset($_POST['email']) && !empty($_POST['email'])) {
$to = '7plitka@mail.ru';
$subject = 'Сообщение с сайта '.$_SERVER['SERVER_NAME'];
$charset = "utf-8";
$headerss ="Content-type: text/html; charset=$charset\r\n";
$headerss.="Date: ".date('D, d M Y h:i:s')."\r\n";
$msgotprav = 'Ваш телефон: '.$_POST['phone'].'<br>Текст сообщения: '.$_POST['message'];
$msgotprav .= '<br><br>Отправлено со страницы: '.$_SERVER['HTTP_REFERER'];
mail($to, $subject, $msgotprav, $headerss);
echo 'MF000'; //если сообщение отправлено ajax-ом - выводим статус успешной доставки
}


//Вторая форма
//if(isset($_POST['name2']) && !empty($_POST['name2'])) {

//echo 'MF255'; //если сообщение отправлено ajax-ом - выводим статус успешной доставки
//}

?>