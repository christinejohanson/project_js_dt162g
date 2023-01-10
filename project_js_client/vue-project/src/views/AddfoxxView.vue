<template>
  <div class="container-md">
    <h1>Här kan du lägga till en ny foxx du tycker passar in</h1>
    <AddFoxx />

    <Footer />
  </div>
</template>

<script>
import AddFoxx from "../components/AddFoxx.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    AddFoxx,
    Footer,
  },
};
</script>
