<template>
  <header>
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg">
        <h1 class="display-2">Foxxes on Screen</h1>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink to="/">HOME</RouterLink>
            </li>
            <li class="nav-item"><RouterLink to="/about">ABOUT</RouterLink></li>
            <li class="nav-item">
              <RouterLink to="/foxxes">FOXXARNA</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/addfoxx">LÄGG TILL FOXX</RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  components: {
    RouterView,
  },
};
</script>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  background-color: rgb(225, 219, 220);
  font-size: 1rem;
  padding: 1rem;
  margin-top: 1rem;
}

nav a {
  display: inline-block;
  text-decoration: none;
  color: black;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
nav a:hover {
  background-color: rgb(82, 80, 80);
  color: white;
}

nav a:first-of-type {
  border: 0;
}
.display-2 {
  margin-right: 10%;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
