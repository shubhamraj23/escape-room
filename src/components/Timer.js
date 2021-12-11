import {useState, useEffect} from "react"

const Timer = ({start, informTimer}) => {
  const [runningTime, changeTime] = useState(5400)
  
  useEffect(() => {
    if (start === "show" && runningTime>0){
      let startTime = new Date().getTime()
      let delay = 1000
      const timerOn = setTimeout(() => {
        const a = new Date()
        const currentTime = new Date().getTime()
        const timeGap = currentTime - startTime
        delay = Math.max(2000 - timeGap, 0)
        changeTime(runningTime-1)
        startTime = currentTime
      }, delay)
      return () => clearTimeout(timerOn)
    }
  })

  const setOffset = (time) => {
    if (time<10){
      return `0${time}`
    }
    return time
  }

  if (runningTime === 0){
    informTimer(true)
  }

  return (
    <div className="mx-auto" id="timer">
      <h5 id="timer-content">
        {`${setOffset(Math.floor(runningTime/60))}:${setOffset(runningTime%60)}`}
      </h5>
    </div>
  )
}

export default Timer
