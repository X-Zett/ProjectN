<template>
  <div>
      <Header></Header>
      <Filters></Filters>
      <Categories></Categories>
      <Establishments></Establishments>

  </div>
</template>

<script setup>
  import Header from "./components/Header.vue"
  import Categories from "./components/Categories.vue"
  import Establishments from "./components/Establishments.vue"
  import Filters from "@/components/Filters.vue";
  // export default {
  //   name: "App",
  //   components: {HeaderComp}
  // }

</script>

<style>

body {
  margin: 0;
}
</style>