<script setup>
import LargeCard from '@/components/cardbox/LargeCard.vue';
import { onMounted, ref } from 'vue';

const gamesByCategory = ref({
    mmorpg: [],
    shooter: [],
    moba: [],
    anime: [],
    strategy: [],
    fantasy: [],
    racing: [],
    fighting: [],
    social: [],
    sports: []
});


const categories = Object.keys(gamesByCategory.value);

const fetchGames = async () => {
    try {
        const responses = await Promise.all(
            categories.map(category => 
                fetch(`/api/api/games?category=${category}`)
            )
        );

        const data = await Promise.all(responses.map(res => res.json()));

        categories.forEach((category, index) => {
            gamesByCategory.value[category] = data[index].slice(0, 3);
        });

    } catch (error) {
        console.error('Error fetching game data:', error);
    }
};

onMounted(fetchGames);
</script>

<template>
    <div class="pt-20 px-60">
        <div class="my-10" v-for="(games, category) in gamesByCategory" :key="category">
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
