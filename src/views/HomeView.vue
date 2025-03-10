<script setup>
import LargeCard from '@/components/cardbox/LargeCard.vue';
import LongCard from '@/components/cardbox/LongCard.vue';
import Banner from '@/components/home/Banner.vue';
import Question from '@/components/home/Question.vue';

</script>

<template>
  <Banner/>
  <div class="px-60 w-full">
    <div class="my-5 gap-x-5 flex">
      <div>
        <h1 class="font-bold text-xl">Game Terbaru</h1>
        <div>
          <LongCard/>
          <LongCard/>
          <LongCard/>
          <LongCard/>
          <LongCard/>
          <LongCard/>
          <LongCard/>
        </div>
      </div>
      <div>
        <h1 class="font-bold text-xl">Game Populer</h1>
        <LargeCard/>
        <LargeCard/>
        <LargeCard/>
      </div>
    </div>
    <Question/>
  </div>
  
</template>
