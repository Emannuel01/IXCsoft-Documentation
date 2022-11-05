import axios from "axios"
import { useEffect, useState } from "react"

export const api = axios.create({
    baseURL: "http://localhost:3000/api"
})

function useFetch(url) {
    const [data, setData] = useState()
    const [isFetching, setIsFetching] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        api.get(url)
            .then((response) => setData(response.data))
            .then(response => console.log(response))
            .catch(err => setError(err))
            .finally(() => {
                setIsFetching(false)
            })
    }, [])
    return { data, error, isFetching }
}

export { useFetch }
