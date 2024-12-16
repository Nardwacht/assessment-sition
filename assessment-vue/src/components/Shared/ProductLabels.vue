<script setup>
import HelperMethods from "../../helperMethods";
defineProps(["categories", "price", "discountedPrice"]);
</script>

<template>
	<div class="labels">
		<span v-if="categories.includes('new')" class="new roboto-light"
			>new</span
		>
		<span v-if="discountedPrice" class="discount roboto-light">{{
			HelperMethods.getDiscountPercentage(price, discountedPrice)
		}}</span>
	</div>
</template>
