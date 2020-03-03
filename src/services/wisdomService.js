
const getRandomId = () => {
    let id = 1 + Math.random() * (10 - 1)
    if (id < 10) {
        id = Math.floor(id)
    } else if (id >= 10) {
        id = 9
    }
    return id
}

export default { getRandomId }
