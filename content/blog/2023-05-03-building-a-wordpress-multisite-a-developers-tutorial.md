---
title: 'Building a WordPress Multisite: A Developer’s Tutorial'
draft: true
author: WP-Tactics
type: post
date: 2023-05-03T21:55:12+00:00
url: /building-a-wordpress-multisite-a-developers-tutorial/
rank_math_internal_links_processed:
  - 1
rank_math_seo_score:
  - 7
rank_math_primary_category:
  - 1
wpaicg_toc_title:
  - Table of Contents
wpaicg_toc_title_tag:
  - h2
wpaicg_intro_title_tag:
  - h2
wpaicg_conclusion_title_tag:
  - h2
rank_math_analytic_object_id:
  - 26
categories:
  - All tips and tricks

---
WordPress Multisite is a powerful feature that allows you to create multiple websites using a single WordPress installation. This feature is particularly useful for developers who need to create and manage multiple websites for their clients. In this tutorial, we will guide you through the steps to create a WordPress Multisite.

But first, let&#8217;s take a closer look at the key features and advantages of WordPress Multisite, some diadvantages and example use cases:

## Key Features: {.wp-block-heading}

  1. **Multiple Sites:** With WordPress Multisite, you can create and manage multiple websites using a single installation of WordPress.
  2. **Shared Resources:** All the sites in your network share the same resources, including themes, plugins, and user accounts.
  3. **Centralized Management:** You can manage all the sites in your network from a single dashboard.
  4. **Scalability:** WordPress Multisite is highly scalable and can handle a large number of sites.
  5. **Customization:** You can customize each site in your network with its own theme, plugins, and settings.

## Advantages: {.wp-block-heading}

  1. **Cost Savings:** Building multiple sites using a single WordPress installation can be more cost-effective than building each site separately.
  2. **Centralized Management:** With WordPress Multisite, you can manage all your sites from a single dashboard, which can save you time and effort.
  3. Easy Maintenance: Maintenance tasks such as updates and backups can be performed on all your sites at once, saving you time and effort.
  4. **Consistent Branding:** With WordPress Multisite, you can ensure that all your sites have a consistent look and feel, which can help with branding.

## Disadvantages: {.wp-block-heading}

  1. **Complexity:** Setting up and managing a WordPress Multisite can be more complex than managing a single WordPress site.
  2. **Customization Limitations:** While each site in your network can be customized, there are some limitations on what can be customized.
  3. **Plugin Compatibility:** Not all plugins are compatible with WordPress Multisite, which can limit your options.

## Example Use Cases: {.wp-block-heading}

  1. **Education:** A university or college can use WordPress Multisite to create and manage multiple websites for different departments, schools, or programs.
  2. **Media:** A media company can use WordPress Multisite to create and manage multiple websites for different publications or channels.
  3. **E-commerce:** An e-commerce company can use WordPress Multisite to create and manage multiple websites for different product categories or regions.
  4. **Other non-profit:** A non-profit organization can use WordPress Multisite for different localized versions depending on country or region.



## Step 1: Install WordPress (like&#8230;yea, duh&#8230;) {.wp-block-heading}

Before you can create a WordPress Multisite, you need to install WordPress. You can download the latest version of WordPress from the official website. Once you have downloaded WordPress, follow the installation instructions to complete the installation.

## Step 2: Configure Your WordPress Installation {.wp-block-heading}

Once you have installed WordPress, you need to configure it to support Multisite. Open the wp-config.php file in your WordPress installation directory and add the following code:

<pre class="wp-block-preformatted"><code>define('WP_ALLOW_MULTISITE', true);
</code>
And here's the code you need to add to your .htaccess file:

<code>RewriteEngine On
RewriteBase /
RewriteRule ^index\.php$ - [L]

# add a trailing slash to /wp-admin
RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

# handle WordPress Multisite
RewriteRule ^([_0-9a-zA-Z-]+/)?(wp-(content|admin|includes).*) $2 [L]
RewriteRule ^([_0-9a-zA-Z-]+/)?(.*\.php)$ $2 [L]
RewriteRule . index.php [L]</code>

Save the file and refresh your WordPress dashboard. You should now see a new menu item called 'Network Setup' under the 'Tools' menu.</pre>

## Step 3: Create the Network {.wp-block-heading}

Click on the &#8216;Network Setup&#8217; menu item to create the network. WordPress will prompt you to choose between sub-domains and sub-directories. Choose the option that best suits your needs.

Once you have made your selection, click on the &#8216;Install&#8217; button to create the network. WordPress will then display some additional instructions that you need to follow.

## Step 4: Configure Your Network {.wp-block-heading}

Now that you have created the network, you need to configure it. Open the wp-config.php file again and add the following code:

<pre class="wp-block-preformatted"><code>define('MULTISITE', true);
define('SUBDOMAIN_INSTALL', false);
define('DOMAIN_CURRENT_SITE', 'yourdomain.com');
define('PATH_CURRENT_SITE', '/');
define('SITE_ID_CURRENT_SITE', 1);
define('BLOG_ID_CURRENT_SITE', 1);
</code></pre>

