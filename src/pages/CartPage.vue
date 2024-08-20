<template>
    <div class="w-full h-full">
        <Header ></Header>
        <Order :cart-items="cartItems" :total-price="totalPrice"></Order>
    </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Order from "@/components/Order.vue";
import {useStore} from 'vuex';

const store = useStore()
const cartItems = store.state.cartItems
const totalPrice = store.state.totalPrice
console.log(cartItems, totalPrice)

</script>

<style scoped>

</style>