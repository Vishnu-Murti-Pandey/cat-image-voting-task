import { create } from 'zustand'

interface Cat {
  id: string
  url: string
  score?: number
  voted?: boolean
}

interface CatState {
  cats: Cat[]
  setCats: (cats: Cat[]) => void
  updateCatVote: (id: string, score: number) => void
}

export const useCatStore = create<CatState>((set) => ({
  cats: [],
  setCats: (cats) => set({ cats }),
  updateCatVote: (id, score) =>
    set((state) => ({
      cats: state.cats.map((cat) =>
        cat.id === id ? { ...cat, voted: true, score } : cat
      ),
    })),
}))
