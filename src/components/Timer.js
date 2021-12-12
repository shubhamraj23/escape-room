import {useState, useEffect} from "react"

const Timer = ({start, informTimer}) => {
  const [runningTime, changeTime] = useState(5400000)
  
  useEffect(() => {
    if (start === "show" && runningTime>0){
      const startTime = new Date().getTime()
      const timerOn = setTimeout(() => {
        let currentTime = new Date().getTime()
        const elapsedTime = currentTime - startTime
        changeTime(runningTime - elapsedTime)
      }, 1000)
      return () => clearTimeout(timerOn)
    }
  })

  const setOffset = (time) => {
    if (time<10){
      return `0${time}`
    }
    return time
  }

  if (runningTime <= 0){
    informTimer(true)
  }

  return (
    <div className="mx-auto" id="timer">
      <h5 id="timer-content">
        {`${setOffset(Math.floor(Math.round(runningTime/1000)/60))}:${setOffset(Math.round(runningTime/1000)%60)}`}
      </h5>
    </div>
  )
}

export default Timer
