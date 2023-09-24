<script setup lang="ts">
import types from '@nuxthq/ui';


const { data } : any = await useFetch("/api/general")
let players : any[] = []
let positions : any[] = []
if(data.value){
    players = data.value.elements
    positions = data.value.element_types
}

const allColumns = [{
    key: 'now_cost',
    label: 'Cost',
    selected: true
}, {
    key: 'second_name',
    label: "Name",
    selected: true
}, {
    key: 'element_type',
    label: 'Position',
    selected: true
}, {
    key: "form",
    label: "Form",
    selected: true
}, {
    key: 'action',
    label: 'View',
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

function getPlayerPosition(player:any) {
    const pos = positions.find((position) => {
        return position.id === player.element_type
    })
    return pos.singular_name
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
                <label class="table-option-label">Order</label>
                <UToggle v-model="sortOrder" on-icon="i-heroicons-arrow-down" off-icon="i-heroicons-arrow-up"></UToggle>
            </div>
        </div>
        <UTable :columns="selectedColumns" :rows="filteredRows">
            <template #action-data="{ row }">
                <NuxtLink :to="`/players/${row.id}`">
                    <UIcon name="i-heroicons-eye" style="font-size: 20px;"></UIcon>
                </NuxtLink>
            </template>
            <template #now_cost-data="{ row }">
                <span>£{{ (row.now_cost / 10).toFixed(1) }}m</span>
            </template>
            <template #second_name-data="{ row }">
                <span>{{ row.first_name }} {{ row.second_name }}</span>
            </template>
            <template #element_type-data="{ row }">
                <span>{{ getPlayerPosition(row) }}</span>
            </template>
        </UTable>
        <div class="table-pagination-container">
            <UPagination v-model="page" :total="players.length" class="table-pagination"></UPagination>
        </div>
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
        margin: 0 1% 15px 0;
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
    .table-pagination {
        margin: 20px
    }
    .table-pagination-container{
        display: flex;
        justify-content: right;
    }
</style>