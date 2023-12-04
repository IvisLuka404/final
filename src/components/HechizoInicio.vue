<template>
  <div>
    <h1>Hechizos</h1>
    <div v-for="hechizo in paginated" :key="hechizo.id">
      <Hechizo :hechizo="hechizo"></Hechizo>
    </div>
  </div>
  <div>Actual: {{ current }}</div>
  <div>
    <a @click="prev" style="cursor: pointer; margin-right: 5px">Anterior</a>
    <a @click="next" style="cursor: pointer">Siguiente</a>
  </div>
</template>

<script>
import Hechizo from "./Hechizo.vue";
import axios from "axios";

export default {
  data() {
    return {
      hechizos: [],
      current: 1,
      pageSize: 4,
    };
  },
  components: {
    Hechizo,
  },
  mounted() {
    axios.get("https://hp-api.onrender.com/api/spells").then((res) => {
      this.hechizos = res.data;
    });
  },
  methods: {
    next() {
      if (this.indexEnd < this.hechizos.length) {
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
      return this.hechizos.slice(this.indexStart, this.indexEnd);
    },
  },
};
</script>
