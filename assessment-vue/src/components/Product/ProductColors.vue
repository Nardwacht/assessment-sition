<script setup>
defineProps(["colors"]);
</script>

<template>
	<div class="product-colors" v-if="colors">
		<div v-if="colors.length > 1">
			<span> Colors: </span>
			<span v-for="color in colors" :key="color">
				<br />- {{ color }}
			</span>
		</div>
		<div v-else>
			<span> Color: </span>
			<span> <br />- {{ colors[0] }} </span>
		</div>
	</div>
</template>
