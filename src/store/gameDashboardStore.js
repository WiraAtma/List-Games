import { defineStore } from "pinia";
import { ref } from "vue";

export const useGameDashboardStore = defineStore('gameDashboardStore', () => {
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

    return {
        gamesByCategory,
        fetchGames
    };
})