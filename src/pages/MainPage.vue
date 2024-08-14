<template>
    <div>
        <Header @create="openCart"></Header>
        <Main :show-cart="showCart" @update:show-cart="showCart = $event"></Main>
    </div>
</template>

<script setup>
import Header from "@/components/Header.vue"
import Establishments from "@/components/Establishments.vue"
import Main from "@/components/Main.vue";
import {ref} from "vue";

const showCart = ref(false)
const openCart = () => {
    showCart.value = true
}

</script>

<style>

</style>