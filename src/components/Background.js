import {useState, useEffect} from 'react'
import {homeImages, scenarioImages, diversionImages, homeMusic, gameMusic, followMusic} from '../componentStatus'

import home_landscape from './bg_images/landscape-image.jpg'
import home_portrait from './bg_images/portrait-image.jpg'
import scenario_landscape from './bg_images/scenario-landscape.jpg'
import scenario_portrait from './bg_images/scenario-portrait.jpg'
import diversion_landscape from './bg_images/diversion-landscape.jpg'
import diversion_portrait from './bg_images/diversion-portrait.jpg'

import home_music from '../soundtracks/home_sound.mp3'
import game_music from '../soundtracks/game_play.mp3'
import follow_music from '../soundtracks/follow_music.mp3'

const Background = ({page, soundState, changeBackground}) => {
  const [background, updateBackground] = useState((window.innerWidth > window.innerHeight) ? home_landscape : home_portrait)
  const [audio, updateAudio] = useState("")

  const removeRepeat = (page) => {
    if (page.includes("repeated")){
      return page.replace("repeated-", "")
    }
    return page
  }

  useEffect(() => {
    if (scenarioImages.includes(removeRepeat(page))){
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
    else if (diversionImages.includes(removeRepeat(page))){
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
    else if (homeImages.includes(removeRepeat(page))){
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

    if (homeMusic.includes(removeRepeat(page))){
      updateAudio(home_music)
    }
    else if (gameMusic.includes(removeRepeat(page))){
      updateAudio(game_music)
    }
    else if (followMusic.includes(removeRepeat(page))){
      updateAudio(follow_music)
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
