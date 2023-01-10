<template>
  <p>Id på foxxen är {{ id }}</p>
  <form @submit.prevent="editFoxx(id)">
    <div class="mb-3">
      <label for="name"></label>
      <input
        v-model="foxxes.name"
        type="text"
        class="form-control"
        placeholder="skriv in namn"
      />
    </div>
    <div class="mb-3">
      <label for="birthyear"></label>
      <input
        v-model="foxxes.birthyear"
        type="number"
        class="form-control"
        placeholder="skriv in födelseår"
      />
    </div>
    <div class="mb-3">
      <label for="nationality"></label>
      <input
        v-model="foxxes.nationality"
        type="text"
        class="form-control"
        placeholder="skriv in nationalitet"
      />
    </div>
    <div class="mb-3">
      <label for="spouse"></label>
      <input
        v-model="foxxes.spouse"
        type="text"
        class="form-control"
        placeholder="skriv in om fruga eller ej"
      />
    </div>
    <div class="mb-3">
      <label for="movies"></label>
      <input
        v-model="foxxes.movies"
        type="text"
        class="form-control"
        placeholder="film"
      />
    </div>

    <input type="submit" class="btn btn-sm" value="Uppdatera" /><br /><br />
  </form>
</template>

<script>
export default {
  data() {
    return {
      //id från url
      id: this.$route.params.id,
      name: "",
      birthyear: "",
      nationality: "",
      spouse: "",
      movies: [],
      foxxes: [],
    };
  },
  emits: ["addfoxxAdded"],
  methods: {
    //hämta alla foxxar
    async getFoxxes() {
      const res = await fetch(
        "http://localhost:3000/foxxes/" + this.$route.params.id,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      const data = await res.json();
      this.foxxes = data;
    },

    async editFoxx(id) {
      //kontrollerar inmatning så de inte är tomma

      let addfoxxBody = {
        //skickar med värdet från formuläret
        name: this.foxxes.name,
        birthyear: this.foxxes.birthyear,
        nationality: this.foxxes.nationality,
        spouse: this.foxxes.spouse,
        movies: this.foxxes.movies,
      };

      //gör fetchanrop till api. put metod.
      const resp = await fetch("http://localhost:3000/foxxes/" + id, {
        //gör ett uppdateraanrop
        method: "PUT",
        //objekt i json format
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        //vad ska vi skicka med. addfoxxbody
        body: JSON.stringify(addfoxxBody),
      });

      //ta tillbaka datan. vänta på respons
      const data = await resp.json();

      //töm inmatningsfälet
      this.foxxes.name = "";
      this.foxxes.birthyear = "";
      this.foxxes.nationality = "";
      this.foxxes.spouse = "";
      this.foxxes.movies = "";
      //tillbaka till foxxes-sidan
      this.$router.push("/foxxes");
    },
  },

  mounted() {
    this.getFoxxes();
  },
};
</script>

<style scoped>
.btn-sm {
  background-color: #eea08c;
  color: #444447;
}

.form-control {
  background-color: #d7c5bb;
}
</style>
