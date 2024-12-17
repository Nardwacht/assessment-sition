<script setup>
import HelperMethods from "@/helperMethods";
import { ref, computed } from "vue";
import JsonData from "@/assets/data/products.json";
// I decided to separate the components only where it makes sense
import ProductImage from "./Shared/ProductImage.vue";
import ProductLabels from "./Shared/ProductLabels.vue";
import ProductPrice from "./Shared/ProductPrice.vue";

// since the json has one singular products object containing an array of products, I assign it here for convenience.
const productsCatalog = JsonData.products;
const defaultFilterValue = "all";

// Getting the different product categories and storing them in a reactive variable, also setting a default value
const filters = ref(HelperMethods.getProductCategories(productsCatalog));
const activeFilter = ref(defaultFilterValue);

// Sets value of acitve filter to what is being passed when clicking the filter button
function filterProducts(type) {
	activeFilter.value = type;
}

// Toggles the mobile version of the filter control
function toggleFilters() {
	const filterButtons = document.getElementById("product-filters");
	filterButtons.style.display =
		filterButtons.style.display === "block" ? "none" : "block";
}

// Computed value that obtains a new list of all products that match the clicked filter, causing the catalog list to be re-rendered.
const getItemsUsingFilter = computed(() => {
	if (activeFilter.value === defaultFilterValue) {
		return productsCatalog;
	}
	return productsCatalog.filter((item) =>
		item.categories.includes(activeFilter.value.toLowerCase())
	);
});
</script>

<template>
	<div id="filter-menu">
		<button
			class="btnFilter btnToggleFilter roboto-medium"
			@click="toggleFilters"
		>
			Filter
		</button>
		<div id="product-filters">
			<button
				v-for="filter in filters"
				@click="filterProducts(filter)"
				class="btnFilter roboto-medium"
				:class="{ active: filter === activeFilter }"
				:key="filter"
			>
				{{ filter.toUpperCase() }}
			</button>
		</div>
	</div>
	<ol id="products-list">
		<li
			v-for="product in getItemsUsingFilter"
			class="product-card"
			:key="product"
		>
			<!-- Makes sure that the product card navigates to the details page when clicked on, nested inside of the listItem because I use the product name to get the product  -->
			<router-link
				:to="{
					name: 'Product',
					params: { productName: product.title },
				}"
			>
				<div class="visual">
					<div class="image-container">
						<!-- If the product has "new" as a category it returns a "new" label. If the product has a discount it returns a label with the calculated discount percentage -->
						<ProductLabels
							:categories="product.categories"
							:price="product.price"
							:discounted-price="product.discountedPrice"
						/>
						<ProductImage :image="product.image" />
					</div>
				</div>
				<div class="info">
					<!-- The brand is techinally clickable, but I decided to leave the brand page out due to time constraints. -->
					<a href="" class="brand-page-link roboto-light">
						{{ product.brand }}
					</a>
					<p class="productTitle roboto-medium">
						{{ product.title }}
					</p>
					<!-- If there's a discounted price, this returns the original price and the discounted price, if not then it just returns the price. -->
					<ProductPrice
						:price="product.price"
						:discounted-price="product.discountedPrice"
					/>
				</div>
			</router-link>
		</li>
	</ol>
</template>
