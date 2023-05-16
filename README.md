# Drew's Youtube Merch

[Homepage](#home-page) |
[Collection Page](#collection-page) |
[Product Page](#product-page) |
[Cart Page](#cart-page) |
[Other Pages](#other-pages)

[Go to Store =>](https://drews-youtube-merch.myshopify.com/ "Drew's Youtube Merch")

<span style="text-decoration: underline">Store Password: devdrew</span>


Drew's Flower Shop is fully featured Shopify store that has all custom templates (except password and gift_card). My intention in creating this store was to fully demonstrate my ability to create a Shopify theme and showcase my understanding of web development.

This website is based off the website: [fromyouflowers.com](https://www.fromyouflowers.com/ "From You Flowers") and [Shopify's Theme Dawn](https://github.com/Shopify/dawn "Dawn")


## Store Preview

### Home page

The home page features a slideshow and featured collections as well as a featured blog post section. The home page is also fully responsive just like the entire website is.

![screenshot-homepage](https://user-images.githubusercontent.com/105955316/236931885-6fcda2a1-f183-4d32-9c0f-870abcc41dba.png)

In the header you'll notice a **predictive search bar**. The Javascript for the predictive search is based off of the predictive search implemented in dawn and appearance of the content is my own design inspired by the fromyouflower.com website.

<div align="center">
  <img style="width: 80%;" src="" alt="screenshot-header-10"/>
</div>

You'll also find a featured blog section that links to articles in a fully implemented blog section.


### Collection Page

The collections page features **sorting without reloading the page**. Page data from api calls is also cached to improve performance. Larger collections also feature **pagination** (check out the implementation here in the [All Sentiment collection](https://drews-flowershop.myshopify.com/collections/birthday "All Sentiment") -  
<span style="text-decoration: underline">Store Password: staylt</span> )


### Product Page

The product page is where the **user experience** is concentrated. When someone is looking to buy flowers it's hard to remember that while flowers by themselves are beautiful the recipient may appreciate some **additional gifts** that are more tangible and so those **options are presented here**. The option to upgrade premium flowers shows the **updated bouquet in the image gallery** to give the user immediate feedback about what they're purchasing and when they're ready enter a 5 digit number (a random number not necessarily a zip code) and **Choose A Delivery Date through a pop up modal**. After that the final and most thoughtful detail is presented: a complementary card to be filled out with a message and signature.



The Choose a Delivery Date Modal


### Cart Page
The cart page has all the things you would expect to find like prices and images of your selected items as well as any associated details. But, in addition to those things it also has **pop up modals for changing the delivery date and editing card details** from within the cart page. The associated buttons for these modals are highlighted below.

(Details like addons, card and delivery date are only cart properties for the associated item. Future updates to this theme will implement bundling and updating delivery dates on the backend with at least 1 custom app).



The Edit Card Message Modal


## Other Pages
Pages like all the **customer account pages** and are implemented but are only slight variations of Dawn implementation. The **search page** is also implemented but works similarly to the search bar in the header combined with the collection page.