<template>
  <!-- KOD FLYTTAD TILL VIEWN
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
      </thead> -->
  <tbody>
    <tr>
      <td>{{ foxxes.name }}</td>
      <td>{{ foxxes.birthyear }}</td>
      <td>{{ foxxes.nationality }}</td>
      <td>{{ foxxes.spouse }}</td>
      <td>
        <div class="listan">
          <li v-for="movie in foxxes.movies">
            {{ movie }}
          </li>
        </div>
      </td>
      <td>
        <!--routerlink som tar med id till foxxesedit-->
        <button type="button" class="btn btn-secondary">
          <RouterLink :to="{ name: 'foxxesedit', params: { id: foxxes._id } }"
            >Uppdatera</RouterLink
          >
        </button>
        <!-- händelselyssnare på klick. o gör en emit som skickas
        till föräldrakomponent. -->
        <button
          type="button"
          class="btn btn-warning"
          @click="$emit('deleteFoxx')"
        >
          Radera
        </button>
      </td>
    </tr>
  </tbody>
  <!-- </table>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      movies: [],
    };
  },
  props: {
    foxxes: Object,
  },
};
</script>

<style scoped>
article {
  background-color: pink;
}

li {
  list-style: none;
}

a {
  color: white;
  text-decoration: none;
}
a:visited {
  color: white;
}
table {
  font-size: 0.8em;
  overflow-x: auto;
}
.btn {
  font-size: 0.8em;
  margin: 1%;
}
</style>
