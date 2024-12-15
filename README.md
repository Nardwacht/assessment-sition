# Assessment Sition

## Process

### 0.Notes

Some things I encountered during development:
- The Figma document states that Roboto is used for the text of prices, but when apply these fonts they do not resemble the design at all. Since this is a minor detail, I will leave this as is.
- Not all of the image URLs are correct, for example the URL for "Summer Dress Salmon" has an image URL that returns a white shirt instead. Since I do not know what the actual URL is, I will keep it as is.

### 1. Starting out
"How do I approach this?" was the first question I had before writing any code.
Opening the provided Figma link and seeing the design, I knew I had to separate all the UI elements. I ended up with the navbar and a list of products.

Because I don't have a lot of experience with VueJS, I decided that I wanted to first create the page in static HTML first using some static data, so that I can create the layout and could get started on the SCSS.
Eventually I want to convert the project to VueJS, because I want to challenge myself.

When I'm happy with the design and layout I'll continue with the functionality that fetches the data and renders the page dynamically.

For the classnames I will use the Figma document as closely as possible, because it makes it easy to reference and not having to come up with names is always good for a developer. ;)

### 2. Creating the NavBar

Making a sticky navigation was fairly straightforward, just apply position:sticky to it and make sure it is always visible with z-index.

Figuring out how to make the navbar scrollable was something different though. 
To remove the scrollbars, it is common practice to use ::webkit-scrollbar, but that was not allowed here.
Eventually I made it scrollable by setting "overflow: auto" and by setting "scrollbar-width: none" so that the bar wasn't visible anymore. 

The navbar also has a small arrow/triangle below it on the desktop viewport which I just couldn't get to work, so for times' sake I left it out.

### 3. Creating the product listing

The first thought I had when seeing this in Figma was "I need a grid layout for this", so I did.
I created a container element called "product-list" so that I can fill it with products.
Each product card has the same structure, some labels, an image and some product information like the brand, title and (discounted) price.

After this, it was time to style these elements. 
Keeping the mobile-first principle in mind, I started with the mobile viewport as a baseline. It is way easier to scale up than to scale down after all. 

All tablet or desktop specific rules will overwrite this baseline by using media queries later on.
The navbar has a different color scheme on desktop for example, and the font sizes change on the different viewports. The amount of items in the grid also changes of course, so I had to change the grid-column for that.

### 4. Creating the product detail page

Because there was no design provided for this page and I was free to create my own design as I see fit, so that is exactly what I did.

I created a design for mobile, tablet and desktop in Figma https://www.figma.com/design/4jCUg24aQrdSsszT1TSaDd/assessment-sition-product-details-page?node-id=0-1&t=1FeQORQMEDqBI2Eu-1 so I could have some more structure in how I can approach writing the code.
During the design, I used the product listing page Figma as a baseline, so headers and font sizes are the same size and the 2 pages are part of the same cohesive "website".

I also wanted to implement some new things, like a color and size selector, as well as a "add to cart" button.

### 5. Creating the VueJS project

Since I don't have a lot of experience with VueJS, I referred to the official VueJS docs to find everything I needed.
I started by creating the project using "npm create vue@latest" and set everything up I expected to use.

At this stage, I also knew I did not need any of the example files, so I deleted those as well.
I added my SCSS to the src/assets/style folder, so that I can approach them and include them into the build.

After this, I proceeded by checking how I could divide my static HTML into components.
Navbar and Product List looked like the first logical candidates, so I copied and pasted my HTML into their respective Vue components. 
Just keeping it simple for now.

### 6. Making my pages render more dynamically

As a JSON file was provided, I wanted to make sure I used this to loop over all the products and get all their properties into my components. This way I can neatly render the entire page without making the file too big.

Since the JSON has one "products" object holding an array of products, I had to make 2 v-for loops to loop through everything.
After this succeeded, I finally put some properties in place, and noticed that some images are broken or are a very different aspect ratio than what I tested with. I realise that I should have gone through them during the design phase, but this was easily fixed.

