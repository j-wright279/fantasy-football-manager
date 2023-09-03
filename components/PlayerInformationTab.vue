<script setup>
    const props = defineProps(['player'])
    const player = props.player
    const show_goals = ref(true)
</script>


<template>
    <!-- {{  player }} -->
    <ul>
        <li>Cost: £{{ player.now_cost / 10 }}m</li>
        <li>Form: {{ player.form }}</li>
        <li>Total Points: {{ player.total_points }}</li>
        <li id="goalButton" @click="show_goals = !show_goals">Goal Related:</li>
        <UContainer v-if="show_goals">
            <li>Scored: {{ player.goals_scored }}</li>
            <li>Assisted: {{ player.assists }}</li>
            <li>Conceded: {{  player.goals_conceded }}</li>
            <li>Own Goals: {{ player.own_goals }}</li>
            <li>Penalties Saved: {{ player.penalties_saved }}</li>
            <li>Penalties Missed: {{ player.penalties_missed }}</li>
        </UContainer>
        <li>Minutes Played: {{ player.minutes }}</li>
        <li>Yellow Cards: {{ player.yellow_cards }}</li>
        <li>Red Cards: {{ player.red_cards }}</li>
        <li>Bonus: {{ player.bonus }}</li>
        <li>Influence: {{ player.influence }}</li>
        <li>Creativity: {{ player.creativity }}</li>
        <li>Threat: {{ player.threat }}</li>
    </ul>    
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