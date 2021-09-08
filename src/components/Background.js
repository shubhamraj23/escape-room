import landscape from '../images/landscape-image.jpg'
import portrait from '../images/portrait-image.jpg'

const Background = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  let background = landscape

  if (width > height){
    background = landscape;
  }
  else{
    background = portrait;
  }

  return (
    <div
      className="background-image"
      style={
        {
          backgroundImage: `url(${background})`,
        }
      }>
    </div>
  )
}

export default Background
