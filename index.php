<?php
// +----------------------------------------------------------------------
// | PHPBMS [ PHP BMS ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013 All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: JY
// +----------------------------------------------------------------------

// PHPBMS 入口文件
// 记录开始运行时间
$GLOBALS['_beginTime'] = microtime(TRUE);

// 记录内存初始使用
define('MEMORY_LIMIT_ON', function_exists('memory_get_usage'));
if (MEMORY_LIMIT_ON) {
    $GLOBALS['_startUseMems'] = memory_get_usage();
}

// 系统目录定义
defined('APP_PATH') 	or define('APP_PATH', dirname($_SERVER['SCRIPT_FILENAME']).'/');
defined('RUNTIME_PATH') or define('RUNTIME_PATH', realpath(APP_PATH).'/runtime/');
defined('APP_DEBUG') 	or define('APP_DEBUG', false); // 是否调试模式

$runtime = defined('MODE_NAME')?'~'.strtolower(MODE_NAME).'_runtime.php':'~runtime.php';
defined('RUNTIME_FILE') or define('RUNTIME_FILE', RUNTIME_PATH.$runtime);
if(!APP_DEBUG && is_file(RUNTIME_FILE)) {
    require RUNTIME_FILE;
} else {
    // 加载运行时文件
    require APP_PATH.'common/runtime.php';
}
