<script setup>
import { ref } from 'vue';

    // Dummy Saja ya
    const questions = [
        {
            id: 1,
            question: 'Apa Itu Gamegratis.id?',
            answer: 'Gamegratis.id adalah sebuah website yang menyediakan berbagai macam game gratis yang bisa di download oleh pengguna. Game yang disediakan di website ini adalah game yang legal dan aman untuk di download.'
        },
        {
            id: 2,
            question: 'Apakah Game yang disediakan di Gamegratis.id legal?',
            answer: 'Ya, game yang disediakan di Gamegratis.id adalah game yang legal dan aman untuk di download. Game yang disediakan di website ini adalah game yang sudah mendapatkan izin dari developer game tersebut.'
        }, 
        {
            id: 3,
            question: 'Apakah Game yang disediakan di Gamegratis.id aman untuk di download?',
            answer: 'Ya, game yang disediakan di Gamegratis.id adalah game yang aman untuk di download. Game yang disediakan di website ini adalah game yang sudah di cek oleh tim kami untuk memastikan bahwa game tersebut aman untuk di download.'
        }, 
        {
            id: 4,
            question: 'Apakah Game yang disediakan di Gamegratis.id bisa dimainkan di semua perangkat?',
            answer: 'Ya, game yang disediakan di Gamegratis.id bisa dimainkan di semua perangkat. Game yang disediakan di website ini adalah game yang sudah di optimalkan untuk di mainkan di semua perangkat.'
        }, 
        {
            id:5,
            question: 'Apakah Game yang disediakan di Gamegratis.id bisa dimainkan secara offline?',
            answer: 'Ya, game yang disediakan di Gamegratis.id bisa dimainkan secara offline. Game yang disediakan di website ini adalah game yang bisa di mainkan secara offline tanpa memerlukan koneksi internet.'
        }
    ];
    
    const questionClicked = ref({});

    const handleClick = (id) => {
        questionClicked.value[id] = !questionClicked.value[id];
    }

</script>

<template>
    <div class="mb-10">
        <h1 class="mb-3 font-bold">Pertanyaan Seputar GAMEGRATIS.ID</h1>
        <div
            class="border p-3 bg-slate-100 mb-3 hover:transform transition-transform duration-300 hover:scale-[101%]"
            v-for="item in questions"
            :key="item.id"
        >
            <button @click="handleClick(item.id)" class="font-semibold">
                {{ item.question }}
            </button>

            <transition name="fade">
                <p v-if="questionClicked[item.id]" class="mt-2">{{ item.answer }}</p>
            </transition>
        </div>
    </div>
</template>


<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
    transform: translateY(-5px);
}
</style>