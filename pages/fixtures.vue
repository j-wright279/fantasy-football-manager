<script setup lang="ts">

const { data } = await useFetch("https://fantasy.premierleague.com/api/fixtures?future=1")

</script>

<template>
    <div>
        {{ data }}
    </div>
</template>