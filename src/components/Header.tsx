import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header({ onRefresh }: { onRefresh: () => void }) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    document.documentElement.classList.toggle('dark', newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }

  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800">
      <h1 className="text-xl font-bold">😺 Cat Voting App</h1>
      <div className="flex gap-3">
        <Link to="/my-votes" className="px-3 py-1 border rounded cursor-pointer">
          My Votes
        </Link>
        <button
          onClick={toggleTheme}
          className={`px-3 py-1 border rounded 
            ${
              isDark
                ? 'bg-[#000] hover:bg-[#1b1a1a] text-[#FFF] border-white'
                : 'bg-[#FFF] hover:bg-[#cbcbcb] text-[#000] border-black'
            } 
               cursor-pointer`}
        >
          {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>
        <button
          onClick={onRefresh}
          className="px-3 py-1 cursor-pointer hover:bg-blue-800 bg-blue-600 text-white rounded"
        >
          Refresh Cats
        </button>
      </div>
    </div>
  )
}
