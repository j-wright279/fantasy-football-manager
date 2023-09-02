<script setup lang="ts">

const { data } : any = await useFetch("https://fantasy.premierleague.com/api/bootstrap-static/")
let players = data.value.elements

const allColumns = [ {
    key: 'now_cost',
    label: 'Cost',
    selected: true
}, {
    key: 'second_name',
    label: "Name",
    selected: true
}, {
    key: "form",
    label: "Form",
    selected: true
}, {
    key: 'action',
    label: 'Action',
    selected: true
}]

const selectedColumns = ref([...allColumns].filter((x) => x.selected))
const sortColumn = ref([...allColumns][0])
const sortOrder = ref(true)
const optionColumns = [...allColumns].filter((x) => x.key != 'action')

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
    return players.sort((a:any,b:any) => ((a[key] > b[key]) ? 1 : (a[key] < b[key]) ? -1 : 0) * (order ? -1 : 1)) 
}

</script>

<template>
    <div class="container">
        <h1>Players</h1>
        <div class="table-options-container">
            <div class="table-option-container">
                <label class="table-option-label">Search</label>
                <UInput v-model="query" placeholder="Filter players..." />
            </div>
            <div class="table-option-container">
                <label class="table-option-label">Select Columns</label>
                <USelectMenu v-model="selectedColumns" :options="optionColumns" multiple/>
            </div>
            <div class="table-option-container">
                <label class="table-option-label">Sort Column</label>
                <USelectMenu v-model="sortColumn" :options="optionColumns"/>
            </div>
            <div class="table-button">
                <label class="table-option-label">Sort Order</label>
                <UToggle v-model="sortOrder" on-icon="i-heroicons-arrow-down" off-icon="i-heroicons-arrow-up"></UToggle>
            </div>
        </div>
        <UTable :columns="selectedColumns" :rows="filteredRows">
            <template #action-data="{ row }">
                <NuxtLink :to="`/players/${row.id}`">
                    <!--Eye icon SVG from heroicons-->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
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
    h1 {
        font-size: 50px;
        margin: 30px 0;
        font-weight: 600;
    }
    .container {
        max-width: 80%;
        margin: 30px auto;
    }
    .table-option-container {
        width: 30%;
        margin-right: 1%;
    }
    .table-button {
        width: 7%
    }
    .table-options-container {
        display: flex;
        justify-content: left;
    }
    .table-option-label {
        display: block;
        margin-bottom: 7px;
        color: gray;
    }
</style>