<template>
  <div class="home">
    <RouterLink v-for="(product, index) in products" :key="index" :to="`/product/${product.id}`">

      <ProductCard  :image="product.image" >
        <template #title>{{ product.title }}</template>
        <template #price>{{ product.price }} euros</template>
      </ProductCard>

    </RouterLink>
    
  </div>
</template>

<script setup>
import ProductCard from '../components/ProductCard.vue';
import { ref, onMounted } from 'vue';

const products = ref();

onMounted(() => {

  fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => {
      products.value = data
    })
})

</script>

<style scoped>
.home {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>