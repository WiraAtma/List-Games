import { defineStore } from "pinia";
import { ref } from "vue";
import { useRoute } from "vue-router";

export const useGameDetailStore = defineStore('gameDetailStore', () => {
    const route = useRoute();
    const game = ref({});
    
    async function fetchData () {
        try {
            const response = await fetch(`/api/api/game?id=${route.params.id}`);
            const data = await response.json();
            game.value = data;
        } catch (error) {
            console.error('Error fetching game data:', error);
        }
    };

    return {
        game,
        fetchData
    };
})
