import React, { useState, useEffect } from 'react';
import Sound from 'react-sound';
import './CardSound.styles.scss';
import Button from '@material-ui/core/Button';
import { FaPlay, FaPause } from 'react-icons/fa';

const CardSound = (props) => {
    const [play, setPlay] = useState(true);
    const [music, setMusic] = useState(props.music);

    useEffect(() => {
        setMusic(props.music);
    }, [props.music]);

    const playPause = () => {
        setPlay(!play);
    }
    return (
        <div className="">
            <Button variant="outlined" color='secondary' onClick={playPause} style={{borderRadius:'50%'}}>{play ? <FaPause /> : <FaPlay />}</Button>
            <Sound
                url={music}
                playStatus={play ? Sound.status.PLAYING : Sound.status.PAUSED}
            />
        </div >
    );
}

export default CardSound;