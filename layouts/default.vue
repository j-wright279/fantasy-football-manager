<template>
    <header>
        <nav>
            <div class="header-left-container">
                <NuxtLink to="/">
                    <UIcon name="i-heroicons-chart-pie" class="headerIcon"></UIcon>
                </NuxtLink>
                <ul>
                    <li class="headerItem">
                        <UButton variant="link"><NuxtLink to="/" class="headerLink">Home</NuxtLink></UButton>
                    </li>
                    <li class="headerItem">
                        <UButton variant="link"><NuxtLink to="/players" class="headerLink">Players</NuxtLink></UButton>
                    </li>
                    <li class="headerItem">
                        <UButton variant="link"><NuxtLink to="/fixtures" class="headerLink">Fixtures</NuxtLink></UButton>
                    </li>
                </ul>
            </div>
            <NuxtLink to="https://fantasy.premierleague.com/" class="header-image-container">
                <img src="/img/premier-league.png" alt="Fantasy Football Link" class="headerImage">
            </NuxtLink>
        </nav>
    </header>
    <div>
        <slot/>
    </div>
</template>

<style scoped>
    nav {
        display: flex;
        justify-content: space-between;
    }
    .header-left-container {
        display: flex;
    }
    ul {
        display: flex;
        list-style-type: none;
        margin:0;
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
        border-radius: 5px;;
    }
    .header-image-container {
        margin: auto 0;
    }
    nav {
        border-bottom: 1px solid black;
        width: 80%;
        margin: 0 auto;
    }
    body {
        background-image: url("premier-league.png");
        background-repeat: no-repeat;
        background-size: 50px;
    }
</style>