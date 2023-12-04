<template>
  <div @click="detallesDelMono" class="minimalist-card">
    <img :src="personaje.image" alt="Imagen del personaje" />

    <div>
      <h5>{{ personaje.name }}</h5>

      <p>
        <strong>Género:</strong> {{ personaje.gender }}<br />
        <strong>Especie:</strong> {{ personaje.species }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["personaje"],
  methods: {
    detallesDelMono() {
      this.$router.push(`/personaje/${this.personaje.id}`);
    },
  },
};
</script>

<style scoped>
.minimalist-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.minimalist-card:hover {
  background-color: #2e2e2e;
}

img {
  max-width: 100px;
  max-height: 100px;
  object-fit: cover;
}

div {
  flex: 1;
}

h5 {
  margin-bottom: 5px;
}

p {
  font-size: 14px;
  color: #555;
  margin: 0;
}
</style>
