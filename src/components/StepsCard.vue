<template>
  <div class="card" v-for="(step, index) in steps" :key="index">
    <div class="card-body">
      <span
        class="text-success border border-2 rounded-circle border-success px-2"
        >{{ step.id }}</span
      >
      <h5 class="card-title my-3">{{ step.title }}</h5>
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
      default: () => [],
    },
  },
};
</script>
