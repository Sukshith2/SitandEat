<?php
/** Enable W3 Total Cache */
define('WP_CACHE', true); // Added by W3 Total Cache


/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'if042322031_wp958' );

/** Database username */
define( 'DB_USER', '42322031_1' );

/** Database password */
define( 'DB_PASSWORD', 'FSp)51gi3!' );

/** Database hostname */
define( 'DB_HOST', 'sql213.byetcluster.com' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'yhhk3j1gcpecwxfogctlnkmfesuyegisjdo94g8s3y74ffrmgkrcv3fpm76jsekc' );
define( 'SECURE_AUTH_KEY',  'uqzxxacrbsycloeftqqpnw4icxefjafrxeoxfwhw7dapluxbfr43hgljoww7dutj' );
define( 'LOGGED_IN_KEY',    'ajussza9jj4zybuxp6ylsudog6qjw7zy77ae81yumae9nicxpkahyxqhbxmwkfam' );
define( 'NONCE_KEY',        'dxti3ayo9rurebdbbshq4amkgnblv9yq6frdwrtgkaovw64iaqhfjduk9tcjjqbp' );
define( 'AUTH_SALT',        'pms83macoootbymcsszzhe6oxvvrr1nyq7lybqkhl0r1pwns4vkz1ekq3qxepy2a' );
define( 'SECURE_AUTH_SALT', '31t6rwtxdknxa8u1sp2wquk6uircavxofaeeilouaeqmmpkkbcinrzobzkf90xuy' );
define( 'LOGGED_IN_SALT',   'ksyefq9v7dsimcq4lbwcvuxklte6wk4isfku5zlevzjhmsbm7isn8skjszexupsr' );
define( 'NONCE_SALT',       'nwzl0s2q99kyjxq7wr4uochxngpex1ifdxkf76fl46svex1ogzmghhism8gnluay' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wpl9_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
