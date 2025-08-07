import { useEffect, useState } from 'react'
import { getCats } from './api/catApi'
import CatCard from './components/CatCard'
import { useCatStore } from './store/catStore'
import Header from './components/Header'
import { useSubId } from './hooks/useSubId'
import Spinner from './components/Spinner'
import toast from 'react-hot-toast'
import { useTheme } from './context/ThemeContext'

function App() {
  const subId = useSubId()
  const { cats, setCats } = useCatStore()
  const [loading, setLoading] = useState(false)

  const { theme } = useTheme()

  const fetchCats = async () => {
    try {
      setLoading(true)
      const res = await getCats()
      setCats(res.data)
    } catch (err) {
      toast.error('Failed to fetch cats!')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCats()
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Header onRefresh={fetchCats} />
      {loading ? (
        <Spinner />
      ) : (
        <div
          className={`grid gap-4 p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4
          ${
            theme === 'dark'
              ? 'bg-black text-white border-white hover:bg-gray-900'
              : 'bg-white text-black border-black hover:bg-gray-200'
          }
        `}
        >
          {cats.map((cat) => (
            <CatCard key={cat.id} {...cat} subId={subId} />
          ))}
        </div>
      )}
    </div>
  )
}

export default App
