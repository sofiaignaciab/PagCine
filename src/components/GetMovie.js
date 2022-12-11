export const GetMovie = async (title) => {
    const Movie = await new Promise(resolve => {
        fetch(`http://localhost:27017/api/events/${title.movie}`)
            .then(response => response.json())
            .then(result => resolve(result))
    })
    const aux = Movie[0]
    return await aux
}