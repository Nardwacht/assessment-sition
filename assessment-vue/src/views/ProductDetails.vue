<script setup>
import HelperMethods from "../helperMethods";
import JsonData from "../assets/data/products.json";
import { ref } from "vue";
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
				<div class="labels">
					<span
						v-if="product.categories.includes('new')"
						class="new roboto-light"
						>new</span
					>
				</div>
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
				<div
					v-if="product.hasOwnProperty('discountedPrice')"
					class="price-information"
				>
					<span class="oldPrice">{{
						HelperMethods.formatPrice(product.price)
					}}</span>
					<span class="discountPrice">{{
						HelperMethods.formatPrice(product.discountedPrice)
					}}</span>
				</div>
				<div class="product-buttons">
					<select id="size-selection" class="roboto-regular">
						<option>Size: XXS</option>
						<option>Size: XS</option>
						<option>Size: S</option>
						<option selected="selected">Size: M</option>
						<option>Size: L</option>
						<option>Size: XL</option>
						<option>Size: XXL</option>
					</select>
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
							<br />{{ color }}
						</span>
					</div>
					<div v-else>
						<span> Color: </span>
						<span> <br />{{ product.properties.color[0] }} </span>
					</div>
				</div>
				<div
					class="product-fabric"
					v-if="product.properties.hasOwnProperty('fabric')"
				>
					<div v-if="product.properties.fabric.length > 1">
						<span> Made from: </span>
						<span
							v-for="fabric in product.properties.fabric"
							:key="fabric"
						>
							<br />{{ fabric }}
						</span>
					</div>
					<div v-else>
						<span> Made from: </span>
						<span> <br />{{ product.properties.fabric[0] }} </span>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>
