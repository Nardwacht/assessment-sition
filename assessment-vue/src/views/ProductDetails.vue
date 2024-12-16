<script setup>
import JsonData from "../assets/data/products.json";
import ItemSizes from "@/components/Product/ItemSizes.vue";
import ProductFabric from "../components/Product/ItemFabric.vue";
import ProductLabels from "../components/Shared/ProductLabels.vue";
import ProductPrice from "../components/Shared/ProductPrice.vue";

import { useRoute } from "vue-router";

const route = useRoute();
const productImageBaseUrl = "https://assessement.sition.cloud/media/images/";
console.log(route.params.productName);
const product = JsonData.products.find((obj) => {
	return obj.title === route.params.productName;
});
console.debug(product);
</script>

<template>
	<nav class="roboto-medium" id="navbar-product-details">
		<router-link :to="{ name: 'Catalog' }">
			<a href="index.html" class="btnBack navItem">Back</a>
		</router-link>
		<a href="" class="navItem" id="shopping-cart">
			<span class="material-symbols-outlined cart-icon"
				>shopping_cart</span
			>
			<span class="cart-text">Cart</span>
		</a>
	</nav>
	<main>
		<section id="product-details">
			<div class="image">
				<ProductLabels
					:categories="product.categories"
					:price="product.price"
					:discountedPrice="product.discountedPrice"
				/>
				<img
					v-bind:src="productImageBaseUrl + product.image"
					alt="images"
				/>
			</div>
			<div class="product-information">
				<a href="#bella" class="brand-page-link roboto-regular">
					{{ product.brand }}
				</a>
				<p class="product-title roboto-medium">
					{{ product.title }}
				</p>
				<ProductPrice
					:price="product.price"
					:discounted-price="product.discountedPrice"
				/>
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
				<div
					class="product-colors"
					v-if="product.properties.hasOwnProperty('color')"
				>
					<div v-if="product.properties.color.length > 1">
						<span> Colors: </span>
						<span
							v-for="color in product.properties.color"
							:key="color"
						>
							<br />- {{ color }}
						</span>
					</div>
					<div v-else>
						<span> Color: </span>
						<span> <br />- {{ product.properties.color[0] }} </span>
					</div>
				</div>
				<ProductFabric :fabrics="product.properties.fabric" />
			</div>
		</section>
	</main>
</template>
