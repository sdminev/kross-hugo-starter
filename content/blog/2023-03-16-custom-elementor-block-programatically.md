---
title: Creating a Custom Elementor Block Programatically like a professional
author: WP-Tactics Team
type: post
date: 2023-03-16T19:46:27+00:00
excerpt: "Hey there, savvy WordPress users! You know Elementor, right? It's that amazing plugin that lets you build gorgeous website designs without having to write a single line of code. Well, did you know that with Elementor you can also create custom blocks to use on your website? That's right, you can go beyond the pre-made blocks and build your own. And in this article, we're going to show you how to do just that - by programming your own custom Elementor block! So get ready to unleash your coding skills and take your website design to the next level."
url: /custom-elementor-block-programatically/
featured_image: /wp-content/uploads/2023/03/Top-10-Best-Hosting-Providers-for-WordPress-2.png
rank_math_internal_links_processed:
  - 1
rank_math_seo_score:
  - 67
rank_math_primary_category:
  - 1
rank_math_focus_keyword:
  - custom elementor block
rank_math_analytic_object_id:
  - 21
wpaicg_toc_title_tag:
  - h1
wpaicg_intro_title_tag:
  - h1
wpaicg_conclusion_title_tag:
  - h1
categories:
  - All tips and tricks
  - Plugins
  - Wordpress Core

---
Hey there, savvy WordPress users! You know Elementor, right? It&#8217;s that amazing plugin that lets you build gorgeous website designs without having to write a single line of code. Well, did you know that with Elementor you can also create custom blocks to use on your website? That&#8217;s right, you can go beyond the pre-made blocks and build your own. And in this article, we&#8217;re going to show you how to do just that &#8211; by programming your own custom Elementor block! So get ready to unleash your coding skills and take your website design to the next level.  
  


## Step 1: Setting up the Development Environment {.wp-block-heading}

Before you can start creating an Elementor block, you need to set up a development environment that includes a local installation of WordPress and Elementor, as well as a code editor to write your block code.

### Install a Local WordPress Environment {.wp-block-heading}

To get started, you will need to install a local version of WordPress on your computer. There are several tools you can use for this purpose, such as XAMPP, WAMP, or MAMP, depending on your operating system.

Once you have downloaded and installed your chosen tool, you can then install WordPress by following these steps:

  1. Download the latest version of WordPress from the official WordPress website.
  2. Extract the downloaded WordPress archive file to the `htdocs` folder of your XAMPP, WAMP, or MAMP installation.
  3. Create a new MySQL database for your WordPress site using phpMyAdmin.
  4. Rename the `wp-config-sample.php` file to `wp-config.php` and edit it to add your database name, username, and password.

### Install the Elementor Plugin {.wp-block-heading}

Next, you will need to install the Elementor plugin on your local WordPress installation. Here&#8217;s how you can do it:

  1. Log in to your local WordPress dashboard.
  2. Go to &#8220;Plugins&#8221; > &#8220;Add New.&#8221;
  3. Search for &#8220;Elementor&#8221; in the search bar.
  4. Click on the &#8220;Install Now&#8221; button next to the Elementor plugin.
  5. Once the plugin is installed, click on the &#8220;Activate&#8221; button to activate it.

### Choose a Code Editor {.wp-block-heading}

Finally, you will need a code editor to write your Custom Elementor Block code. There are many code editors you can choose from, such as Visual Studio Code, Sublime Text, Atom, and more. Choose a code editor that you are comfortable with and that supports WordPress development.

By following these steps, you can set up a development environment that includes a local installation of WordPress and Elementor, as well as a code editor to write your Elementor block code.

## Step 2: Creating the Block Folder and Files {.wp-block-heading}

Once you have set up your development environment, the next step is to create a folder for your Custom Elementor Block. This folder will contain all the necessary files for your block, including a PHP file, a CSS file, and a JavaScript file.

### Creating the Block Folder {.wp-block-heading}

To create the block folder, follow these steps:

  1. Open your WordPress installation directory.
  2. Navigate to the `wp-content/plugins` folder.
  3. Create a new folder with a unique name for your block. For example, `my-elementor-block`.
  4. Inside the folder, create a subfolder named `widgets`.

### Creating the Block Files {.wp-block-heading}

Inside the `widgets` subfolder, you will create the PHP, CSS, and JavaScript files needed for your Elementor block. Here&#8217;s how you can create each file:

