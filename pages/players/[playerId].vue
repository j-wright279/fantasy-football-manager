<script setup>

const route = useRoute()
// const { player_data } = await useFetch(`https://fantasy.premierleague.com/api/element-summary/${route.params.playerId}/`)
const { data } = await useFetch("https://fantasy.premierleague.com/api/bootstrap-static/")
const list_of_players = data.value.elements
const list_of_teams = data.value.teams

// Get the player information based on which id we passed in -------------------------
let player = {}
let team = {}
for (var i=0, iLen=list_of_players.length; i<iLen; i++) {
    if (list_of_players[i].id == route.params.playerId) player = list_of_players[i];
}
for (var i=0, iLen=list_of_teams.length; i<iLen; i++) {
    if (list_of_teams[i].id == player.team) team = list_of_teams[i];
}

// Set values for the graphing stuff
const options = ref({
    chart: {
        type: "line",
    },
    plotOptions: {
        bar: {
        borderRadius: 10,
        borderRadiusApplication: "around",
        },
    },
    });
    const series = ref([
    {
        name: "Score",
        data: [],
    },
    ]);

    const updateChart = () => {
        //generate array of random numbers of length 10
        const data = Array.from({ length: 10 }, () =>
            Math.floor(Math.random() * 100)
        );
        options.value = {
            ...options.value,
            xaxis: {
            categories: Array.from(
                { length: 10 },
                (_, i) => new Date().getFullYear() - i
            ), // array of last 10 years
            },
        };
        series.value = [
            {
            name: "Score",
            data: data,
            },
        ];
    };

    onMounted(() => {
    updateChart();
    });
</script>

<template>
    <h1> {{  player.first_name }} {{  player.second_name }}</h1>
    <p> {{ team.name }}</p>
    <div>

    <!-- <ClientOnly>
        <apexchart
        :key="series"
        height="400"
        width="100%"
        :options="options"
        :series="series"
        ></apexchart>
    </ClientOnly> -->
    </div>
</template>

<style scoped>
    h1{
        font-size: 30px;
        margin-inline: 1rem;
    }
    p{
        margin-inline: 1.5em;
    }

</style>