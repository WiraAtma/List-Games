<script setup>
import LargeCard from '@/components/cardbox/LargeCard.vue';
import { useGameDashboardStore } from '@/store/gameDashboardStore';
import { onMounted } from 'vue';

const gameDashboardStore = useGameDashboardStore();

onMounted( async () => {
    await gameDashboardStore.fetchGames();
});
</script>

<template>
    <div class="pt-20 px-60">
        <div class="my-10" v-for="(games, category) in gameDashboardStore.gamesByCategory" :key="category">
            <div class="flex justify-between">
                <h1 class="font-bold text-xl capitalize">{{ category }} Games</h1>
                <RouterLink class="border p-3 rounded-lg bg-slate-200 hover:bg-white" :to="`/games/category/${category}`">Lihat Lainnya</RouterLink>
            </div>
            <div class="flex gap-4">
                <LargeCard
                    v-for="game in games"
                    :key="game.id"
                    :id="game.id"
                    :title="game.title"
                    :thumbnail="game.thumbnail"
                />
            </div>
        </div>
    </div>
</template>
