<script setup>
import LargeCard from '@/components/cardbox/LargeCard.vue';
import MediumCard from '@/components/cardbox/MediumCard.vue';
import { useGameCategorytore } from '@/store/gameCategoryStore';
import { onMounted } from 'vue';

const gameCategoryStore = useGameCategorytore();

onMounted(async () => {
    await gameCategoryStore.fetchGames();
});

</script>

<template>
    <div class="pt-20 px-4 md:px-60">
        <div>
            <h1 class="font-bold text-xl md:text-2xl">Game Terbaru Genre {{ gameCategoryStore.category.toUpperCase() }}</h1>
            <div class="flex gap-4">
                <LargeCard
                    v-for="item in gameCategoryStore.newGames"
                    :key="item.id"
                    :id="item.id"
                    :title="item.title"
                    :thumbnail="item.thumbnail"
                />
            </div>
        </div>
        <div class="my-5">
            <h1 class="font-bold text-xl md:text-2xl">Game Populer Genre {{ gameCategoryStore.category.toUpperCase() }}</h1>
            <div class="flex gap-4">
                <LargeCard
                    v-for="item in gameCategoryStore.popularGames"
                    :key="item.id"
                    :id="item.id"
                    :title="item.title"
                    :thumbnail="item.thumbnail"
                />
            </div>
        </div>
        <div class="my-5">
            <h1 class="font-bold text-xl md:text-2xl">Game Lainnya Genre {{ gameCategoryStore.category.toUpperCase() }}</h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <MediumCard
                    v-for="item in gameCategoryStore.allGames"
                    :key="item.id"
                    :id="item.id"
                    :title="item.title"
                    :thumbnail="item.thumbnail"
                    :short_description="item.short_description"
                    :genre="item.genre"
                />
            </div>
        </div>
    </div>
</template>