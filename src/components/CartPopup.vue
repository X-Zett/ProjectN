<template>
    <div class="fixed w-full h-full top-0 left-0 flex justify-end items-center z-20">
        <div @click="hideCart" class="fixed w-full h-full bg-black opacity-50">
        </div>
        <div class="w-[400px] h-full z-20 bg-white flex justify-center flex-col items-center font-monserrat">
            <span class="text-[22px] font-medium">Корзина пустая</span>
            <span class="text-[14px] w-[300px] text-center mt-1">
                Добавьте хотя бы одну пиццу, чтобы совершить заказ</span>
            <button class="bg-[#ffeeaa] w-[250px]
            py-2 rounded-[13px] mt-5 flex justify-center items-center
            gap-3" @click="hideCart">
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7144 7.21143L1.00007 7.21142" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7 13.2056L1 7.21149L7 1.21741" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Вернуться назад
            </button>
        </div>
    </div>
</template>

<script setup>

const emit = defineEmits(['create'])
const hideCart = () => {
    emit('create')
}
</script>

<style lang="scss" scoped>

</style>