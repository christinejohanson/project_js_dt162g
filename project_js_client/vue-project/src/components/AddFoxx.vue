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
        placeholder="lägg till filmer"
      />
    </div>
    <input type="submit" class="btn btn-sm" value="Lägg till!" /><br /><br />
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
    };
  },
  emits: ["addfoxxAdded"],
  methods: {
    async addFoxx() {
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

      this.$emit("addfoxxAdded");
    },
  },
};
</script>
