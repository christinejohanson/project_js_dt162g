<template>
  <div class="container-md">
    <h3>Lägg till en ny foxx du tycker saknas i listan</h3>
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

<style scoped>
h3 {
  text-align: center;
  margin-top: 5%;
  margin-bottom: 5%;
}
</style>
