<script setup>
import { computed } from 'vue';

    const props = defineProps({
        id: Number,
        title: String,
        thumbnail: String,
        short_description: String,
        genre: String
    })

    const shortTitle = computed(() => {
        const text = props.title || "";
        return text.substring(0, 16) + "...";
    });

    const shortDescription = computed(() => {
        const text = props.short_description;
        return text.substring(0, 25) + "...";
    });
    
</script>

<template>
    <router-link :to="`/games/${id}`">
        <div class="rounded-lg my-3 border hover:transform transition-transform duration-300 hover:scale-105">
            <img :src="thumbnail">
            <div class="bg-slate-100 p-2">
                <div class="flex justify-between">
                    <h1 class="font-bold">{{ shortTitle }}</h1>
                    <p class="text-sm p-1 font-semibold text-white bg-blue-400 rounded-lg">GRATIS</p>
                </div>
                <p>{{ shortDescription }}</p>
                <div>
                    <ul class="flex gap-2">
                        <li class="border bg-white p-1 text-[80%] font-semibold rounded-lg">{{ props.genre }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </router-link>
</template>