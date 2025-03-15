import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useSearchStore = defineStore('searchStore', () => {
  const allData = ref([]);
  const displayedData = ref([]);
  const searchQuery = ref('');
  const itemsPerLoad = 12;
  const loadIndex = ref(0);

  const filteredData = computed(() => {
    if (!searchQuery.value) {
      return displayedData.value;
    }
    return allData.value.filter(game =>
      game.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });

  async function fetchData() {
    try {
      const response = await fetch('/api/api/games');
      const data = await response.json();
      allData.value = data;
      loadMore();
    } catch (error) {
      console.error('Error GameLatest API:', error);
    }
  }

  function loadMore() {
    const start = loadIndex.value * itemsPerLoad;
    const end = start + itemsPerLoad;
    displayedData.value = allData.value.slice(0, end);
    loadIndex.value++;
  }

  return {
    allData,
    displayedData,
    searchQuery,
    filteredData,
    fetchData,
    loadMore,
  };
});
