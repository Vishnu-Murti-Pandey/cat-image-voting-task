import { useEffect, useState } from 'react'
import { getVotes } from '../api/catApi'
import { useSubId } from '../hooks/useSubId'
import { Link } from 'react-router-dom'

interface Vote {
  image_id: string
  value: number
  image: {
    url: string 
  }
}

export default function MyVotes() {
  const subId = useSubId()
  const [votes, setVotes] = useState<Vote[]>([])

  useEffect(() => {
    async function fetchVotes() {
      const res = await getVotes(subId)
      setVotes(res.data)
    }
    fetchVotes()
  }, [subId])

  return (
    <div className="min-h-screen p-4 bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">My Votes</h1>
        <Link
          to="/"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Back to Gallery
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {votes.map((vote) => (
          <div
            key={vote.image_id}
            className="p-2 border rounded shadow-md"
          >
            <img
              src={vote.image.url}
              alt="cat"
              className="w-full h-64 object-cover rounded"
            />
            <p className="mt-2 text-center">
              You voted: {vote.value === 1 ? '👍' : '👎'}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
