# Assessment Sition

## Process

Below I will explain the development process while making the assignment.
I decided to implement as much as possible, to show my skill and attention to detail.

### 0.Notes

Some things I encountered during development

- The Figma document states that Roboto is used for the text of prices, but when applying the font in CSS they do not resemble the design at all. Since this is a minor detail, I will leave this as is.
- Not all of the image URLs are correct, for example the URL for "Summer Dress Salmon" has an image URL that returns a white shirt instead. Since I do not know what the actual URL is, I will keep it as is and show an error message.

### 1. Starting out - static HTML

"How do I approach this?" was the first question I had before writing any code.
Opening the provided Figma link and seeing the design, I knew I had to separate some of the UI elements into "blocks" or components.
I ended up with the navbar and a list of products as the two distinct elements.

Because I don't have a lot of experience with VueJS, I decided that I wanted to first create the page in static HTML using some static data, so that I can create the layout and get started on the SCSS.
Eventually I want to convert the project to VueJS, because I want to challenge myself and learn.

For the classnames I used the Figma document as closely as possible, because it makes it easy to reference and not having to come up with names is always nice for a developer.

### 2. Creating the NavBar

Making a sticky navigation was fairly straightforward, by applying `position:sticky` to it and make sure it is always visible with `z-index:100`.

Figuring out how to make the navbar scrollable was something different though.
To remove the scrollbars, it is common practice to use `::webkit-scrollbar`, but that was not allowed here.
Eventually I made it scrollable by making the navbar slightly larger with `padding-bottom` and then clipping the padding back with `clip-path(0 0 paddingAmount 0)`.
When testing this on both desktop and on my iPhone, the scrollbar was not visible anymore.

The navbar also has a small arrow/triangle below it on the desktop viewport which I just couldn't get to work, so for times' sake I left it out.

### 3. Creating the product listing

The first thought I had when seeing this in Figma was "I can use a grid layout for this", so I created one containing 12 columns.
Why 12? because it is easily divisible by 2 and 3, so both tablet and desktop can be supported.

| :Viewport | :# of columns | width of each column: |
| --------- | ------------- | --------------------- |
| :Mobile   | :1 column     | (12):                 |
| :Tablet   | :2 columns    | (6 6):                |
| :Desktop  | :3 columns    | (4 4 4):              |

I created a container element called `product-list` that I can fill it with products.
Each product card has the same structure, some labels, an image and some product information like the brand, title and (discounted) price.

After this, it was time to style these elements.
Keeping the mobile-first principle in mind, I started with the mobile viewport as a baseline.
It is way easier to scale up than to scale down after all.

All tablet or desktop specific rules will overwrite this baseline by using media queries later on.
The navbar has a different color scheme on desktop for example, and the font sizes change on the different viewports.
The amount of items in the grid also changes of course, so I had to change the `grid-column` property for that.

### 4. Creating the product detail page

Because there was no design provided for this page and I was free to create my own design as I see fit, so that is exactly what I did.

I created a design for mobile, tablet and desktop [in Figma](https//www.figma.com/design/4jCUg24aQrdSsszT1TSaDd/assessment-sition-product-details-page?node-id=0-1&t=1FeQORQMEDqBI2Eu-1) so I could have some more structure in how I can approach writing the code.
During the design, I used the product listing page from the provided Figma as a baseline, so headers and font sizes would the same size and it would look like the 2 pages are part of the same cohesive "website".

I also wanted to implement some new things for fun, like a clothing size selector and a "add to cart" button.

### 5. Creating the VueJS project

Since I don't have a lot of experience with VueJS, I referred to the official VueJS docs a lot to find everything I needed.
I started by creating the project using `npm create vue@latest` and set everything up I expected to use.

At this stage, I also knew I did not need any of the example files, so I deleted those.
I added my SCSS to the `src/assets/style` folder, so that I can approach them and include them into the build.

After this, I proceeded by checking how I could divide my static HTML into components.
Navbar and Product List looked like the first logical candidates, so I copied and pasted my HTML into their respective Vue components.
Just keeping it simple for now.

### 6. Making the pages render dynamically

As a JSON file was provided, I wanted to make sure I used this to loop over all the products using `v-for` and get all their properties into my components.
This way I can neatly render the entire page without writing a lot of HTML and use all VueJS has to offer.
To prevent CORS errors I downloaded the JSON file to my machine and put it directly in the folder structure.

Since the JSON has one `products` object holding an array of products, I made my life easier by directly accessing the products object.
Then, I looped through the products array and put all their properties in place.

By using `v-if="propertyName"` I checked if the property existed at all (not all products have a discount for example).
For properties that may have more than 1 value like the `categories` array, I used `v-if="property.length > 1` to render only 1 item and `v-else` with a `v-for` inside to render all of them.

### 7. Implementing the Product Details page

Since the products in the JSON does not have an id or other unique identifier I decided to use the product title property to pass as a parameter.
This way I will able to get each product by searching for their name using JavaScripts built-in `Array.prototype.find(product.title)` function.
I also looked at a way to pass an entire object to the `ProductDetails` component, but this was not possible as far as I could see.

Luckily I already created the layout for this page, so after obtaining the product I was able to replace all static text with the products' properties.

### 8. Setting up the router

To be able to show other views, I needed to set up `vue-router`.
This would ensure that every product is able to have its own details page.

I also decided to use named routes, just to make the URL in the browser search bar a bit nicer.
In the Product Details page I also included a back button which redirects back to the products list page.

### 9. Adding a filter control

To filter the products I needed to make a variation of the `Array.prototype.find(product.title)` call.
By using `Array.prototype.filter(propertyName)` I was able to obtain all objects that match the property instead of just the first match.
To obtain the product categories I created a helper method to loop through the products and their categories and add them to an array if they didn't yet exist.

After this, I created a computed property that returns the products that match the selected category.
This array of products is then passed to the `v-for` loop and the component is rendered again.

### 10. Testing

Lastly, I tested the funcionality and the layout of my pages on my Macbook using Safari, Chrome and FireFox (with devtools and the responsive viewport of course), but also on my iPhone because I know that iOS Safari has some unique quirks in it.
When everything was ready, I used `npm run build` so that I could upload the files from the `dist` directory onto [my website](https://assessment.nard.nl).

### 10. Time spent

Below is a table of how I spent my time.
I wanted to really take the time to implement as much as possible from the Figma design and had to learn VueJS from scratch as well in the meantime.
Because no design was provided for the product details page, I decided to create my own since it would not be too much extra work for me.

#### Product listing page

| What                                          | Time spent |
| :-------------------------------------------- | ---------: |
| Creating page structure with static data      |      1u 0m |
| Creating page Styling                         |      4u 0m |
| Creating Vue components                       |      1u 0m |
| Fetching and binding product data             |      1u 0m |
| Adding data formatting and edge cases to data |      1u 0m |
| Including sorting and filtering functionality |      1u 0m |
| Adding navigation logic (vue-router)          |      1u 0m |

#### Product detail page

| What                                          | Time spent |
| :-------------------------------------------- | ---------: |
| Designing page layout in Figma                |     0u 30m |
| Creating page structure with static data      |      1u 0m |
| Creating page styling                         |      1u 0m |
| Creating Vue components                       |      1u 0m |
| Integrating product data                      |      1u 0m |
| Adding data formatting and edge cases to data |      1u 0m |

#### Other

| What                       | Time spent |
| :------------------------- | ---------: |
| Analysing the Figma design |      1u 0m |
| Documentation              |      3u 0m |
| Testing                    |      1u 0m |
