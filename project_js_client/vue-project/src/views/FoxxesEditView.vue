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
  data() {
    return {
      foxxes: [],
    };
  },
  components: {
    EditFoxx,
    Footer,
  },

  methods: {
    async getFoxxes() {
      const res = await fetch("http://localhost:3000/foxxes", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });

      const data = await res.json();
      this.foxxes = data;
    },
  },
  mounted() {
    this.getFoxxes();
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
