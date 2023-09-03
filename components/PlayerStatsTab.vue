<script setup>
    const props = defineProps(['player'])
    const player = props.player
    const show_goals = ref(true)
</script>


<template>
    <ul>
        <li>Selected by {{ player.selected_by_percent }}% of players</li>
        <li>Transfers In: {{ player.transfers_in }}</li>
        <li>Transfers Out: {{ player.transfers_out }}</li>
        <li v-if="player.chance_of_playing_next_round != null">Chance Of Playing Next Round: {{ player.chance_of_playing_next_round }}</li>
    </ul>
    <!-- {{  player }} -->
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