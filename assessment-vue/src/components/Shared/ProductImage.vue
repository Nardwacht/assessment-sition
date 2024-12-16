<script setup>
function getImageUrl(image) {
	return `https://assessement.sition.cloud/media/images/${image}`;
}

function setAltImage(event) {
	event.target.src = "/src/assets/img/no-image-available.png";
}

defineProps(["image"]);
</script>

<template>
    <!-- The @error eventhandler returns default broken image when the product image returns 404 -->
	<img
		:src="getImageUrl(image)"
		@error="setAltImage"
		loading="lazy"
		alt="Something went wrong while obtaining the image for this product. We're sorry for the inconvenience."
	/>
</template>
