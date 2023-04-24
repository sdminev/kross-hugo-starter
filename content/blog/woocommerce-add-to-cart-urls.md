+++
_template = "post"
+++

---
_template: post
---

+++
category_ = ["woocommerce", "wordpress"]
date = 2022-01-31T22:00:00Z
description = "how to create custom woocommerce add to cart links"
image = "/images/woocommerce-logo.png"
title = "WooCommerce add to Cart URLs"

+++
### URL: Add One Simple Product to Cart

    <a href=”https://myawesomeshop.com/?add-to-cart=44&quantity=1“ />

NOTE: Replace **"myawesomeshop.com"** with your domain in the link! Product with ID=44 will be added to cart, with quantity=1. 😉

### URL: Add One Simple Product to Cart with Quantity = 3

    <a href=”https://myawesomeshop.com/?add-to-cart=44&quantity=3″ />

Product with ID=44 and quantity = 3 will be added to cart. 

**Note: you can’t add 2 different products to cart with one URL.**

### URL: Add One Simple Product to Cart & Redirect to Cart Afterwards

    <a href=”https://myawesomeshop.com/cart/?add-to-cart=44&quantity=1“ >

Note that if you’ve changed the URL for the cart, make sure to change “/cart/” into “/basket/” for example. For this to work you must also tick the “Enable AJAX add to cart buttons on archives” option under WooCommerce –> Settings –> Products -> General.

### URL: Add One Simple Product to Cart & Redirect to Checkout Afterwards

    <a href=”https://myawesomeshop.com/checkout/?add-to-cart=25&quantity=1“ />

Remember, for this to work you must tick the “Enable AJAX add to cart buttons on archives” option under WooCommerce –> Settings –> Products -> General and also **disable “Redirect to the cart page after successful addition”**:

**WooCommerce: Disable Redirect to Cart**

### URL: Add One Simple Product to Cart & Redirect to Any Page Afterwards

    <a href=”https://myawesomeshop.com/your_custom_page/?add-to-cart=25&quantity=1“ >

Remember, for this to work you must tick the “Enable AJAX add to cart buttons on archives” option under WooCommerce –> Settings –> Products -> General and also disable “Redirect to the cart page after successful addition”.

## 2) Variable Products: Add to Cart URL

Here things were originally complicated, but now it’s much easier! All you need is the variation ID. You can find it right in front of the variation name in the Admin.

Once you have the Variation ID, you can then use the following.

### URL: Add One Variable Product to Cart

    <a href=”https://myawesomeshop.com/?add-to-cart=88&quantity=1“ />

We’re adding here just the Variation ID (88) as per the screenshot above. Easy as pie 🙂

### URL: Add One Variable Product to Cart (with Quantity = 3)

    <a href=”https://myawesomeshop.com/?add-to-cart=88&quantity=3″ />

You can also redirect to Cart, Checkout and another page in the same way we’ve seen for the simple products:

### URL: Add One Variable Product to Cart & Redirect to Cart

    <a href=”https://myawesomeshop.com/cart/?add-to-cart=88&quantity=1“ />

### URL: Add One Variable Product to Cart & Redirect to Checkout

    <a href=”https://myawesomeshop.com/checkout/?add-to-cart=88&quantity=1“ />

### URL: Add One Variable Product to Cart & Redirect to Any Page

    <a href=”https://myawesomeshop.com/any-page-url/?add-to-cart=88&quantity=1“ >

## 3) Grouped Products: Add to Cart URL

I recently worked with Grouped Products and my task was to add them to cart via a custom URL. A grouped product is a combination of two or more sub-products, and each one can be added with a custom quantity to cart.

_WooCommerce Grouped Products_

So, here are the custom links.

### URL: Add a Grouped Product to Cart

You will need the Grouped Product ID, which can be found in the usual way, and also the sub-product IDs. Then, use something like:

    <a href=”https://myawesomeshop.com/?add-to-cart=3111&quantity[1803]=5&quantity[1903]=2″ />

In this case, we’re adding Grouped Product ID = 3111, and specifically we’re adding 5x product ID = 1803 and 2x product ID=2.

Note: if you want to add “zero” for one of the sub-products, you still need to specify that i.e. &quantity\[1903\]=0.

## References

Thanks so much to these amazing folks:

* Remi Corson: [**https://www.remicorson.com/add-woocommerce-variable-product-with-variations-to-cart/**](https://www.remicorson.com/add-woocommerce-variable-product-with-variations-to-cart/ "https://www.remicorson.com/add-woocommerce-variable-product-with-variations-to-cart/")
* Rodolfo Melogli: [**https://www.businessbloomer.com/**](https://www.businessbloomer.com/ "https://www.businessbloomer.com/")
* Nicola Mustone: [**https://nicolamustone.com/2015/09/18/creating-custom-add-to-cart-url/**](https://nicolamustone.com/2015/09/18/creating-custom-add-to-cart-url/ "https://nicolamustone.com/2015/09/18/creating-custom-add-to-cart-url/")
* ProserveWeb: [**https://proserveweb.com/create-woocommerce-link-add-product-cart-redirect-checkout/**](https://proserveweb.com/create-woocommerce-link-add-product-cart-redirect-checkout/ "https://proserveweb.com/create-woocommerce-link-add-product-cart-redirect-checkout/")
* Maarten B: [**https://businessbloomer.com/woocommerce-custom-add-cart-urls-ultimate-guide/#comment-170443**](https://businessbloomer.com/woocommerce-custom-add-cart-urls-ultimate-guide/#comment-170443 "https://businessbloomer.com/woocommerce-custom-add-cart-urls-ultimate-guide/#comment-170443")
