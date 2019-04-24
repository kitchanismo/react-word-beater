import { useState, useEffect } from 'react'

export const useMatchingWord = (firstWord, secondWord) => {
  const [isMatch, setIsMatch] = useState(false)

  useEffect(() => {
    if (firstWord === secondWord) {
      setIsMatch(true)
      return
    }
    setIsMatch(false)
  }, [firstWord, secondWord])

  return { isMatch }
}
