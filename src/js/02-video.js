import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('iframe');
const videoPlayer = new Player(iframeEl);

const savePlaybackTime = ({seconds}) => {
  localStorage.setItem('videoplayer-current-time',seconds);
  console.log(seconds);
};

const throttledSavePlaybackTime = throttle(savePlaybackTime, 1000);

videoPlayer.on('timeupdate', throttledSavePlaybackTime);

const savedTime = localStorage.getItem('videoplayer-current-time');

function setCurrentTime(){
  if (!savedTime) {
        return;
  } else {
      console.log(savedTime);
       videoPlayer.setCurrentTime(savedTime)
    };
}
setCurrentTime()


