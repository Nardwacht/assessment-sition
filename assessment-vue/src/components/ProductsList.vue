<script setup>
import { ref, computed } from "vue";
import Filters from "@/filters";
import JsonData from "../assets/data/products.json";
// I decided to separate the components only where it makes sense
import ProductImage from "./Shared/ProductImage.vue";
import ProductLabels from "./Shared/ProductLabels.vue";
import ProductPrice from "./Shared/ProductPrice.vue";
const productsCatalog = JsonData.products; // since the json has one singular products object containing an array of products, I assign it here.

// Getting the filter values and default value
const filters = ref(Filters.values);
const activeFilter = ref(Filters.defaultValue);

// Sets value of acitve filter to what is being passed when clicking the filter button
function filterProducts(type) {
	activeFilter.value = type;
}

// Shows or hides the mobile version of the filter control
function toggleFilters() {
	const filterButtons = document.getElementById("product-filters");
	filterButtons.style.display =
		filterButtons.style.display === "block" ? "none" : "block";
}

// Computed value that obtains a new list of all products that match the clicked filter, causing the catalog list to be re-rendered.
const getItemsUsingFilter = computed(() => {
	if (activeFilter.value === "All") {
		return productsCatalog;
	}
	return productsCatalog.filter((item) =>
		item.categories.includes(activeFilter.value.toLowerCase())
	);
});
</script>
<template>
	<div id="filter-menu">
		<button class="btnFilter btnToggleFilter" @click="toggleFilters">
			Filter
		</button>
		<div id="product-filters">
			<button
				v-for="filter in filters"
				@click="filterProducts(filter)"
				class="btnFilter"
				:class="{ active: filter === activeFilter }"
				:key="filter"
			>
				{{ filter }}
			</button>
		</div>
	</div>
	<ol id="products-list">
		<li
			v-for="product in getItemsUsingFilter"
			class="product-card"
			:key="product"
		>
		<!-- Makes sure that the product card navigates to the details page when clicked on  -->
			<router-link
				:to="{
					name: 'Product',
					params: { productName: product.title },
				}"
			>
				<div href="" class="visual">
					<div class="image">
						<ProductLabels
							:categories="product.categories"
							:price="product.price"
							:discounted-price="product.discountedPrice"
						/>
						<ProductImage :image="product.image" />
					</div>
				</div>
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
