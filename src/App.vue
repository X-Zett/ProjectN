<template>
  <div>
      <Header></Header>
      <Main></Main>
      <Establishments></Establishments>
  </div>
</template>

<script setup>
    import Header from "./components/Header.vue"
    import Establishments from "./components/Establishments.vue"
    import Main from "@/components/Main.vue";

    import { ref, onMounted } from 'vue';
    import axios from 'axios';

    const data = ref([]);
    const loading = ref(true);
    const error = ref(null);

    async function fetchData() {
        try {
            loading.value = true;
            const response = await axios.get('https://6c2cf1ca9269fb85.mokky.dev/items');
            data.value = response.data;
        } catch (err) {
            error.value = err.message;
        } finally {
            loading.value = false;
        }
    }

    onMounted(fetchData);
</script>

<style>
body {
  margin: 0;
}

</style>