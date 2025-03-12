<script setup>
    import { computed, onMounted, ref, watch } from 'vue';

    const props = defineProps({
        screenshots: {
            type: Array,
            required: true,
            default: () => []
        }
    });

    const index = ref(0);
    let interval = null;

    const currentImage = computed(() => {
        return props.screenshots.length > 0 ? props.screenshots[index.value].image : '';
    });

    const startSlideshow = () => {
        if (interval) clearInterval(interval);
        if (props.screenshots.length > 0) {
            interval = setInterval(() => {
                index.value = (index.value + 1) % props.screenshots.length;
            }, 5000);
        }
    };

    onMounted(() => {
        startSlideshow();
    });

    watch(() => props.screenshots, (newScreenshots) => {
        if (newScreenshots.length > 0) {
            index.value = 0;
            startSlideshow();
        }
    });

</script>


<template>
    <div class="my-10 relative w-full h-96 overflow-hidden border-4 border-gray-300 rounded-lg">
        <transition name="slide" mode="out-in">
            <img v-if="currentImage" :src="currentImage" :key="currentImage" 
                 alt="Gambar" class="absolute w-full h-full object-cover">
        </transition>
    </div>
</template>

<style scoped>
.slide-enter-active, .slide-leave-active {
    transition: transform 0.5s ease-in-out;
}
.slide-enter-from {
    transform: translateX(100%);
}
.slide-leave-to {
    transform: translateX(-100%);
}
</style>