<template>
  <div class="potterverse-container">
    <h1>Potterverse</h1>
    <div v-for="personaje in paginated" :key="personaje.id">
      <Personaje :personaje="personaje"></Personaje>
    </div>
    <div class="pagination-info">Actual: {{ current }}</div>
    <div class="pagination-controls">
      <a
        @click="prev"
        v-show="current > 1"
        style="cursor: pointer; margin-right: 5px"
        >Anterior</a
      >
      <a
        @click="next"
        v-show="indexEnd < personajes.length"
        style="cursor: pointer"
        >Siguiente</a
      >
    </div>
  </div>
</template>

<script>
import Personaje from "./Personaje.vue";
import axios from "axios";

export default {
  data() {
    return {
      personajes: [],
      current: 1,
      pageSize: 4,
    };
  },
  components: {
    Personaje,
  },
  mounted() {
    axios.get("https://hp-api.onrender.com/api/characters/").then((res) => {
      this.personajes = res.data;
    });
  },
  methods: {
    next() {
      if (this.indexEnd < this.personajes.length) {
        this.current++;
      }
    },
    prev() {
      if (this.current > 1) {
        this.current--;
      }
    },
  },

  computed: {
    indexStart() {
      return (this.current - 1) * this.pageSize;
    },
    indexEnd() {
      return this.indexStart + this.pageSize;
    },
    paginated() {
      return this.personajes.slice(this.indexStart, this.indexEnd);
    },
  },
};
</script>

<style scoped>
.potterverse-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.pagination-info {
  margin-top: 10px;
  margin-bottom: 5px;
}

.pagination-controls {
  margin-top: 10px;
}

.pagination-controls a {
  text-decoration: none;
  color: #007bff;
  cursor: pointer;
  font-weight: bold;
}

.pagination-controls a:hover {
  text-decoration: underline;
}
</style>
