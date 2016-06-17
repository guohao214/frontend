<?php
ob_start();
$time = date('Y-m-d');
header('Content-Type:text/event-stream');
header('Cache-Control: no-cache');

session_start();

echo "event:test\n\n";
$session = &$_SESSION;
$sessionId = $session['s_id'] + 1;
$session['s_id'] = $sessionId;
array_push($session['data'], $sessionId);
echo "id:{$sessionId}\n\n";

$headers = getallheaders();
foreach ($headers as $key => $value) {
	if ($key === "Last-Event-ID")
		$lastId = $value + 1;
}

if ($lastId != $sessionId) {
	echo "data:{$sessionId}\n\n" ;
} else {
	echo "data:" . join('-', $session['data'])  . "\n\n";
}

// 发送的事件名
// 发送的数据 已data开头，
// 多少行data会产生多少个event 
// echo "data:现在北京\n\n";
// echo "data:北京时间\n\n";
// echo "data:{$time}\n\n";
ob_flush();
flush();