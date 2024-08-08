<template>
    <div class="w-full flex justify-between mt-10 px-[70px]">
        <Filters></Filters>
        <Popup ></Popup>
        <Categories></Categories>
    </div>
</template>

<script setup>
import Filters from "./../components/Filters.vue";
import Categories from "./../components/Categories.vue";
import Popup from "@/components/Popup.vue";
</script>

<style lang="scss" scoped>

</style>