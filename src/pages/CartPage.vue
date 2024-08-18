<template>
    <div class="w-full h-full">
        <Header ></Header>
        <Order :cart-items="cartItems" :pizza-data="pizzaData" :total-price="totalPrice"></Order>
    </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Order from "@/components/Order.vue";
import {useStore} from 'vuex';

const store = useStore()
const cartItems = store.state.cartItems
const pizzaData = store.state.pizzaData
const totalPrice = store.state.totalPrice
console.log(cartItems, pizzaData, totalPrice)

</script>

<style scoped>

</style>