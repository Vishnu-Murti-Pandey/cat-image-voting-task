import { useEffect, useState } from 'react'

export const useSubId = () => {
  const [subId, setSubId] = useState('')

  useEffect(() => {
    const existing = localStorage.getItem('sub_id')
    if (existing) {
      setSubId(existing)
    } else {
      const id = crypto.randomUUID()
      localStorage.setItem('sub_id', id)
      setSubId(id)
    }
  }, [])

  return subId
}
