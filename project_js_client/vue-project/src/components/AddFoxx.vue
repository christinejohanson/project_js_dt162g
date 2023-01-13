<template>
  <form @submit.prevent="addFoxx()">
    <div class="mb-3">
      <label for="name"></label>
      <input
        v-model="name"
        type="text"
        class="form-control"
        placeholder="skriv in namn"
      />
    </div>
    <div class="mb-3">
      <label for="birthyear"></label>
      <input
        v-model="birthyear"
        type="number"
        class="form-control"
        placeholder="skriv in födelseår"
      />
    </div>
    <div class="mb-3">
      <label for="nationality"></label>
      <input
        v-model="nationality"
        type="text"
        class="form-control"
        placeholder="skriv in nationalitet"
      />
    </div>
    <div class="mb-3">
      <label for="spouse"></label>
      <input
        v-model="spouse"
        type="text"
        class="form-control"
        placeholder="skriv in om fruga eller ej"
      />
    </div>
    <div class="mb-3">
      <label for="movies"></label>
      <input
        v-model="movies"
        type="text"
        class="form-control"
        placeholder="skriv in filmer"
      />
    </div>
    <input
      type="submit"
      class="btn btn-secondary"
      value="Lägg till!"
    /><br /><br />
    <span class="wrong"> {{ felmess }}</span>
    <span class="right"> {{ correctmess }}</span>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      birthyear: "",
      nationality: "",
      spouse: "",
      movies: "",
      felmess: "",
      correctmess: "",
    };
  },

  methods: {
    async addFoxx() {
      //kontrollera inmatning
      if (
        this.name &&
        this.birthyear &&
        this.nationality &&
        this.spouse &&
        this.movies != ""
      ) {
        let addfoxxBody = {
          name: this.name,
          birthyear: this.birthyear,
          nationality: this.nationality,
          spouse: this.spouse,
          movies: this.movies,
        };
        const resp = await fetch("http://localhost:3000/foxxes", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
          //vad ska vi skicka med. recordbody
          body: JSON.stringify(addfoxxBody),
        });
        //vänta på svaret
        const data = await resp.json();

        this.name = "";
        this.birthyear = "";
        this.nationality = "";
        this.spouse = "";
        this.movies = "";

        this.felmess = "";
        this.correctmess = "Foxxen är nu tillagd";
      } else {
        this.correctmess = "";
        this.felmess = "Alla fält måste fyllas i";
      }
    },
  },
};
</script>
<style scoped>
form {
  width: 70%;
  margin: 0 auto;
}
.wrong {
  color: rgb(137, 9, 9);
  font-weight: bold;
}
.right {
  color: rgb(13, 87, 13);
  font-weight: bold;
}
</style>
