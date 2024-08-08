<template>
    <div v-if="showPopup" class="fixed w-full h-full top-0 left-0 flex justify-center items-center z-20">
        <div class="fixed w-full h-full bg-black opacity-50">
        </div>
        <div class="w-[800px] h-[500px] z-20 bg-white flex justify-between">
            <img src="">
            <div class="w-[50%] flex flex-col">
                <span>Пепперони</span>
                <p>традиционное тесто</p>
            </div>
        </div>
    </div>
</template>

<script setup>
// defineProps({
//     itemId: Number,
//     imageUrl: String,
//     itemName: String,
//     itemDesc: String,
//     itemPrice: Number
// })
import {inject} from "vue";

const pizza = inject('pizza')

const showPopup = false
</script>

<style scoped>

</style>