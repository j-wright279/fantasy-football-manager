<script setup lang="ts">

interface NavItem {
    label: string;
    link: string;
}

const navItems : NavItem[] = [
    {label: "Home", link: "/"},
    {label: "Players", link: "/players"},
    {label: "Fixtures", link: "/fixtures"},
    {label: "Teams", link: "/teams"},
];

</script>

<template>
    <header>
        <TopNav :nav-items="navItems"></TopNav>
    </header>
    <div>
        <slot/>
    </div>
</template>

<style scoped>
    
</style>