#### PHP File {.wp-block-heading}

  1. In the `widgets` subfolder, create a new PHP file with a unique name for your block. For example, `my-elementor-block-widget.php`.
  2. At the top of the PHP file, define the block class using the `class` keyword and extend the `Widget_Base` class provided by Elementor.
  3. Inside the block class, define the block name, title, icon, and other settings.

#### CSS File {.wp-block-heading}

  1. In the `widgets` subfolder, create a new CSS file with a unique name for your block. For example, `my-elementor-block-style.css`.
  2. Add CSS code to style your Elementor block.

#### JavaScript File {.wp-block-heading}

  1. In the `widgets` subfolder, create a new JavaScript file with a unique name for your block. For example, `my-elementor-block-script.js`.
  2. Add JavaScript code to add custom functionality to your Elementor block.

By following these steps, you can create a folder for your Elementor block and the necessary files for your block, including a PHP file, a CSS file, and a JavaScript file.

## Step 3: Defining the Block Class {.wp-block-heading}

After creating the folder and files for your Elementor block, the next step is to define the block class. The block class is responsible for defining the settings and functionality of your Elementor block.

### Extending the `Widget_Base` Class {.wp-block-heading}

To define the block class, you will need to create a new class that extends the `Widget_Base` class provided by Elementor. Here&#8217;s how you can do it:

<pre class="wp-block-preformatted"><code>class My_Elementor_Block_Widget extends \Elementor\Widget_Base {
    // Define your block class properties and methods here
}
</code></pre>

### Defining the Widget Name, Title, and Icon {.wp-block-heading}

Inside the block class, you will need to define the widget name, title, and icon. The widget name is used as the unique identifier for your Elementor block, while the widget title is used to display the block in the Elementor widget panel. The widget icon is used to represent your block visually in the widget panel.

Here&#8217;s an example of how you can define the widget name, title, and icon:

<pre class="wp-block-preformatted"><code>class My_Elementor_Block_Widget extends \Elementor\Widget_Base {
    public function get_name() {
        return 'my-elementor-block';
    }

    public function get_title() {
        return __( 'My Elementor Block', 'text-domain' );
    }

    public function get_icon() {
        return 'fas fa-code';
    }
}
</code></pre>

### Defining the Widget Categories and Keywords {.wp-block-heading}

In addition to the widget name, title, and icon, you can also define the widget categories and keywords. The widget categories and keywords are used to help users find your Elementor block in the Elementor widget panel.

Here&#8217;s an example of how you can define the widget categories and keywords:

<pre class="wp-block-preformatted"><code>class My_Elementor_Block_Widget extends \Elementor\Widget_Base {
    public function get_categories() {
        return [ 'general' ];
    }

    public function get_keywords() {
        return [ 'my-elementor-block', 'custom-block' ];
    }
}
</code></pre>

By following these steps, you can define the block class for your Elementor block, including the widget name, title, icon, categories, and keywords.

## Step 4: Defining the Widget Fields {.wp-block-heading}

After defining the block class, the next step is to define the widget fields. Widget fields are used to configure the Elementor block in the Elementor editor. You can use a variety of field types provided by Elementor to create the widget fields, such as text fields, text area fields, select fields, image fields, and more.

### Using the `add_control` Function {.wp-block-heading}

To define the widget fields, you will use the `add_control` function provided by Elementor. The `add_control` function takes several parameters, including the field type, field label, field description, and default value. Here&#8217;s an example of how you can use the `add_control` function to create a text field:

<pre class="wp-block-preformatted"><code>class My_Elementor_Block_Widget extends \Elementor\Widget_Base {
    public function __construct() {
        // Register your widget settings here

        $this-&gt;add_control(
            'text_field',
            [
                'label' =&gt; __( 'Text Field', 'text-domain' ),
                'type' =&gt; \Elementor\Controls_Manager::TEXT,
                'default' =&gt; __( 'Default text', 'text-domain' ),
                'description' =&gt; __( 'Enter your text here', 'text-domain' ),
            ]
        );
    }
}
</code></pre>

In this example, we&#8217;re creating a text field called `text_field` with a label, type, default value, and description.

### Creating Multiple Widget Fields {.wp-block-heading}

You can create multiple widget fields by using the `add_control` function multiple times. Here&#8217;s an example of how you can create a select field and an image field:

