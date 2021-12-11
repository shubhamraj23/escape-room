import {useState, useEffect} from 'react'
import {homeImages, scenarioImages, diversionImages} from '../componentStatus'

import home_landscape from '../images/landscape-image.jpg'
import home_portrait from '../images/portrait-image.jpg'
import scenario_landscape from '../images/scenario-landscape.jpg'
import scenario_portrait from '../images/scenario-portrait.jpg'
import diversion_landscape from '../images/diversion-landscape.jpg'
import diversion_portrait from '../images/diversion-portrait.jpg'
import audio from '../soundtracks/home_sound.mp3'

const checkBackground = () => {
  if (window.innerWidth > window.innerHeight){
    return home_landscape
  }
  else{
    return home_portrait
  }
}

const Background = ({page, soundState, changeBackground}) => {
  const [background, updateBackground] = useState(checkBackground())

  useEffect(() => {
    if (scenarioImages.includes(page)){
      if (window.innerWidth > window.innerHeight){
        setTimeout(() => {
          updateBackground(scenario_landscape)
          changeBackground(scenario_landscape)
        }, 2500)
      }
      else{
        setTimeout(() => {
          updateBackground(scenario_portrait)
          changeBackground(scenario_portrait)
        }, 2500)
      }
    }
    else if (diversionImages.includes(page)){
      if (window.innerWidth > window.innerHeight){
        setTimeout(() => {
          updateBackground(diversion_landscape)
          changeBackground(diversion_landscape)
        }, 2500)
      }
      else{
        setTimeout(() => {
          updateBackground(diversion_portrait)
          changeBackground(diversion_portrait)
        }, 2500)
      }
    }
    else if (homeImages.includes(page)){
      if (window.innerWidth > window.innerHeight){
        setTimeout(() => {
          updateBackground(home_landscape)
          changeBackground(home_landscape)
        }, 2500)
      }
      else{
        setTimeout(() => {
          updateBackground(home_portrait)
          changeBackground(home_portrait)
        }, 2500)
      }
    }
  }, [page])

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
