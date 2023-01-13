<template>
  <main>
    <div class="container-md">
      <h3>Redigera vald foxx</h3>
      <EditFoxx />
    </div>
    <Footer />
  </main>
</template>

<script>
import EditFoxx from "../components/EditFoxx.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    EditFoxx,
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