Replace &#8216;yourdomain.com&#8217; with your own domain name. Save the file and refresh your WordPress dashboard. You should now see a new &#8216;Network Admin&#8217; menu item in the top toolbar.

## Step 5: Create a New Site {.wp-block-heading}

To create a new site, click on the &#8216;Sites&#8217; menu item in the &#8216;Network Admin&#8217; dashboard. Click on the &#8216;Add New&#8217; button to create a new site. You will be prompted to enter some details about the site, such as the site&#8217;s title and URL.

## Step 6: Manage Your Sites {.wp-block-heading}

You can manage your sites by clicking on the &#8216;Sites&#8217; menu item in the &#8216;Network Admin&#8217; dashboard. From here, you can edit site details, delete sites, and add new sites.

## Conclusion {.wp-block-heading}

Creating a WordPress Multisite is a powerful way to manage multiple websites using a single installation of WordPress. In this tutorial, we have shown you how to create a WordPress Multisite and manage your sites. With these steps, you can easily build and manage multiple websites for your clients.



## Code examples and snippets {.wp-block-heading}

Here are a few code examples/snippets specifically for WordPress Multisite:

  1. **Enabling Multisite**

To enable Multisite, you need to add some code to your `wp-config.php` file and `.htaccess` file. Here&#8217;s the code you need to add to your `wp-config.php` file:

<pre class="wp-block-preformatted"><code>/* Enable Multisite */
define('WP_ALLOW_MULTISITE', true);
</code></pre>

And here&#8217;s the code you need to add to your `.htaccess` file:

<pre class="wp-block-preformatted"><code>RewriteEngine On
RewriteBase /
RewriteRule ^index\.php$ - [L]

# add a trailing slash to /wp-admin
RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

# handle WordPress Multisite
RewriteRule ^([_0-9a-zA-Z-]+/)?(wp-(content|admin|includes).*) $2 [L]
RewriteRule ^([_0-9a-zA-Z-]+/)?(.*\.php)$ $2 [L]
RewriteRule . index.php [L]</code></pre>

After adding these code snippets, go to your WordPress dashboard and you&#8217;ll see a new menu item called &#8216;Network Setup&#8217;. Click on it and follow the steps to set up your Multisite network.

<ol start="2">
  <li>
    <strong>Creating a New Site</strong>
  </li>
</ol>

To create a new site in your Multisite network programmatically, you can use the `wpmu_create_blog()` function. Here&#8217;s an example:

<pre class="wp-block-preformatted"><code>// create a new site with the title 'My New Site' and the URL 'my-new-site.example.com'
wpmu_create_blog( 'my-new-site', 'my-new-site.example.com', 'My New Site', 1 );
</code>
The first parameter is the site's slug, which should be unique in your network. The second parameter is the site's domain, which can be a subdomain or a subdirectory. The third parameter is the site's title, and the fourth parameter is the ID of the user who will be the site's administrator.</pre>

<ol start="3">
  <li>
    <strong>Adding a New User to a Site</strong>
  </li>
</ol>

To add a new user to a specific site in your Multisite network, you can use the `add_user_to_blog()` function. Here&#8217;s an example:

<pre class="wp-block-preformatted"><code>// add a new user with the username 'newuser' to the site with the ID 2
add_user_to_blog( 2, 'newuser', 'subscriber' );
</code></pre>

The first parameter is the ID of the site you want to add the user to, the second parameter is the username of the new user, and the third parameter is the role you want to assign to the user (e.g., subscriber, editor, administrator).

<ol start="4">
  <li>
    <strong>Adding a Custom Dashboard Widget</strong>
  </li>
</ol>

To add a custom dashboard widget to your Multisite network, you can use the `wp_add_dashboard_widget()` function. Here&#8217;s an example:

<pre class="wp-block-preformatted"><code>function custom_dashboard_widget() {
    echo '&lt;p>Hello, world!&lt;/p>';
}
 
function add_custom_dashboard_widget() {
    wp_add_dashboard_widget( 'custom_dashboard_widget', 'Custom Widget', 'custom_dashboard_widget' );
}
add_action( 'wp_dashboard_setup', 'add_custom_dashboard_widget' );
</code></pre>

In this example, we&#8217;re creating a custom function `custom_dashboard_widget()` that outputs a simple greeting message. Then we&#8217;re adding this function to the dashboard using `wp_add_dashboard_widget()` and specifying the widget title &#8216;Custom Widget&#8217; and the callback function `custom_dashboard_widget()`. Finally, we&#8217;re hooking this function to the `wp_dashboard_setup` action using `add_action()`.

<ol start="5">
  <li>
    <strong>Restricting Access to Network Administration</strong>
  </li>
</ol>

By default, any user with the role of &#8216;Super Admin&#8217; can access the Network Administration section of your Multisite network. If you want to restrict access to this section, you can use the `is_super_admin()` function to check if the current user has the &#8216;Super Admin&#8217; role. Here&#8217;s an example:

