<script setup>
import { ref } from 'vue';

const showDropdown = ref(false);
const categories = [
    "MMORPG", "Shooter", "MOBA", "Anime", "Strategy", "Fantasy", "Racing", 
    "Fighting", "Social", "Sports"
];

const closeDropdown = (event) => {
    if (!event.target.closest("#dropdownButton") && !event.target.closest("#dropdownMenu")) {
        showDropdown.value = false;
    }
};

document.addEventListener("click", closeDropdown);
</script>

<template>
    <div class="flex px-60 w-full bg-white fixed left-0 z-50 shadow-md top-0 border-b-2 justify-between py-4 h-16">
        <div class="flex gap-5 relative">
            <RouterLink to="/" class="font-bold text-[110%] hover:text-slate-500">
                GAMEGRATIS.ID
            </RouterLink>
            
            <button 
                id="dropdownButton" 
                @click.stop="showDropdown = !showDropdown"
                class="relative px-3 py-1 rounded-md hover:bg-gray-200"
            >
                Free Games ▾
            </button>

            <div 
                v-if="showDropdown" 
                id="dropdownMenu"
                class="absolute left-32 top-10 bg-slate-300 text-black w-48 rounded-md shadow-lg p-2 z-50"
            >
                <ul class="">
                    <li 
                        v-for="category in categories" 
                        :key="category"
                        class="p-1 hover:bg-slate-400 rounded-md cursor-pointer"
                    >
                    <router-link :to="`/games/category/${category.toLowerCase()}`">{{ category }}</router-link>
                    </li>
                </ul>
            </div>
        </div>

        <div class="flex gap-5">
            <RouterLink to="/games/search" class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 512 512">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                </svg>
            </RouterLink>
        </div>
    </div>
</template>
