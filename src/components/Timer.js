import {useState, useEffect} from "react"

const Timer = ({start}) => {
  const [minutes, changeMinutes] = useState(90)
  const [seconds, changeSeconds] = useState("00")
  const [runningTime, changeTime] = useState(5400)
  
  const setSeconds = (time) => {
    if (time<10){
      const newTime = `0${time}`
      changeSeconds(newTime)
    }
    else{
      changeSeconds(time)
    }
  }

  if (start === "show"){
    setTimeout(() => {
      changeTime(runningTime-1)
      changeMinutes(Math.floor(runningTime/60))
      setSeconds(runningTime%60)
    }, 1000)
  }

  return (
    <div className="mx-auto" id="timer">
      <h5 id="timer-content">
        {`${minutes}:${seconds}`}
      </h5>
    </div>
  )
}

export default Timer
