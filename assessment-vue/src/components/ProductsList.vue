<script setup>
import JsonData from "../assets/data/products.json";

import { ref } from "vue";

const productsCatalog = ref(JsonData);
console.log( typeof productsCatalog.value );



</script>

<template>
  <ol v-for="products in productsCatalog" id="products-list">
    <li v-for="product in products" class="product-card">
      <a href="" class="visual">
        <div class="labels">
          <span v-if="product.categories.includes('new')" class="new roboto-light">new</span>
          <span v-if="product.discountPrice !== null" v-bind="discountPercentage" class="discount roboto-regular"
            >{{ discountPercentage }}</span
          >
        </div>
        <div class="image">
          <img
            v-bind:src="
              'https://assessement.sition.cloud/media/images/' + product.image
            "
            alt="item-image"
          />
        </div>
      </a>
      <div class="info">
        <span class="brandName roboto-regular">{{ product.brand }}</span>
        <p class="productTitle roboto-medium">{{ product.title }}</p>
        <div v-if="product.hasOwnProperty('discountedPrice')" class="price-information">
          <span class="oldPrice">{{ product.price }}</span>
          <span class="discountPrice">{{ product.discountedPrice }}</span>
        </div>
        <div v-else class="price-information">
          <span class="price">{{ product.price }}</span>
        </div>
      </div>
    </li>
  </ol>
</template>
