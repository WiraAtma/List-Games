import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

export const useGameCategorytore = defineStore('gameCategoryStore', () => {
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

            const [popularData, newData] = await Promise.all([
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

    watch(() => route.params.category, () => {
        category.value = route.params.category;
        fetchGames();
    });

    return {
        category,
        popularGames,
        newGames,
        allGames,
        fetchGames
    };
})