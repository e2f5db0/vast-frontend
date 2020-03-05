import axios from 'axios'

const baseurl = 'https://vast-backend.herokuapp.com/'

const get_count_left = () => {
    const request = axios.get(baseurl + 'left-path/count/')
    return request.then((res) => res.data.lines)
}

const get_count_center = () => {
    const request = axios.get(baseurl + 'center-path/count/')
    return request.then((res) => res.data.lines)
}

const get_count_right = () => {
    const request = axios.get(baseurl + 'right-path/count/')
    return request.then((res) => res.data.lines)
}

const end = (path, index, lCount, cCount, rCount) => {
    if (path === 'left' && index === lCount+1) {
        return true
    }
    if (path === 'center' && index === cCount+1) {
        return true
    }
    if (path === 'right' && index === rCount+1) {
        return true
    }
    return false
}

const nextLine = async (path, index, setShowChoices, setLine, setChoices, setIndex) => {
    const l = await axios.get(baseurl + path + '-path/' + String(index))
    setShowChoices(false)
    const choices = [
        l.data.choice1,
        l.data.choice2,
        l.data.choice3
    ]
    const text = l.data.text
    setLine(text)
    setChoices(choices)
    setIndex(index + 1)
}

export default { get_count_left, get_count_center, get_count_right, end, nextLine }
