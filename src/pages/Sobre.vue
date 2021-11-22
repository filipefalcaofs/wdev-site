<template>
  <main>
    <section class="container">
      <h1>Sobre</h1>
      <section class="sobre">
        <div
          class="about"
          v-for="(sobre, index) in about"
          :key="index"
          v-html="about"
        ></div>
      </section>
    </section>
  </main>
</template>

<script>
import api from "../services/api.js";

export default {
  name: "Sobre",
  components: {},
  data() {
    return {
      about: "",
    };
  },
  mounted() {
    // this.getData()
    api.get("/about.json").then((response) => {
      this.about = response.data.about;
    });
  },
};
</script>

<style scoped>
main {
  align-items: center;
}
.about {
  font-size: 1.0rem;
  line-height: 1.5;
  margin-bottom: 40px;
  color: var(--color-text-dark);
}
</style>
