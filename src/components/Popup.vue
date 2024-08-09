<template>
    <div class="fixed w-full h-full top-0 left-0 flex justify-center items-center z-20">
        <div @click="hidePopup" class="fixed w-full h-full bg-black opacity-50">
        </div>
        <div class="w-[800px] h-[500px] rounded-[20px] z-20 bg-white flex justify-between">
            <img src="">
            <div class="w-[45%] flex flex-col rounded-r-[20px] bg-[#fafafa]">
                <span>Маргарита</span>
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
import {inject, ref} from "vue";

// const temp = ref(false)
// const Popup = inject('pizza')
const emit = defineEmits(['create'])

const hidePopup = () => {
    emit('create')
}

</script>

<style scoped>

</style>