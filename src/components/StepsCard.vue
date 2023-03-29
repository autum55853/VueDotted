<template>
  <div class="card border-0" v-for="(step, index) in steps" :key="index">
    <div class="card-body">
      <span class="text-success text-center border-success">{{ step.id }}</span>
      <h5 class="card-title my-3 fw-bold">{{ step.title }}</h5>
      <p class="card-text">{{ step.content }}</p>
    </div>
    <img :src="step.image" class="card-img-top" alt="..." />
  </div>
</template>
<script>
export default {
  props: {
    steps: {
      type: Array,
    },
  },
};
</script>
<style>
.card-body {
  text-align: center;
}
.card-body span {
  display: inline-block;
  width: 30px;
  border-radius: 99em;
  border: 2px solid;
}
</style>
