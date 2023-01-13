<template>
  <div class="container-md">
    <h3>Alla foxxarna</h3>

    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Namn</th>
            <th scope="col">Födelseår</th>
            <th scope="col">Nationalitet</th>
            <th scope="col">Livskamrat</th>
            <th scope="col">Filmer</th>
            <th scope="col">Redigera</th>
          </tr>
        </thead>

        <Foxxes
          @deleteFoxx="deleteFoxx(foxxes._id)"
          v-for="foxxes in foxxes"
          :foxxes="foxxes"
          :key="foxxes.id"
        />
      </table>
    </div>

    <Footer />
  </div>
</template>

<script>
import Foxxes from "../components/Foxxes.vue";
import Footer from "../components/Footer.vue";

export default {
  data() {
    return {
      foxxes: [],
    };
  },
  components: {
    Foxxes,
    Footer,
  },

  methods: {
    //hämta alla foxxar
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

    //radera foxx
    async deleteFoxx(id) {
      const resp = await fetch("http://localhost:3000/foxxes/" + id, {
        //gör ett deleteanrop
        method: "DELETE",
        //objekt i json format
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      });
      const data = await resp.json();
      this.getFoxxes();
    },
  },
  //metod som körs när komponent laddats in.
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
