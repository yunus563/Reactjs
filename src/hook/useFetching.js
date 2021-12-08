import { useState } from "react/cjs/react.development"


export const useFetching =  (callback) => {
  const [isLoading, setIsloading] = useState(false)
  const [error, setError] = useState('')

  const fetching = async (...args) => {
    try {
      setIsloading(true)
      await callback(...args)
    } catch (error) {
      setError(error.message)
    }
    finally{
      setIsloading(false)
    }
  }

  return [fetching, isLoading, error]
}