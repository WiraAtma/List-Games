<script setup>
import LargeCard from '@/components/cardbox/LargeCard.vue';
import MediumCard from '@/components/cardbox/MediumCard.vue';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const category = ref(route.params.category); 
const popularGames = ref([]);
const newGames = ref([]);
const allGames = ref([]);

const fetchGames = async () => {
    try {
        const [popularRes, newRes, allRes] = await Promise.all([
            fetch(`/api/api/games?sort-by=popularity&category=${category.value}`),
            fetch(`/api/api/games?sort-by=release-date&category=${category.value}`),
            fetch(`/api/api/games?category=${category.value}`),
        ]);

        const [popularData, newData, allData] = await Promise.all([
            popularRes.json(),
            newRes.json(),
            allRes.json(),
        ]);

        popularGames.value = popularData.slice(0, 3);
        newGames.value = newData.slice(0, 3);
        allGames.value = newData;
    } catch (error) {
        console.error('Error fetching game data:', error);
    }
};

onMounted(fetchGames);

watch(() => route.params.category, () => {
    category.value = route.params.category;
    fetchGames();
});
</script>

<template>
    <div class="pt-20 px-4 md:px-60">
        <div>
            <h1 class="font-bold text-xl md:text-2xl">Game Terbaru Genre {{ category.toUpperCase() }}</h1>
            <div class="flex gap-4">
                <LargeCard
                    v-for="item in newGames"
                    :key="item.id"
                    :id="item.id"
                    :title="item.title"
                    :thumbnail="item.thumbnail"
                />
            </div>
        </div>
        <div class="my-5">
            <h1 class="font-bold text-xl md:text-2xl">Game Populer Genre {{ category.toUpperCase() }}</h1>
            <div class="flex gap-4">
                <LargeCard
                    v-for="item in popularGames"
                    :key="item.id"
                    :id="item.id"
                    :title="item.title"
                    :thumbnail="item.thumbnail"
                />
            </div>
        </div>
        <div class="my-5">
            <h1 class="font-bold text-xl md:text-2xl">Game Lainnya Genre {{ category.toUpperCase() }}</h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <MediumCard
                    v-for="item in allGames"
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