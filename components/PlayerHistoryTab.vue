<script setup>
    const props = defineProps(['player','playerDetail','teams'])
    const player = props.player
    const playerDetail = props.playerDetail
    const teams = props.teams

// https://github.com/apexcharts/vue3-apexcharts

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
    markers:{
        colors: ['white']
    }
    });

    const series = ref([
    {
        name: "Score",
        data: [],
    },
    ]);

    const updateChart = () => {
        //generate array of random numbers of length 10
        const data = Array.from({ length: 4 }, () =>
            Math.floor(Math.random() * 100)
        );

        options.value = {
            ...options.value,
            xaxis: {
            categories: getFixtures()
            },
        };
        series.value = [
            {
            name: "Goals Scored",
            data: data,
            },
        ];
    };

    onMounted(() => {
        updateChart();
    });

    function getFixtures(){
        const fixtureHistory = playerDetail.history
        const fixtureIds = []
        fixtureHistory.forEach((fixture) => {fixtureIds.push(fixture.fixture)});

        return fixtureIds
    }

    function getHistoryElement(elementName){
        const elementArray = []
        // THIS BIT IS A WIP
        playerDetail.history.forEach((element)=>{elementArray.push(fixture[elementName])})
    }
</script>


<template>
    {{  playerDetail.history }}
    <ClientOnly>
        <apexchart
            width="500"
            type="line"
            :options="options"
            :series="series"
        ></apexchart>
    </ClientOnly>
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