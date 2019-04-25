import { useState, useEffect } from 'react'

export const useMatching = ({ typedWord, currentWord }) => {
  const [isMatched, setIsMatched] = useState(false)

  useEffect(() => {
    if (typedWord === currentWord) {
      setIsMatched(true)
      return
    }
    setIsMatched(false)
  }, [typedWord, currentWord])

  return { isMatched }
}
