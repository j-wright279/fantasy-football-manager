<script setup>
    const props = defineProps(['player'])
    const player = props.player
    const show_goals = ref(true)

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