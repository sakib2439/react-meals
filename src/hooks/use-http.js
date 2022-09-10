import { useState, useCallback } from 'react'
const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const sendRequest = useCallback(async (request, applyData) => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await fetch(request.url, {
                method: request.method ?? 'GET',
                headers: request.headers ?? {},
                body: request.body ? JSON.stringify(request.body) : null,
            })

            if (!response.ok) {
                throw new Error('Request failed!')
            }

            const data = await response.json()
            applyData(data)
        } catch (err) {
            setError(err.message || 'Something went wrong!')
        }
        setIsLoading(false)
    }, [])

    return {
        isLoading,
        error,
        sendRequest,
    }
}

export default useHttp
