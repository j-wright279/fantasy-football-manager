<script setup lang="ts">

const { data } : any = await useFetch("https://fantasy.premierleague.com/api/bootstrap-static/")
let players = data.value.elements

const allColumns = [{
    key: "form",
    label: "Form"
}, {
    key: 'second_name',
    label: "Name"
}, {
    key: 'action',
    label: 'Action'
}]
const selectedColumns = ref([...allColumns])
const sortColumn = ref([...allColumns][0])
const sortOrder = ref(true)
const optionColumns = [...allColumns].filter((x) => {
    return x.key != 'action'
})

const query = ref('')

const page = ref(1)
const peoplePerPage = 10

const filteredRows = computed(() => {
    if(!query.value){
        return paginate(sort(players, sortColumn, sortOrder.value), page.value, peoplePerPage)
    }
    return paginate(sort(filter(players, query.value), sortColumn, sortOrder.value), page.value, peoplePerPage)
})

function paginate(players : any, currentPage : number, peoplePerPage: number){
    return players.slice((currentPage - 1) * peoplePerPage, (currentPage) * peoplePerPage)
}

function filter(players : any, query : string){
    return players.filter((player : any) => {
        return Object.values(player).some((value) => {
            return String(value).toLowerCase().includes(query.toLowerCase())
        })
    })
}

function sort(players : any, column : any, order: boolean){
    const key = column.value.key
    console.log(players[0])
    console.log(players[0][key])
    return players.sort((a:any,b:any) => ((a[key] > b[key]) ? 1 : (a[key] < b[key]) ? -1 : 0) * (order ? -1 : 1)) 
}

</script>

<template>
    <!--Open Icon-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <div class="container">
        <div class="tableOptionsContainer">
            <div class="tableOptionContainer">
                <UInput v-model="query" placeholder="Filter players..." />
            </div>
            <div class="tableOptionContainer">
                <USelectMenu v-model="selectedColumns" :options="optionColumns" multiple/>
            </div>
            <div class="tableOptionContainer">
                <USelectMenu v-model="sortColumn" :options="optionColumns"/>
            </div>
            <div class="tableButton">
                <UToggle v-model="sortOrder"></UToggle>
            </div>
        </div>
        <UTable :columns="selectedColumns" :rows="filteredRows">
            <template #action-data="{ row }">
                <NuxtLink :to="`/players/${row.id}`">
                    <span class="material-symbols-outlined">visibility</span>
                </NuxtLink>
            </template>
            <template #second_name-data="{ row }">
                <span>{{ row.first_name }} {{ row.second_name }}</span>
            </template>
        </UTable>
        <UPagination v-model="page" :total="players.length"></UPagination>
    </div>
</template>

<style scoped>
    li {
        margin: 5px;
        font-size: 20px;
        border: 2px solid black;
        padding: 3px 5px;
        list-style-type: none;
        background-color: #d4d4d4;
    }
    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .container {
        max-width: 80%;
        margin: 30px auto;
    }
    .tableOptionContainer {
        width: 30%;
        margin-right: 1%;
    }
    .tableButton {
        width: 7%
    }
    .tableOptionsContainer {
        display: flex;
        justify-content: left;
    }
</style>