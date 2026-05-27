import { useEffect, useMemo, useState } from 'react'
import { LanguageContext } from './languageContext.js'

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('cn')

  useEffect(() => {
    document.documentElement.lang = language === 'cn' ? 'zh-CN' : 'en'
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((current) => (current === 'cn' ? 'en' : 'cn')),
      text: (entry) => {
        if (!entry || typeof entry !== 'object') return entry
        return entry[language] ?? entry.en ?? entry.cn ?? ''
      },
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
