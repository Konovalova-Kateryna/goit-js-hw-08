import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_TIME = 'videoplayer-current-time';
const startTime = localStorage.getItem(STORAGE_TIME) || 0;
console.log(startTime);

player.on('timeupdate', throttle(onPause, 1000));

function onPause({seconds}) {
    console.log(seconds);
    localStorage.setItem(STORAGE_TIME, seconds);
    startTime = localStorage.getItem(STORAGE_TIME);
}

player.setCurrentTime(startTime).then(function() {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
