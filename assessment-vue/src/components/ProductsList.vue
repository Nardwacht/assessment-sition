<script setup>
import JsonData from "../assets/data/products.json";
import ProductImage from "./Shared/ProductImage.vue";
import ProductLabels from "./Shared/ProductLabels.vue";
import ProductPrice from "./Shared/ProductPrice.vue";
const productsCatalog = JsonData.products; // since the json has one singular products object containing an array of products, I assign it here.
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
					<div class="image">
						<ProductLabels
							:categories="product.categories"
							:price="product.price"
							:discounted-price="product.discountedPrice"
						/>
						<ProductImage :image="product.image" />
					</div>
				</a>
				<div class="info">
					<a href="" class="brand-page-link roboto-light">{{
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