<pre class="wp-block-preformatted"><code>function restrict_network_admin_access() {
    if ( ! is_super_admin() ) {
        wp_die( __( 'You do not have sufficient permissions to access this page.' ), __( 'Network Admin' ), array( 'response' => 403 ) );
    }
}
add_action( 'admin_init', 'restrict_network_admin_access' );
</code></pre>

In this example, we&#8217;re creating a custom function `restrict_network_admin_access()` that checks if the current user is a &#8216;Super Admin&#8217;. If the user is not a &#8216;Super Admin&#8217;, we&#8217;re displaying an error message using `wp_die()` and passing in the error message, the error title, and the response code 403 (Forbidden). Finally, we&#8217;re hooking this function to the `admin_init` action using `add_action()`.

<ol start="6">
  <li>
    <strong>Customizing the Login Page</strong>
  </li>
</ol>

To customize the login page for your Multisite network, you can use the `login_enqueue_scripts` and `login_message` hooks. Here&#8217;s an example:

<pre class="wp-block-preformatted">phpCopy code<code>function custom_login_stylesheet() {
    wp_enqueue_style( 'custom-login', get_stylesheet_directory_uri() . '/custom-login.css' );
}
add_action( 'login_enqueue_scripts', 'custom_login_stylesheet' );

function custom_login_message() {
    echo '&lt;p&gt;Welcome to my Multisite network!&lt;/p&gt;';
}
add_action( 'login_message', 'custom_login_message' );
</code></pre>

In this example, we&#8217;re creating a custom function `custom_login_stylesheet()` that enqueues a custom stylesheet called `custom-login.css`. Then we&#8217;re hooking this function to the `login_enqueue_scripts` action using `add_action()`. Next, we&#8217;re creating another custom function `custom_login_message()` that outputs a simple welcome message. Finally, we&#8217;re hooking this function to the `login_message` action using `add_action()`.

<ol start="7">
  <li>
    <strong>Adding Custom Meta Boxes to Site Settings</strong>
  </li>
</ol>

To add custom meta boxes to the site settings page for your Multisite network, you can use the `add_site_option_meta_box()` function. Here&#8217;s an example:

<pre class="wp-block-preformatted"><code>function custom_site_settings_meta_box() {
    add_meta_box( 'custom_site_settings', 'Custom Site Settings', 'custom_site_settings_callback', 'site' );
}
add_action( 'add_site_option_meta_boxes', 'custom_site_settings_meta_box' );

function custom_site_settings_callback() {
    echo '&lt;label for="custom_site_setting">Custom Site Setting:&lt;/label>';
    echo '&lt;input type="text" id="custom_site_setting" name="custom_site_setting" value="' . get_site_option( 'custom_site_setting' ) . '">';
}
</code></pre>

In this example, we&#8217;re creating a custom function `custom_site_settings_meta_box()` that adds a new meta box called &#8216;Custom Site Settings&#8217; to the site settings page using `add_meta_box()`. We&#8217;re specifying the meta box ID, title, callback function `custom_site_settings_callback()`, and the post type &#8216;site&#8217;. In `custom_site_settings_callback()`, we&#8217;re outputting a simple text input field to get and display the value of the &#8216;custom\_site\_setting&#8217; option. Finally, we&#8217;re hooking the `custom_site_settings_meta_box()` function to the `add_site_option_meta_boxes` action using `add_action()`.

<ol start="8">
  <li>
    <strong>Creating a Custom Site Template</strong>
  </li>
</ol>

If you want to create a custom site template that users can select when creating a new site in your Multisite network, you can use the `wpmu_new_blog` action and the `switch_to_blog()` function. Here&#8217;s an example:

<pre class="wp-block-preformatted"><code>function create_custom_site_template( $blog_id, $user_id, $domain, $path, $site_id, $meta ) {
    switch_to_blog( $blog_id );
 
    // Create custom site content
    $post_id = wp_insert_post( array(
        'post_title' => 'Welcome to my site!',
        'post_content' => 'This is some sample content for your new site.',
        'post_status' => 'publish',
        'post_type' => 'page',
        'post_author' => $user_id,
    ) );
 
    // Set custom site options
    update_option( 'blogname', 'My Custom Site Name' );
    update_option( 'blogdescription', 'This is a custom site description.' );
 
    // Restore original blog
    restore_current_blog();
}
add_action( 'wpmu_new_blog', 'create_custom_site_template', 10, 6 );
</code></pre>

In this example, we&#8217;re creating a custom function `create_custom_site_template()` that takes in 6 parameters: the new blog ID, the user ID, the domain, the path, the site ID, and the meta data. We&#8217;re then using `switch_to_blog()` to switch to the new blog, and creating a new page using `wp_insert_post()`. We&#8217;re specifying the post title, content, status, type, and author ID. We&#8217;re also setting custom site options using `update_option()`. Finally, we&#8217;re using `restore_current_blog()` to switch back to the original blog, and hooking this function to the `wpmu_new_blog` action using `add_action()`.