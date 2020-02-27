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

export default { get_count_left, get_count_center, get_count_right }
