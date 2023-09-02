export default defineEventHandler(async (event) => {
    const data: any = await $fetch("https://fantasy.premierleague.com/api/bootstrap-static/", {
        method: "GET"
    }).catch((err) => { elements: []})
    return { players: data.elements }
})