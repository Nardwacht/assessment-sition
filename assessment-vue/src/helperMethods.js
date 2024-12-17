const HelperMethods = {
    formatPrice: function( price ) {
        return parseFloat( price ).toFixed( 2 );
    },
    getDiscountPercentage: function(price, discountedPrice) {
        return `-${Math.round(100 - (discountedPrice / price) * 100)}%`;
    },
    formatTitleAsRoute: function (title)
    {
        return title.replace( / /g, "+" );
    },
    getProductCategories: function (products)
    {   
        const categories = ["all"];
        products.forEach( ( element ) => {
            element.categories.forEach((category) => {
                if ( !categories.includes(category)) categories.push(category);
            });
        } );
        return categories;
    }
}


export default HelperMethods;