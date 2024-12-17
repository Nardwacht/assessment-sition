<script setup>
import { useRoute } from "vue-router";
import JsonData from "@/assets/data/products.json";
// Again, I decided to separate the components only where it makes sense
import ItemSizes from "@/components/Product/ItemSizes.vue";
import ProductColors from "@/components/Product/ProductColors.vue";
import ProductFabric from "@/components/Product/ItemFabric.vue";
import ProductImage from "@/components/Shared/ProductImage.vue";
import ProductLabels from "@/components/Shared/ProductLabels.vue";
import ProductPrice from "@/components/Shared/ProductPrice.vue";

const route = useRoute();
const product = JsonData.products.find((obj) => {
	return obj.title === route.params.productName;
});
</script>

<template>
	<nav class="roboto-medium" id="navbar-product-details">
		<!-- Making sure the user is able to go back to the product catalog -->
		<router-link :to="{ name: 'Catalog' }" class="btnBack navItem">
			Back
		</router-link>
		<a href="" class="navItem" id="shopping-cart">
			<!-- Loads the material shopping cart icon as stated in the Figma design -->
			<span class="material-symbols-outlined cart-icon"
				>shopping_cart</span
			>
			<span class="cart-text">Cart</span>
		</a>
	</nav>
	<main>
		<section id="product-details">
			<div class="image-container">
				<!-- If the product has "new" as a category it returns a "new" label. If the product has a discount it returns a label with the calculated discount percentage -->
				<ProductLabels
					:categories="product.categories"
					:price="product.price"
					:discountedPrice="product.discountedPrice"
				/>
				<!-- Returns the image from the product, if the URL returns a 404 it returns an image informing the user the image is unavailable -->
				<ProductImage :image="product.image" />
			</div>
			<div class="product-information">
				<a href="#bella" class="brand-page-link roboto-regular">
					{{ product.brand }}
				</a>
				<p class="product-title roboto-medium">
					{{ product.title }}
				</p>
				<!-- If there's a discounted price, this returns the original price and the discounted price, if not then it just returns the price. -->
				<ProductPrice
					:price="product.price"
					:discounted-price="product.discountedPrice"
				/>
				<!-- Fun little addition I made so user is "able" to select the size for their clothing item. Also added an "add to cart" button to add to the overall consistency -->
				<div class="product-buttons">
					<ItemSizes />
					<button id="btnAddToCart" class="roboto-medium">
						Add to cart
					</button>
				</div>
				<p class="roboto-medium">Description:</p>
				<p class="product-description roboto-regular">
					{{ product.description }}
				</p>
				<!-- If there are any colors listed, this shows all available colors -->
				<ProductColors :colors="product.properties.color" />
				<!-- If there are any fabrics listed, this shows all available fabrics -->
				<ProductFabric :fabrics="product.properties.fabric" />
			</div>
		</section>
	</main>
</template>
