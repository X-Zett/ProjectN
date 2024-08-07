<template>
    <div class="w-[1080px]">
        <div class="font-monserrat font-semibold not-italic text-[24px] mb-[20px]">
            <span>Пиццы</span>
        </div>
        <div class="flex flex-wrap justify-between gap-[40px]">
            <a v-for="item in data" class="hover:text-[#ffdd55] transition" href="">
                <div class="categories-item">
                    <img :src="item.image" alt="">
                    <span class="">{{item.name}}</span>
                    <p class="">{{item.desc}}</p>
                </div>
            </a>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
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

onMounted(fetchData);
</script>

<style scoped>
.categories-item {
    width: 220px;
    height: 290px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
}

.categories-item>span:first-of-type {
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    font-size: 22px;
    margin: 5px 0 5px 0;
    line-height: normal;

}

.categories-item>p {
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    line-height: normal;
    font-weight: 300;
    font-size: 14px;
}

.categories-item>img {
    width: 210px;
    height: 220px;
    border-radius: 10px;
    object-fit: cover;
    margin-left: 10px;
}

</style>