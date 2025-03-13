<script setup>
    import MediumCard from '@/components/cardbox/MediumCard.vue';
    import { onMounted, ref, computed } from 'vue';

    const allData = ref([]);
    const displayedData = ref([]);
    const searchQuery = ref(""); 
    const itemsPerLoad = 12;
    const loadIndex = ref(0);
    const observer = ref(null);

    const fetchData = async () => {
        try {
            const response = await fetch('/api/api/games');
            const data = await response.json();
            allData.value = data;
            loadMore();
        } catch (error) {
            console.error('Error GameLatest API:', error);
        }
    };

    const loadMore = () => {
        const start = loadIndex.value * itemsPerLoad;
        const end = start + itemsPerLoad;
        displayedData.value = allData.value.slice(0, end);
        loadIndex.value++;
    };

    const filteredData = computed(() => {
        if (!searchQuery.value) {
            return displayedData.value;
        }
        return allData.value.filter(game =>
            game.title.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
    });

    const initObserver = () => {
        const target = document.getElementById("load-trigger");
        if (!target) return;

        observer.value = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                loadMore();
            }
        }, { rootMargin: "50px" });

        observer.value.observe(target);
    };

    onMounted(async () => {
        await fetchData();
        setTimeout(initObserver, 2000); 
    });

    onMounted(() => {
        window.scrollTo(0,0)
    })
</script>

<template>
    <div class="px-4 py-10 w-full pt-32 md:px-60">
        <div>
            <h1 class="text-2xl mb-5 flex gap-2 items-center md:text-3xl">
                <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                </svg>
                Cari Game
            </h1>
            <input v-model="searchQuery" class="border p-2 rounded-lg h-12 w-full md:w-[50%]" type="text" placeholder="Cari Game ...">
        </div>

        <div class="mt-5">
            <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" v-if="filteredData.length > 0">
                <MediumCard v-for="(item) in filteredData" :key="item.id"
                    :id="item.id"
                    :title="item.title"
                    :thumbnail="item.thumbnail"
                    :short_description="item.short_description"
                    :genre="item.genre"
                />
            </div>
            <div v-else class="flex justify-center items-center h-[500px]">
                <p class="text-center text-2xl flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                    Data tidak ditemukan
                </p>
            </div>
        </div>

        <div id="load-trigger" style="height: 20px;"></div>
    </div>
</template>