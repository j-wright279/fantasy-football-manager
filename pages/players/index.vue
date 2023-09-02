<script setup>

const { data } = await useFetch("https://fantasy.premierleague.com/api/bootstrap-static/")

const columns = [{
  key: 'first_name',
  label: 'First Name'
}, {
  key: 'second_name',
  label: 'Second Name'
}]

</script>

<template>
    <div class="container">
        <UTable :columns="columns" :rows="data.elements" />
    </div>
    <div class="container">
        <h1>Players</h1>
        <ul>
            <li v-for="player in data.elements">
                {{ player.first_name }} {{ player.second_name }}
            </li>
        </ul>
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
        margin: 0 auto;
    }

</style>