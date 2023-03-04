<template>
  <div class="card" v-for="step in steps" :key="step[i].id">
    <div class="card-body">
      <p>{{ step[i].id }}</p>
      <h5 class="card-title">{{ step[i].title }}</h5>
      <p class="card-text">{{ step[i].content }}</p>
    </div>
    <img :src="step[i].image" class="card-img-top" alt="..." />
  </div>
</template>
<script>
export default {
  setup() {
    const steps = {
      props: ["props"],
      setup(props) {
        const { step1, step2, step3 } = props;
        console.log(step1, step2, step3);
        return { step1, step2, step3 };
      },
    };

    return { steps };
  },
};
</script>
