<script setup>
    const props = defineProps({
        title: String,
        thumbnail: String,
    })
</script>

<template>
    <router-link to="/games">
        <div class="rounded-lg my-3 border hover:transform transition-transform duration-300 hover:scale-105">
            <img :src="thumbnail">
            <div class="flex justify-between bg-slate-100 p-2">
                <h1 class="text-[100%] font-bold">{{ title }}</h1>
                <p class="font-bold w-16 text-white bg-blue-400 rounded-lg p-1">GRATIS</p>
            </div>
        </div>
    </router-link>
</template>