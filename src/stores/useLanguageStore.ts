import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface LanguageStore {
  language: 'en' | 'ar'
  switchLanguage: () => void
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    set => ({
      language: 'en',
      switchLanguage: () =>
        set(state => ({
          language: state.language === 'en' ? 'ar' : 'en'
        }))
    }),
    { name: 'language-store' }
  )
)
