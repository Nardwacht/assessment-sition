<script setup>
import HelperMethods from "../../helperMethods";
defineProps(["categories", "price", "discountedPrice"]);
</script>

<template>
	<div class="labels">
		<span v-if="categories.includes('new')" class="new roboto-regular"
			>new</span
		>
		<span v-if="discountedPrice" class="discount roboto-regular">{{
			HelperMethods.getDiscountPercentage(price, discountedPrice)
		}}</span>
	</div>
</template>
