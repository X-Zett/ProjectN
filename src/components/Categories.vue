<template>
    <div class="w-[1080px]">
        <div class="font-monserrat font-semibold not-italic text-[24px] mb-[20px]">
            <span>Пиццы</span>
        </div>
        <div class="flex flex-wrap justify-between gap-[40px]">
            <a v-for="item in data" class="hover:text-[#ffdd55] transition" href="">
                <div class="w-[240px] h-[350px] flex flex-col rounded-[10px]">
                    <img class="w-[210px] h-[220px] object-cover ml-[20px] mr-[10px]" :src="item.image" alt="">
                    <span class="font-monserrat font-medium text-[22px] my-[5px] leading-normal">{{item.name}}</span>
                    <p class="font-monserrat font-light text-[14px] leading-normal">{{item.desc}}</p>
                </div>
            </a>
        </div>
    </div>
</template>

<script setup>
import {ref, onMounted, provide} from 'vue';
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

provide('pizza', {
    data
})

onMounted(fetchData);
</script>

<style scoped>
</style>