<template>
    <div class="flex items-center justify-center h-screen text-center flex-col px-4">
        <svg xmlns="http://www.w3.org/2000/svg" height="110" width="110" viewBox="0 0 512 512">
            <path d="M175.9 448c-35-.1-65.5-22.6-76-54.6C67.6 356.8 48 308.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208s-93.1 208-208 208c-28.4 0-55.5-5.7-80.1-16zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM128 369c0 26 21.5 47 48 47s48-21 48-47c0-20-28.4-60.4-41.6-77.7c-3.2-4.4-9.6-4.4-12.8 0C156.6 308.6 128 349 128 369zm128-65c-13.3 0-24 10.7-24 24s10.7 24 24 24c30.7 0 58.7 11.5 80 30.6c9.9 8.8 25 8 33.9-1.9s8-25-1.9-33.9C338.3 320.2 299 304 256 304zm47.6-96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm-128 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/>
        </svg>
        <div>
            <h1 class="text-4xl md:text-6xl font-bold text-red-500">404</h1>
            <p class="text-base md:text-lg text-gray-600">Oops! Halaman tidak ditemukan.</p>
        </div>
        <RouterLink to="/" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Kembali ke Beranda
        </RouterLink>
    </div>
</template>