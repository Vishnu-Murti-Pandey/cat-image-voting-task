import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

export default function Header({ onRefresh }: { onRefresh: () => void }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800">
      <h1 className="text-xl font-bold">😺 Cat Voting App</h1>
      <div className="flex gap-3">
        <Link to="/my-votes" className="px-3 py-1 border rounded cursor-pointer">
          My Votes
        </Link>
        <button
          aria-label="Toggle Theme"
          onClick={toggleTheme}
          className={`px-3 py-1 border rounded cursor-pointer 
            ${
              theme === 'dark'
                ? 'bg-black text-white border-white hover:bg-gray-900'
                : 'bg-white text-black border-black hover:bg-gray-200'
            }`}
        >
          {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
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
