<template>
  <div class="container-md">
    <h1>Hem</h1>
    <p>Det här är klientsidan för att hämta data från ett api.</p>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  components: {
    Footer,
  },
};
</script>