<pre class="wp-block-preformatted"><code>class My_Elementor_Block_Widget extends \Elementor\Widget_Base {
    public function __construct() {
        // Register your widget settings here

        $this-&gt;add_control(
            'select_field',
            [
                'label' =&gt; __( 'Select Field', 'text-domain' ),
                'type' =&gt; \Elementor\Controls_Manager::SELECT,
                'default' =&gt; 'option-1',
                'options' =&gt; [
                    'option-1' =&gt; __( 'Option 1', 'text-domain' ),
                    'option-2' =&gt; __( 'Option 2', 'text-domain' ),
                    'option-3' =&gt; __( 'Option 3', 'text-domain' ),
                ],
                'description' =&gt; __( 'Select an option', 'text-domain' ),
            ]
        );

        $this-&gt;add_control(
            'image_field',
            [
                'label' =&gt; __( 'Image Field', 'text-domain' ),
                'type' =&gt; \Elementor\Controls_Manager::MEDIA,
                'default' =&gt; [
                    'url' =&gt; \Elementor\Utils::get_placeholder_image_src(),
                ],
                'description' =&gt; __( 'Select an image', 'text-domain' ),
            ]
        );
    }
}
</code></pre>

In this example, we&#8217;re creating a select field called `select_field` with three options and an image field called `image_field`.

By following these steps, you can define the widget fields for your Elementor block, allowing users to configure the block&#8217;s settings in the Elementor editor.

## Step 5: Rendering the Widget {.wp-block-heading}

After defining the widget fields, the next step is to render the Elementor block. You can use the `render` function provided by Elementor to output the HTML for your block based on the widget settings.

### Using the `render` Function {.wp-block-heading}

The `render` function is called when the Elementor block is displayed on the front-end of your website. You can use this function to access the widget settings and output the HTML for your block.

Here&#8217;s an example of how you can use the `render` function to output a simple heading and paragraph:

<pre class="wp-block-preformatted"><code>class My_Elementor_Block_Widget extends \Elementor\Widget_Base {
    public function render() {
        $settings = $this-&gt;get_settings_for_display();

        $heading = $settings['heading'];
        $text = $settings['text'];

        echo '&lt;h2&gt;' . esc_html( $heading ) . '&lt;/h2&gt;';
        echo '&lt;p&gt;' . esc_html( $text ) . '&lt;/p&gt;';
    }
}
</code></pre>

In this example, we&#8217;re accessing the `heading` and `text` fields defined in Step 4 using the `get_settings_for_display` function. We&#8217;re then outputting the HTML for a heading and paragraph using the `echo` function and the `esc_html` function to sanitize the user input.

### Using PHP, HTML, and CSS {.wp-block-heading}

You can use PHP, HTML, and CSS to create a unique and attractive design for your Elementor block. Here&#8217;s an example of how you can use PHP, HTML, and CSS to create a simple card:

<pre class="wp-block-preformatted"><code>class My_Elementor_Block_Widget extends \Elementor\Widget_Base {
    public function render() {
        $settings = $this-&gt;get_settings_for_display();

        $image_url = $settings['image']['url'];
        $title = $settings['title'];
        $description = $settings['description'];

        echo '&lt;div class="card"&gt;';
        echo '&lt;img src="' . esc_url( $image_url ) . '" alt="' . esc_attr( $title ) . '"&gt;';
        echo '&lt;h3&gt;' . esc_html( $title ) . '&lt;/h3&gt;';
        echo '&lt;p&gt;' . esc_html( $description ) . '&lt;/p&gt;';
        echo '&lt;/div&gt;';
    }
}
</code></pre>

In this example, we&#8217;re accessing the `image`, `title`, and `description` fields defined in Step 4 using the `get_settings_for_display` function. We&#8217;re then outputting the HTML for a card using the `echo` function and CSS to style the card.

By following these steps, you can render your Elementor block using PHP, HTML, and CSS, creating a unique and attractive design for your block.

## Step 6: Registering the Widget {.wp-block-heading}

After defining and rendering the Elementor block, the final step is to register the widget with WordPress and Elementor. This will make your Elementor block available in the Elementor editor, where users can add it to their pages and configure its settings.

### Using the `register_widget_type` Function {.wp-block-heading}

To register the widget, you will use the `register_widget_type` function provided by Elementor. Here&#8217;s how you can use the `register_widget_type` function to register your Elementor block:

<pre class="wp-block-preformatted"><code>class My_Elementor_Block_Widget extends \Elementor\Widget_Base {
    // Define your block class properties and methods here
}

