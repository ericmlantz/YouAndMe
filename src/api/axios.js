import axios from 'axios'
import { BACKEND } from "../global"

const API = axios.create({
    baseURL: `${BACKEND}` // Base URL of your Django API
})

export default API