import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_TIME = 'videoplayer-current-time'
    
player.on('timeupdate', throttle(onPause, 1000));

function onPause({seconds}) {
    console.log(seconds);
    localStorage.setItem(STORAGE_TIME, seconds);
}
player.setCurrentTime(localStorage.getItem(STORAGE_TIME));

