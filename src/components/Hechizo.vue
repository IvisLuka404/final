<template>
  <div class="spell-item">
    <table>
      <tbody>
        <tr>
          <td><strong>Nombre:</strong></td>
          <td>{{ hechizo.name }}</td>
        </tr>
        <tr>
          <td><strong>Descripción:</strong></td>
          <td>{{ hechizo.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["hechizo"],
};
</script>

<style scoped>
.spell-item {
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

td {
  padding: 8px;
  border-bottom: 1px solid #ddd;
}

td:first-child {
  width: 30%;
  font-weight: bold;
}
</style>
