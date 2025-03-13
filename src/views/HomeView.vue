<script setup>
  import LargeCard from '@/components/cardbox/LargeCard.vue';
  import LongCard from '@/components/cardbox/LongCard.vue';
  import Banner from '@/components/home/Banner.vue';
  import Question from '@/components/home/Question.vue';
  import { onMounted, reactive } from 'vue';

  const gamesLatests = reactive([]);
  const gamesPopularitys = reactive([]);

  onMounted(async () => {
    try {
      const response = await fetch('/api/api/games?sort-by=release-date');
      const data = await response.json();
      const limitedData = data.slice(0, 7);
      gamesLatests.push(...limitedData);
    } catch (error) {
      console.error('Error GameLatest API:', error);
    }
  })

  onMounted(async () => {
    try {
      const response = await fetch('/api/api/games?sort-by=popularity');
      const data = await response.json();
      const limitedData = data.slice(0, 4);
      gamesPopularitys.push(...limitedData);
    } catch (error) {
      console.error('Error Popularity API:', error);
    }
  })
</script>

<template>
  <Banner/>
  <div class="px-60 w-full">
    <div class="my-5 gap-x-5 flex">
      <div>
        <h1 class="font-bold text-xl">Game Terbaru</h1>
        <div>
          <div v-for="gameLatest in gamesLatests" :key="gameLatest.id">
            <LongCard
              :id="gameLatest.id"
              :title="gameLatest.title"
              :thumbnail="gameLatest.thumbnail"
              :short_description="gameLatest.short_description"
              :genre="gameLatest.genre"
            />
          </div>
          <div class="flex">
            <RouterLink to="/games" class="border p-3 rounded-lg ml-auto hover:bg-slate-100">Game Lainnya</RouterLink>
          </div>
        </div>
      </div>
      <div>
        <h1 class="font-bold text-xl">Game Populer</h1>
        <div v-for="(gamesPopularity) in gamesPopularitys" :key="gamesPopularity.id">
          <LargeCard
            :id="gamesPopularity.id"
            :title="gamesPopularity.title"
            :thumbnail="gamesPopularity.thumbnail"
          />
        </div>
      </div>
    </div>
    <Question/>
  </div>
</template>
