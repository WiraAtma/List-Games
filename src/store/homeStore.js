import { defineStore } from "pinia";
import { reactive } from "vue";

export const useHomeStore = defineStore('HomeStore', () => {
    const gamesLatests = reactive([]);
    const gamesPopularitys = reactive([]);

    async function gameRelease()  {
        try {
        const response = await fetch('/api/api/games?sort-by=release-date');
        const data = await response.json();
        const limitedData = data.slice(0, 7);
        gamesLatests.push(...limitedData);
        } catch (error) {
        console.error('Error GameLatest API:', error);
        }
    };

    async function gamePopularity ()  {
        try {
        const response = await fetch('/api/api/games?sort-by=popularity');
        const data = await response.json();
        const limitedData = data.slice(0, 4);
        gamesPopularitys.push(...limitedData);
        } catch (error) {
        console.error('Error Popularity API:', error);
        }
    }

    return {
        gamesLatests,
        gamesPopularitys,
        gameRelease,
        gamePopularity
    };
});