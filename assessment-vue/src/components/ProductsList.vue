<script setup>
import HelperMethods from "../helperMethods";
import JsonData from "../assets/data/products.json";
import { ref } from "vue";

// This baseUrl would ideally be set via a configuration property or database field.
const productImageBaseUrl = "https://assessement.sition.cloud/media/images/";
const productsCatalog = JsonData;
</script>

<template>
	<ol v-for="products in productsCatalog" id="products-list" :key="products">
		<li v-for="product in products" class="product-card" :key="product">
			<router-link
				:to="{
					name: 'Product',
					params: { productName: product.title },
				}"
			>
				<a href="" class="visual">
					<div class="labels">
						<span
							v-if="product.categories.includes('new')"
							class="new roboto-light"
							>new</span
						>
						<span
							v-if="product.discountedPrice"
							class="discount roboto-regular"
							>{{
								HelperMethods.getDiscountPercentage(
									product.price,
									product.discountedPrice
								)
							}}</span
						>
					</div>
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
					<div v-else class="price-information">
						<span class="price">{{
							HelperMethods.formatPrice(product.price)
						}}</span>
					</div>
				</div>
			</router-link>
		</li>
	</ol>
</template>
