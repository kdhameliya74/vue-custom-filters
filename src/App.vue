<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="25%" />
    <h2>Person information</h2>
    <h4>First name: {{ person | plucker("firstName") }}</h4>
    <h4>Last name: {{ person | plucker("lastName") }}</h4>
    <h4>Email: {{ person | plucker("email") }}</h4>
    <div>
      <h2>Date format</h2>
      <h4>Format 1 : {{ date | formatDate("DD-MM-YY") }}</h4>
      <h4>Format 2 : {{ date | formatDate("DD/MM/YYYY") }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      person: {
        firstName: "Marco",
        lastName: "Escobar",
        age: 25,
        email: "marcoescobar@gmail.com",
      },
      date: new Date(),
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
