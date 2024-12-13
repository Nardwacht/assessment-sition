# assessment-sition

This project can be run if nodejs 18.3 (or higher) installed and by running the commands below.

# process:

This process started with me opening the provided Figma link and separating all the elements.

Then I proceeded to create the HTML structure and making sure it is semantic, along with providing initial styling.


Analysing the Figma design and setting up the dev environment - 1 hour

Documentation:
2 hours


Setting up the project:
Time: 1-2 hours

Choose and initialize the frontend framework (e.g., React or Vue.js). Set up project structure, install dependencies, and configure basic tooling.

Building the product listing page:
Time: 4-6 hours

Implement responsive design using provided mockups, ensuring mobile-first development.


Integrate product data from the dummy API and render it.
Include sorting and filtering functionality (if adding a plus point).
Creating the product detail page:
Time: 3-5 hours

Design and implement a responsive product detail layout.
Add navigation logic for selecting a product from the listing.
Testing and fine-tuning responsiveness:
Time: 2-3 hours

Test responsiveness across multiple screen sizes and ensure modern browser compatibility.





creating the product

downloaded the json file to circumvent localhost CORS errors

1.creating the NavBar

Making a sticky navigation was straightforward, just apply position:sticky to it and you're done.

Figuring out how to make the navbar scrollable was something different though. 
To remove the scrollbars, it is common practice to use ::webkit-scrollbar, but that was not allowed.
Eventually I made it scrollable by setting "overflow: auto" and to set "scrollbar-width: none".

the overflow-x auto and 

2.create single product listing
    - create layout
    - get data
    - display data in layout
3.loop through all products
4.create detailed view for product

