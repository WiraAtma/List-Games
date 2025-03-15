<script setup>
    import ImageBox from '@/components/game-detail/ImageBox.vue';
    import ImageScrolling from '@/components/game-detail/ImageScrolling.vue';
    import Question from '@/components/home/Question.vue';
    import { useGameDetailStore } from '@/store/gameDetailStore';
    import { computed, onMounted } from 'vue';

    const gameDetailStore = useGameDetailStore();

    onMounted(async () => {
        await gameDetailStore.fetchData();
        window.scrollTo(0, 0);
    });

    const game = computed(() => gameDetailStore.game)

</script>

<template>
    <div class="px-4 md:px-60 w-full pt-20">
        <div class="flex flex-col md:flex-row gap-5">
            <ImageBox
                :thumbnail="game.thumbnail"
                :game_url="game.game_url"
            />
            <div class="w-full md:w-[70%]">
                <div class="flex items-center gap-2">
                    <router-link to="/" class="hover:text-slate-300">Home ></router-link>
                    <router-link to="/games" class="hover:text-slate-300">Games ></router-link>
                    <p>{{ game.title }}</p>
                </div>
                <div class="my-5">
                    <h1 class="text-3xl font-bold mb-5">{{ game.title }}</h1>
                    <h1 class="text-xl font-semibold mb-2">Deskripsi Tentang Game ini</h1>
                    <p>{{ game.description }}</p>
                </div>
                <div>
                    <h1 class="text-xl font-semibold">Informasi Tambahan</h1>
                    <hr class="my-3">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-y-5 gap-x-5 md:gap-x-52">
                        <div>
                            <h3>Title</h3>
                            <p class="font-semibold">{{ game.title }}</p>
                        </div>
                        <div>
                            <h3>Developer</h3>
                            <p class="font-semibold">{{ game.developer }}</p>
                        </div>
                        <div>
                            <h3>Publisher</h3>
                            <p class="font-semibold">{{ game.publisher }}</p>
                        </div>
                        <div>
                            <h3>Tanggal Rilis</h3>
                            <p class="font-semibold">{{ game.release_date }}</p>
                        </div>
                        <div>
                            <h3>Genre</h3>
                            <p class="font-semibold">{{ game.genre }}</p>
                        </div>
                        <div>
                            <h3>Platform</h3>
                            <p class="font-semibold">{{ game.platform }}</p>
                        </div>
                    </div>
                </div>
                <ImageScrolling
                    :screenshots="game.screenshots"
                />
                <div class="mb-10">
                    <h1 class="text-xl font-semibold">Spesifikasi Minimal</h1>
                    <hr class="my-3">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-x-80">
                        <div>
                            <h3>Sistem Operasi</h3>
                            <p class="font-semibold">{{ game.minimum_system_requirements?.os }}</p>
                        </div>
                        <div>
                            <h3>Prosesor</h3>
                            <p class="font-semibold">{{ game.minimum_system_requirements?.processor }}</p>
                        </div>
                        <div>
                            <h3>Memori</h3>
                            <p class="font-semibold">{{ game.minimum_system_requirements?.memory }}</p>
                        </div>
                        <div>
                            <h3>Grafik</h3>
                            <p class="font-semibold">{{ game.minimum_system_requirements?.graphics }}</p>
                        </div>
                        <div>
                            <h3>Penyimpanan</h3>
                            <p class="font-semibold">{{ game.minimum_system_requirements?.storage }}</p>
                        </div>
                        <div>
                            <h3>Info Tambahan</h3>
                            <p class="font-semibold">Spesifikasi Akan berubah Selama Update Dan Game Berjalan</p>
                        </div>
                    </div>
                    <hr class="my-3">
                </div>
            </div>
        </div>
        <Question/>
    </div>
</template>