function register_my_elementor_block_widget() {
    \Elementor\Plugin::instance()-&gt;widgets_manager-&gt;register_widget_type( new My_Elementor_Block_Widget() );
}

add_action( 'elementor/widgets/widgets_registered', 'register_my_elementor_block_widget' );
</code></pre>

In this example, we&#8217;re using the `register_widget_type` function to register the `My_Elementor_Block_Widget` class as an Elementor block. We&#8217;re then using the `add_action` function to register the widget when the `elementor/widgets/widgets_registered` hook is called.

### Adding a Widget Icon {.wp-block-heading}

Optionally, you can also add a custom icon for your Elementor block in the Elementor editor. To add a custom icon, you will need to include an SVG file in your block folder and reference it in the block class using the `get_icon` function.

Here&#8217;s an example of how you can add a custom icon to your Elementor block:

<pre class="wp-block-preformatted"><code>class My_Elementor_Block_Widget extends \Elementor\Widget_Base {
    public function get_icon() {
        return 'my-elementor-block-icon';
    }
}

function register_my_elementor_block_widget() {
    \Elementor\Plugin::instance()-&gt;widgets_manager-&gt;register_widget_type( new My_Elementor_Block_Widget() );

    // Register the custom icon
    \Elementor\Icons_Manager::add_icon(
        'my-elementor-block-icon',
        '&lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"&gt;&lt;path d="M12 1L1 7v10l11 6 11-6V7l-11-6zm8 16.33l-7.2 3.93-7.2-3.93V7.67l7.2-3.93L20 7.67v9.66zm-7.2-1.98l-4.8-2.61V9.93l4.8 2.61v3.8zm2.4 0V9.93l4.8-2.61v3.8l-4.8 2.61z"/&gt;&lt;/svg&gt;',
        'my-elementor-block'
    );
}

add_action( 'elementor/widgets/widgets_registered', 'register_my_elementor_block_widget' );
</code></pre>

In this example, we&#8217;re using the `get_icon` function to reference the `my-elementor-block-icon` icon. We&#8217;re then using the `add_icon` function to register the custom icon with Elementor.

By following these steps, you can register your Elementor block with WordPress and Elementor, making it available for users to add to their pages and configure its settings.

## Step 7: Testing and Refining the Elementor Block {.wp-block-heading}

After registering your Elementor block, the final step is to test and refine your block. This involves adding your block to a page in the Elementor editor, configuring its settings, and making any necessary changes to the block&#8217;s code or design.

### Adding the Block to a Page {.wp-block-heading}

To add your Elementor block to a page, simply drag and drop it from the Elementor widget panel onto the page canvas. You can then configure the block&#8217;s settings using the widget fields defined in Step 4.

### Testing and Refining the Block {.wp-block-heading}

Once you&#8217;ve added the block to a page and configured its settings, it&#8217;s important to test the block on different devices and browsers to ensure that it looks and functions as expected. You can also ask others to test the block and provide feedback.

If you identify any issues with the block, such as design or functionality problems, you can make changes to the block&#8217;s code or design and test it again until you&#8217;re satisfied with the results.

### Documenting the Block {.wp-block-heading}

Finally, it&#8217;s a good practice to document your Elementor block, including its purpose, functionality, and any special considerations or requirements. This documentation can help other developers understand how to use and modify your block in the future.

You can document your block by creating a README file in the block folder or by adding comments to the block&#8217;s code that explain its purpose and functionality.

By following these steps, you can test and refine your Elementor block, ensuring that it looks and functions as expected and documenting its purpose and functionality for future reference.

## Next Steps {.wp-block-heading}

Now that you&#8217;ve learned how to create an Elementor block programmatically, here are some next steps you can take:

  1. Explore the Elementor documentation to learn about more advanced features and functionality that you can add to your blocks.
  2. Experiment with different field types and settings to create more complex and customizable blocks.
  3. Publish your Elementor block on WordPress.org or other marketplaces to share it with others and get feedback.

## Conclusion {.wp-block-heading}

Elementor is a powerful page builder that allows you to create custom WordPress websites with ease. By creating custom Elementor blocks, you can extend the functionality of Elementor and create unique and attractive designs for your website.

In this article, we&#8217;ve covered the steps involved in creating an Elementor block programmatically, including setting up the development environment, defining the block class, defining the widget fields, rendering the widget, registering the widget, and testing and refining the block.

By following these steps and experimenting with different features and functionality, you can create custom Elementor blocks that meet your specific needs and enhance the functionality of your WordPress website.