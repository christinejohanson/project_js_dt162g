<template>
  <div class="container-md">
    <div class="textcontainer">
      <h1>Projekt Javascriptbaserad Webbutveckling</h1>
      <p>
        I det här projektet ska en webbapplikation skapas som konsumerar ett
        REST-api med hjälp av Node.js, Express och MongoDB. Webbapplikationen
        kommer att skapas med JavaScript-ramverket Vue samt ramverket Bootstrap
        för frontend-delen. Webbplatsen kommer således använda sig av en så
        kallad MEVN-stack. Innehållet i webbapplikationen är valfritt och den
        kommer bestå av två delar som ska byggas upp av HTML, CSS samt
        JavaScript. PHP, ASp.net eller liknande ska inte användas.
      </p>
      <p>
        I del ett ska data lagras i en MongoDB och sedan ska ett REST-api skapas
        som måste ha full CRUD-funktionalitet som innebär att alla anrop GET,
        PUT, POST samt DELETE ska fungera. I del två skapas en
        frontend-webbplats som hämtar in data från REST-api´et och detta kommer
        göras med ramverken Vue och Bootstrap. Datan i det här projektet kommer
        att beröra ämnet foxar som jag hänvisar till som snygga karlar.
      </p>
    </div>

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

<style scoped>
h1 {
  margin-top: 5%;
}
.textcontainer {
  width: 50%;
  margin: 0 auto;
}
</style>
