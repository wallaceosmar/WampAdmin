<?php

/*
 * The MIT License
 *
 * Copyright 2017 wallaceosmar.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

namespace WA\Config;

/**
 * Description of WampServer
 *
 * @author wallaceosmar <wallace.osmar@hotmail.com>
 * 
 * @property string $language
 * @property string $status
 * @property string $wampserverVersion
 * @property string $installDir
 * @property string $navigator
 * @property string $editor
 * @property string $defaultLanguage
 * @property string $wampserverMode
 * @property string $AliasSubmenu
 * @property string $NotCheckVirtualHost
 * @property string $NotCheckDuplicate
 * @property string $ItemServicesNames
 * @property string $VirtualHostSubMenu
 * @property string $ProjectSubMenu
 * @property string $HomepageAtStartup
 * @property string $urlAddLocalhost
 * @property string $MenuItemOnline
 * @property string $VhostAllLocalIp
 * @property string $SupportMySQL
 * @property string $SupportMariaDB
 * @property string $phpVersion
 * @property string $phpIniDir
 * @property string $phpConfFile
 * @property string $phpExeDir
 * @property string $mysqlDefaultPort
 * @property string $phpCliVersion
 * @property string $phpExeFile
 * @property string $phpCliFile
 * @property string $apacheVersion
 * @property string $apacheExeDir
 * @property string $apacheConfDir
 * @property string $apacheExeFile
 * @property string $apacheConfFile
 * @property string $apacheServiceInstallParams
 * @property string $apacheServiceRemoveParams
 * @property string $apacheUseOtherPort
 * @property string $apachePortUsed
 * @property string $mysqlVersion
 * @property string $mysqlConfDir
 * @property string $mysqlConfFile
 * @property string $mysqlExeDir
 * @property string $mysqlExeFile
 * @property string $mysqlServiceInstallParams
 * @property string $mysqlServiceRemoveParams
 * @property string $mysqlPortUsed
 * @property string $mysqlUseOtherPort
 * @property string $ServiceApache
 * @property string $ServiceMysql
 * @property string $ServiceMariadb
 * @property string $mariadbVersion
 * @property string $mariadbConfDir
 * @property string $mariadbConfFile
 * @property string $mariadbExeDir
 * @property string $mariadbExeFile
 * @property string $mariadbServiceInstallParams
 * @property string $mariadbServiceRemoveParams
 * @property string $mariaPortUsed
 * @property string $mariaUseOtherPort
 */
class WampServer {
    
    private $configdata = array();
    
    /**
     * 
     */
    public function __construct() {
        $dirpath = dirname( dirname( ABSPATH ) );
        if ( file_exists( $filename =  ( $dirpath . '/wampmanager.conf' ) ) ) {
            $this->configdata = parse_ini_file( $filename );
        }
        
        //var_dump( $this->configdata );
        //exit;
    }
    
    /**
     * 
     * @param string $name
     * 
     * @return mixed
     */
    public function __get($name) {
        return $this->configdata[ $name ];
    }
    
    /**
     * 
     * @param type $name
     * 
     * @return type
     */
    public function __isset($name) {
        return isset( $this->configdata[ $name ] );
    }
    
}
