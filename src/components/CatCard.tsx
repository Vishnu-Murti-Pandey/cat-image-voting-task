import { useState } from 'react'
import { voteCat } from '../api/catApi'
import { useCatStore } from '../store/catStore'
import toast from 'react-hot-toast'

type Props = {
  id: string
  url: string
  score?: number
  voted?: boolean
  subId: string
}

export default function CatCard({ id, url, score, voted, subId }: Props) {
  const updateCatVote = useCatStore((s) => s.updateCatVote)
  const [loading, setLoading] = useState(false)

  const handleVote = async (value: 1 | -1) => {
    try {
      setLoading(true)
      const res = await voteCat(id, subId, value)
      updateCatVote(id, res.data.value)
      toast.success('Voted!')
    } catch (err) {
      toast.error('Vote failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="rounded border shadow-md p-2 flex flex-col items-center">
      <img src={url} alt="cat" className="w-full h-64 object-cover rounded" />
      <div className="mt-2 flex gap-2">
        <button
          className="px-3 py-1 hover:bg-green-700 bg-green-500 cursor-pointer text-white rounded disabled:opacity-50"
          disabled={voted || loading}
          onClick={() => handleVote(1)}
        >
          👍
        </button>
        <button
          className="px-3 py-1 hover:bg-red-700 bg-red-500 cursor-pointer text-white rounded disabled:opacity-50"
          disabled={voted || loading}
          onClick={() => handleVote(-1)}
        >
          👎
        </button>
        {loading && (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        )}
      </div>
      {voted && <p className="text-sm mt-1">Score: {score}</p>}
    </div>
  )
}
