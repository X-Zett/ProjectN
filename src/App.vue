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
</script>

<style>
body {
  margin: 0;
}

</style>