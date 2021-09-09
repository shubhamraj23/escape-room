import {useState} from "react";

const MuteButton = ({changeSound}) => {
  const [icon, iconState] = useState('fa-volume-up')
  
  const toggleMute = () => {
    if (icon === "fa-volume-up"){
      iconState("fa-volume-off")
      changeSound(false)
    }
    else{
      iconState("fa-volume-up")
      changeSound(true)
    }
  }

  return (
    <div className="mute" onClick={toggleMute}>
      <i className={`fa fa-lg ${icon}`} aria-hidden="true"></i>
    </div>
  )
}

export default MuteButton
