<script setup>
import HelperMethods from "../../helperMethods";
defineProps(["price", "discountedPrice"]);
</script>

<template>
	<div v-if="discountedPrice" class="price-information">
		<span class="oldPrice roboto-light">{{ HelperMethods.formatPrice(price) }}</span>
		<span class="discountPrice roboto-regular">{{
			HelperMethods.formatPrice(discountedPrice)
		}}</span>
	</div>
	<div v-else class="price-information">
		<span class="price">{{ HelperMethods.formatPrice(price) }}</span>
	</div>
</template>
