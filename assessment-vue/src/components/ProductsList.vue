<script setup>
import JsonData from "../assets/data/products.json";
import ProductLabels from "./Shared/ProductLabels.vue";
import ProductPrice from "./Shared/ProductPrice.vue";
const productsCatalog = JsonData.products; // since the json has one singular products object containing an array of products, I assign it here.

// This baseUrl would ideally be set via a configuration property or database field.
const productImageBaseUrl = "https://assessement.sition.cloud/media/images/";
</script>

<template>
	<ol id="products-list" :key="products">
		<li
			v-for="product in productsCatalog"
			class="product-card"
			:key="product"
		>
			<router-link
				:to="{
					name: 'Product',
					params: { productName: product.title },
				}"
			>
				<a href="" class="visual">
					<ProductLabels
						:categories="product.categories"
						:price="product.price"
						:discounted-price="product.discountedPrice"
					/>
					<div class="image">
						<img
							v-bind:src="productImageBaseUrl + product.image"
							onerror="console.log('there was an issue loading the image.')"
							loading="lazy"
							alt="Something went wrong while obtaining the image for this product. We're sorry for the inconvenience."
						/>
					</div>
				</a>
				<div class="info">
					<a href="" class="brand-page-link roboto-regular">{{
						product.brand
					}}</a>
					<p class="productTitle roboto-medium">
						{{ product.title }}
					</p>
					<ProductPrice
						:price="product.price"
						:discounted-price="product.discountedPrice"
					/>
				</div>
			</router-link>
		</li>
	</ol>
</template>
