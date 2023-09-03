<script setup>
    const props = defineProps(['player'])
    const player = props.player
    const show_goals = ref(true)
</script>


<template>
    {{  player }}
</template>

<style scoped>
    li{
        border-bottom: 1px solid #ffffff11;
        padding: 10px;
    }
    #goalButton:hover, #goalButton:focus{
        background-color: #bdbfca05;
        cursor:pointer;
    }
    #goalButton:active{
        background-color: #bdbfca0F;
    }

</style>