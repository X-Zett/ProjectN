<template>
    <div class="fixed w-full h-full top-0 left-0 flex justify-center items-center z-20">
        <div @click="hidePopup" class="fixed w-full h-full bg-black opacity-50">
        </div>
        <div class="w-[800px] h-[500px] rounded-[20px] z-20 bg-white flex justify-between">
            <div class="w-[440px] h-full flex justify-center items-center">
                <img class="w-[280px] h-[280px] ml-2.5" :src="selItem.image">
            </div>
            <div class="w-[360px] flex flex-col rounded-r-[20px] bg-[#fafafa]">
                <span class="font-monserrat text-[22px] mt-12 pl-10">{{ selItem.name }}</span>
                <p class="font-monserrat text-[14px] mt-1 pl-10">25см, традиционное тесто</p>
                <div class="w-full flex justify-center mt-5">
                    <el-segmented class="w-[300px]" v-model="sizeValue" :options="sizeOptions"></el-segmented>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    selItem: Object
})
import {inject, ref} from "vue";

// const temp = ref(false)
// const Popup = inject('pizza')
const emit = defineEmits(['create'])
const sizeValue = ref('Средняя')
const sizeOptions = ['Маленькая', 'Средняя', 'Большая']

const hidePopup = () => {
    emit('create')
}

</script>

<style scoped>
    .el-segmented {
        --el-border-radius-base: 15px;
        --el-segmented-bg-color: #eeeeee;
        --el-segmented-padding: 0px;
    }
</style>