<script setup lang="ts">
import { ref } from 'vue';

let showMenu = ref(false);
const toggleNav = () => (showMenu.value = !showMenu.value);

const { navItems } = defineProps(["navItems"])
</script>

<template>
    <div class="bg-dark">
        <nav class="container px-6 py-2 mx-auto md:flex md:justify-between md:items-center">
            <div class="flex items-center justify-between">
                <NuxtLink to="https://fantasy.premierleague.com/" class="header-image-container">
                    <img src="/img/premier-league.png" alt="Fantasy Football Link" class="headerImage">
                </NuxtLink>
                <!-- Mobile menu button -->
                <div @click="toggleNav" class="flex md:hidden">
                    <button type="button" class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400">
                        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current"><path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path></svg>
                    </button>
                </div>
            </div>
            <!-- switches between dropdown and menu -->
            <ul :class="showMenu ? 'flex mb-8 mt-7' : 'hidden'" class="ul-margin-reset flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
                <li v-for="navItem in navItems" class="headerItem">
                    <UButton variant="link"><NuxtLink :to="navItem.link" class="headerLink">{{ navItem.label }}</NuxtLink></UButton>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
    ul {
        list-style-type: none;
    }
    .bg-dark{
        border-bottom: 4px solid #141419;
        background-color: #18191d;
    }
    .headerItem {
        margin: auto 10px;
    }
    .headerLink {
        font-weight: 600;
        font-size: 30px;
    }
    .headerIcon {
        font-size: 50px;
        margin: 25px 35px 20px 30px;
    }
    .headerImage {
        height: 55px;
        aspect-ratio: 2160 / 2739;
        background-color: white;
        padding: 5px;
        border-radius: 5px;
        margin: 25px 35px 20px 30px;
    }
    .header-image-container {
        margin: auto 0;
    }
    nav {
        /* width: 80%; */
        margin: 0 auto;
    }

    /* replicating tailwing's md: option */
    @media only screen and (min-width: 768px) {
        ul {
            margin: 0;
        } 
    }
</style>