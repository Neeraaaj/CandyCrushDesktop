import React, {useEffect}from 'react'
import ScoreBoard from './ScoreBoard'
import './navbar.css'
import useSound from 'use-sound'
import mySound from '../assets/main_music.mp3'

const Navbar = ( {score} ) => {
    const [playSound, {stop}] = useSound(mySound, {volume: 10, loop: true});
    useEffect(() => {
        playSound();


        return () => {
            stop();
        };
    }, [playSound, stop])

  return (
    <div className='nav'>
        <button className='stop-btn' onClick = {() => stop()} >
            <img src="https://cdn-icons-png.flaticon.com/512/40/40372.png" alt="Stop Icon" style={{width: "25px", height: "25px"}}/>
        </button>
        <button className='start-btn' onClick = {() => playSound()}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png' style={{width: "25px", height: "25px"}}/>
        </button>
        <div className='score'>
            <ScoreBoard score = {score}/>
        </div>
    </div>
  )
}

export default Navbar