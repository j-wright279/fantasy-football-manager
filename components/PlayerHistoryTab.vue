<script setup>
    const props = defineProps(['player','playerHistory'])
    const player = props.player
    const playerHistory = props.playerHistory

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
    {{  data }}
    <ClientOnly>
        <apexchart
            width="500"
            type="bar"
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