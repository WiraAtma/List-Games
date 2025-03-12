<script setup>
import { ref } from 'vue';

const countSuka = ref(0);
const countBiasa = ref(0);
const countTidakSuka = ref(0);
const countTambah = ref(0);

const incrementSuka = () => {
    countSuka.value++;
};

const incrementBiasa = () => {
    countBiasa.value++;
};

const incrementTidakSuka = () => {
    countTidakSuka.value++;
};

const incrementTambah = () => {
    countTambah.value++;
};
</script>

<template>
    <div class="flex justify-between space-x-2">
        <button @click="incrementSuka" class="flex flex-col items-center border p-0.5 rounded-lg hover:bg-slate-100 w-full">
            <div class="flex items-center justify-center rounded-full border-2 border-green-400 text-green-400">
                😊
            </div>
            <span class="text-gray-300 text-lg font-semibold">{{ countSuka }}</span>
            <span class="text-gray-400 text-[60%] uppercase">Suka</span>
        </button>
        <button @click="incrementBiasa" class="flex flex-col items-center border p-0.5 rounded-lg hover:bg-slate-100 w-full">
            <div class="flex items-center justify-center rounded-full border-2 border-green-400 text-green-400">
                😐
            </div>
            <span class="text-gray-300 text-lg font-semibold">{{ countBiasa }}</span>
            <span class="text-gray-400 text-[60%] uppercase">Biasa</span>
        </button>
        <button @click="incrementTidakSuka" class="flex flex-col items-center border p-0.5 rounded-lg hover:bg-slate-100 w-full">
            <div class="flex items-center justify-center rounded-full border-2 border-green-400 text-green-400">
                😡
            </div>
            <span class="text-gray-300 text-lg font-semibold">{{ countTidakSuka }}</span>
            <span class="text-gray-400 text-[60%] uppercase">Tidak Suka</span>
        </button>
        <button @click="incrementTambah" class="flex flex-col items-center border p-0.5 rounded-lg hover:bg-slate-100 w-full">
            <div class="flex items-center justify-center rounded-full border-2 border-green-400 text-green-400">
                ➕
            </div>
            <span class="text-gray-300 text-lg font-semibold">{{ countTambah }}</span>
            <span class="text-gray-400 text-[60%] uppercase">Tambah</span>
        </button>
    </div>
</template>