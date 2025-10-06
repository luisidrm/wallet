import { useState } from "react"
import axios, {type AxiosError } from "axios"

interface UsePostOptions<T> {
  onSuccess?: (data: T) => void
  onError?: (error: AxiosError) => void
}

export function usePost<T>(url: string, options?: UsePostOptions<T>) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<AxiosError | null>(null)

  const post = async (body: T, config = {}) => {
    setLoading(true)
    setError(null)
    try {
      const res = await axios.post(url, body, config)
      setData(res.data)
      options?.onSuccess?.(res.data)
      return res.data
    } catch (err) {
      const axiosErr = err as AxiosError
      setError(axiosErr)
      options?.onError?.(axiosErr)
      throw axiosErr
    } finally {
      setLoading(false)
    }
  }

  return { post, data, loading, error }
}
