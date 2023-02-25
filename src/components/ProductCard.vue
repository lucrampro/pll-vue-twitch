<template>
  <div class="product-card">
    <img :src="props.image" alt="">
    <h3>
      <slot name="title"></slot>
    </h3>
    <p>
      <slot name="price"></slot>
    </p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  image: String
})
</script>

<style scoped>
.product-card {
  width: 200px;
  border: solid 1px red;
  flex-wrap: wrap;
  margin: 10px;
}
.product-card img {
  width: 100%;
}
.product-card h3 {
  margin: 10px 0px;
}


</style>