<template>
    <div class="w-[1080px] pb-10">
        <div class="font-monserrat font-semibold not-italic text-[24px] mb-[20px]">
            <span>Пиццы</span>
        </div>
        <div class="flex flex-wrap gap-[40px]">
            <div v-for="item in pizzas" @click="showPopup(item)" class="relative w-[calc(25%_-_30px)] h-[375px] flex flex-col rounded-[10px] hover:text-[#ffdd55] transition cursor-pointer">
                <img class="w-[210px] h-[220px] object-contain ml-[15px] mr-[5px]" :src="item.image" alt="">
                <span class="font-monserrat font-medium text-[22px] my-[5px] leading-normal">{{item.name}}</span>
                <p class="font-monserrat font-light text-[14px] leading-normal">{{item.desc}}</p>
                <div class="w-full absolute bottom-0 font-monserrat text-[18px] flex justify-between items-center">
                    <div>
                        <span>от </span>
                        <span class="font-medium">{{item.price}} </span>
                        <span> тг.</span>
                    </div>
                    <el-button color="#fff4ca" :icon="Plus" style="--el-button-text-color: #978128; --el-button-hover-text-color: #978128">Собрать</el-button>
                </div>
            </div>
        </div>
<!--        <el-pagination-->
<!--            v-model:current-page="currentPage"-->
<!--            :page-size="4"-->
<!--            :disabled="false"-->
<!--            :background="false"-->
<!--            layout="prev, pager, next"-->
<!--            :total="8"-->
<!--            @current-change="goToPage"-->
<!--        />-->
    </div>
</template>

<script setup>
import {ref, onMounted, provide, watch} from 'vue';
import axios from 'axios';
import { Plus } from "@element-plus/icons-vue"

const emit = defineEmits(['create', 'currentPage'])

const props = defineProps({
    pizzas: Array,
})
// const currentPage = ref(1)

const showPopup = (item) => {
    emit('create', item)
}

// const goToPage = (val) => {
//     emit('currentPage', val)
// }
</script>

<style scoped>
.el-button {
    --el-border-radius-base: 10px;
}
</style>