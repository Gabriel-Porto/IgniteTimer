import { useEffect, useContext } from 'react'
import { CountdownContainer, Separator } from './styles'
import { differenceInSeconds } from 'date-fns'
import { CyclesContext } from '../../../../contexts/CycleContext.tsx'

export function Countdown() {
  const {
    currentCycle,
    currentCycleId,
    markCurrentCycleAsFinished,
    amountSecondsPassed,
    setSecondsPassed,
  } = useContext(CyclesContext)

  const totalSeconds = currentCycle ? currentCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: number

    if (currentCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          currentCycle.startDate,
        )
        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()
          setSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [
    currentCycle,
    totalSeconds,
    currentCycleId,
    markCurrentCycleAsFinished,
    setSecondsPassed,
  ])

  const currentSeconds = currentCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutesString = String(minutesAmount).padStart(2, '0')
  const secondsString = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (currentCycle) {
      document.title = `${minutesString}:${secondsString}`
    }
  }, [minutesString, secondsString, currentCycle])

  return (
    <CountdownContainer>
      <span>{minutesString[0]}</span>
      <span>{minutesString[1]}</span>
      <Separator>:</Separator>
      <span>{secondsString[0]}</span>
      <span>{secondsString[1]}</span>
    </CountdownContainer>
  )
}
