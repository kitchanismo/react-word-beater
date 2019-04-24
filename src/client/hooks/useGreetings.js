import { generateGreet } from '../helpers/random-word'
import { useRef, useState, useEffect } from 'react'

export const useGreetings = (isMatch, points) => {
  const pointsWrapper = useRef(null)
  const greetingWrapper = useRef(null)
  const [greet, setGreet] = useState(generateGreet())

  useEffect(() => {
    // add plus score/greeting tag'
    if (isMatch) {
      setGreet(generateGreet())

      const span = document.createElement('span')
      const h2 = document.createElement('h2')

      span.className = 'plus'
      span.textContent = `+${points}`
      h2.className = 'showGreet'
      h2.textContent = `★ ${greet} ★`

      pointsWrapper.current.appendChild(span)
      greetingWrapper.current.appendChild(h2)

      // remove after a second.
      setTimeout(() => {
        pointsWrapper.current.removeChild(span)
        greetingWrapper.current.removeChild(h2)
      }, 1000)
    }
  }, [isMatch])
  return { greetingWrapper, pointsWrapper }
}
