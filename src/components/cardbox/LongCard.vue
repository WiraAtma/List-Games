<script setup>
    import { computed } from 'vue';

    const props = defineProps({
        title: String,
        thumbnail: String,
        short_description: String,
        genre: String
    })

    const shortDescription = computed(() => {
        const text = props.short_description || "";
        return text.substring(0, 50) + "...";
    });
</script>
<template>
    <router-link to="/games">
        <div class="border w-full my-3 p-3 rounded bg-slate-100 flex hover:transform transition-transform duration-300 hover:scale-105">
            <div class="flex w-85%">
                <img :src="thumbnail" width="30%" alt="cover"/>
                <div class="ml-5 my-2">
                    <h3 class="mb-1.5 font-bold">{{ props.title }}</h3>
                    <p class="mb-1.5">{{ shortDescription }}</p>
                    <div>
                        <ul class="flex gap-2">
                            <li class="border bg-white p-1 text-[80%] font-semibold rounded-lg">{{ props.genre }}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="w-15% flex items-center">
                <p class="font-bold text-white bg-blue-400 rounded-lg p-1">GRATIS</p>
            </div>
        </div>
    </router-link>
</template>