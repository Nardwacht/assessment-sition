<script setup>
defineProps(["fabrics"]);
</script>

<template>
	<div
		class="product-fabric"
		v-if="fabrics"
	>
		<div v-if="fabrics.length > 1">
			<span> Material: </span>
			<span v-for="fabric in fabrics" :key="fabric">
				<br />- {{ fabric }}
			</span>
		</div>
		<div v-else>
			<span> Material: </span>
			<span> <br />- {{ fabrics[0] }} </span>
		</div>
	</div>
</template>
