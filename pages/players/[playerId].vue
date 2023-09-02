<script setup>

const route = useRoute()
const { data: player_history } = await useFetch("/api/playerHistory/32")
const { data: general } = await useFetch("/api/general")

const list_of_players = general.value.elements
const list_of_teams = general.value.teams

// Set the tabs for the page
const items = [{
    index: 0,
    label: 'Info',
    component_name: 'playerInformationTab'
}, {
    index: 1,
    label: 'Stats',
    component_name: 'playerStatsTab'
}, {
    index: 2,
    label: 'History',
    component_name: 'p'
}]

// Get the player information based on which id we passed in -------------------------
let player = {}
let team = {}
for (var i=0, iLen=list_of_players.length; i<iLen; i++) {
    if (list_of_players[i].id == route.params.playerId) player = list_of_players[i];
}
for (var i=0, iLen=list_of_teams.length; i<iLen; i++) {
    if (list_of_teams[i].id == player.team) team = list_of_teams[i];
}
</script>

<template>
    <div id="page">
        <h1> {{  player.first_name }} {{  player.second_name }}</h1>
        <p> {{ team.name }}</p>
        <UCard v-if="player.news != ''" id="newsCard">
            {{ player.news }}.
        </UCard>

        <UTabs :items="items" class="w-full">
            <template #item="{ item }">
                <UCard>
                <div v-if="item.index === 0">
                    <PlayerInformationTab :player="player"/>
                </div>
                <div v-else-if="item.index === 1">
                    <PlayerStatsTab :player="player"/>
                </div>
                <div v-else="item.index === 2">
                    <PlayerHistoryTab :player="player" />
                </div>
            </UCard>
            </template>
        </UTabs>
    </div>

</template>

<style scoped>
    h1{
        font-size: 30px;
    }
    p{
        padding: 10px;
    }
    #page{
        margin: 0 auto;
        max-width: 80%;
        margin-bottom: 20px;
    }
    #newsCard{
        margin: 8px;
    }

</style>