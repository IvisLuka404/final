<template>
  <div>
    <div v-if="personaje">
      <div>
        <div>
          <div>
            <h1>{{ personaje[0].name }}</h1>
            <img :src="personaje[0].image" />
          </div>
          <div>
            <h4>Genero: {{ personaje[0].gender }}</h4>
            <h4>Especie: {{ personaje[0].species }}</h4>
            <h4>Casa: {{ personaje[0].house }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      personaje: null,
    };
  },
  mounted() {
    const id = this.$route.params.id;
    axios
      .get(`https://hp-api.onrender.com/api/character/${id}`)
      .then((res) => {
        this.personaje = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
