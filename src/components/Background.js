import landscape from '../images/landscape-image.jpg'
import portrait from '../images/portrait-image.jpg'
import audio from '../soundtracks/home_sound.mp3'

const Background = ({page, soundState}) => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  let background = landscape

  if (width > height){
    background = landscape;
  }
  else{
    background = portrait;
  }

  const tags = [
    <div
      key="1"
      className="background-image"
      style={
        {
          backgroundImage: `url(${background})`,
        }
      }>
    </div>
  ]

  if (page !== "home-page"){
    tags.push(
      <audio key="2" src={audio} type="audio/mp3" autoPlay loop muted={!soundState}>
      </audio>
    )
  }

  return (
    <div>{tags}</div>
  )
}

export default Background
