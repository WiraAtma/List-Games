<template>
    <router-link to="/games">
        <div class="border w-full my-3 p-3 rounded bg-slate-100 flex hover:transform transition-transform duration-300 hover:scale-105">
            <div class="flex w-85%">
                <img src="/public/images/cover.png" width="25%" alt="cover"/>
                <div class="ml-5 my-2">
                    <h3 class="mb-1.5">Title</h3>
                    <p class="mb-1.5">Description</p>
                    <div>
                        <ul class="flex gap-2">
                            <li class="border bg-white p-1 text-[80%] font-semibold rounded-lg">Gendre 1</li>
                            <li class="border bg-white p-1 text-[80%] font-semibold rounded-lg">Gendre 2</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="w-15% flex items-center">
                <p class="font-bold text-white bg-blue-400 rounded-lg p-1">GRATIS</p>
            </div>
        </div>
    </router-link>
</template>