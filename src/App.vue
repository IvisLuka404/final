<template>
  <div class="app-container">
    <div>
      <nav>
        <div class="links">
          <router-link to="/">Inicio</router-link>
          <router-link to="/hechizo/">Hechizos</router-link>
        </div>
      </nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      personajes: [],
    };
  },
};
</script>

<style scoped>
.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

nav {
  background-color: #f0f0f0;
  padding: 10px;
}

.links {
  display: flex;
  justify-content: space-around;
}

.links a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  font-size: 18px;
  padding: 5px;
  transition: color 0.3s;
}

.links a:hover {
  color: #007bff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  height: 10rem;
  will-change: filter;
  transition: filter 300ms;
}
</style>
