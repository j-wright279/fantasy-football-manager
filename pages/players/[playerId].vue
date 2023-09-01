<script setup>

const route = useRoute()
const { data } = await useFetch(`https://fantasy.premierleague.com/api/element-summary/${route.params.playerId}/`)

</script>

<template>
    <div>{{ data }}</div>    
</template>