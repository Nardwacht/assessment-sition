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
    validateImageUrl: function ( url, imageNotFoundUrl )
    {
        // const img = new Image();
        // img.src = url;
        // // If the image loads, return the original URL
        // img.onload = () => {
        //     return url;
        // };
        // // If the image returns a 404, return the default value
        // img.onerror = () => {
        //     return imageNotFoundUrl;
        // };

        const image = new Image();
        image.src = url;
        return image.width == 0 ? imageNotFoundUrl : url;        
    }
};

export default HelperMethods;