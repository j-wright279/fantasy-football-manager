<template>
    <header>
        <nav>
            <span class="headerItem">Logo</span>
            <ul>
                <li class="headerItem"><NuxtLink to="/">Home</NuxtLink></li>
                <li class="headerItem"><NuxtLink to="/players">Players</NuxtLink></li>
                <li class="headerItem"><NuxtLink to="/fixtures">Fixtures</NuxtLink></li>
            </ul>
        </nav>
    </header>
    <div>
        <slot/>
    </div>
</template>

<style scoped>
    nav {
        display: flex;
    }
    ul {
        display: flex;
        list-style-type: none;
        margin:0;
    }
    .headerItem {
        margin: 10px;
    }
    a {
        color: black;
        text-decoration: none;
    }
</style>