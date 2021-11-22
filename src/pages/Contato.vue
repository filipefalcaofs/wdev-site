<template>
  <main>
    <section class="container">
      <h1>Contato</h1>
      <section class="contacts">
        <div
          class="contact"
          v-for="(contact, index) in contacts"
          :key="index">
        <div class="contact-title"> {{ contact.title }} </div>
        <a :href="contact.link" target="_blank" rel="noopener noreferrer">
        <div> {{ contact.label }} </div>
        </a>
        </div>
      </section>
    </section>
  </main>
</template>

<script>
import api from "../services/api.js";

export default {
  name: "Contato",
  components: {},
  data() {
    return {
      contacts: [],
    };
  },
  mounted() {
    // this.getData()
    api.get("/contacts.json").then((response) => {
      this.contacts = response.data;
    });
  },
};
</script>

<style scoped>
main {
  align-items: center;
}
.contacts {
  color: var(--color-text-dark);
}

.contact {
  margin-bottom: 30px;}
.contact-title {
  font-size: 18px;
  font-weight: bold;
}
.contact a {
  color: var(--color-text-dark);
}
</style>
