import { useState, useEffect } from 'react'

export const useMatchingWord = (firstWord, secondWord) => {
  const [isMatched, setIsMatched] = useState(false)

  useEffect(() => {
    if (firstWord === secondWord) {
      setIsMatched(true)
      return
    }
    setIsMatched(false)
  }, [firstWord, secondWord])

  return { isMatched }
}
