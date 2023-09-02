export default defineEventHandler(async (event) => {
    const playerId = getRouterParam(event,"playerId")
    console.log(playerId)
    const data: any = await $fetch(`https://fantasy.premierleague.com/api/element-summary/${playerId}`, {
        method: "GET"
    })
    return data
})