<script setup>
import DataFormatter from "../dataFormatter";
import JsonData from "../assets/data/products.json";
import { ref } from "vue";

// This baseUrl would ideally be set via a configuration property or database field.
const productImageBaseUrl = "https://assessement.sition.cloud/media/images/";
const productsCatalog = JsonData;
const imageNotFound = ref("../assets/img/no-image-available.png");
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
								DataFormatter.getDiscountPercentage(
									product.price,
									product.discountedPrice
								)
							}}</span
						>
					</div>
					<div class="image">
						<img
							v-bind:src="productImageBaseUrl + product.image"
							v-on:error="this.src = imageNotFound"
							loading="lazy"
							alt="item-image"
						/>
					</div>
				</a>
				<div class="info">
					<span class="brandName roboto-regular">{{
						product.brand
					}}</span>
					<p class="productTitle roboto-medium">
						{{ product.title }}
					</p>
					<div
						v-if="v"
						class="price-information"
					>
						<span class="oldPrice">{{
							DataFormatter.formatPrice(product.price)
						}}</span>
						<span class="discountPrice">{{
							DataFormatter.formatPrice(product.discountedPrice)
						}}</span>
					</div>
					<div v-else class="price-information">
						<span class="price">{{
							DataFormatter.formatPrice(product.price)
						}}</span>
					</div>
				</div>
			</router-link>
		</li>
	</ol>
</template>
