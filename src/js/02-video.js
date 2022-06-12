//  <iframe src="https://player.vimeo.com/video/76979871?h=8272103f6e"
// width="640" height="360" frameborder="0" allowfullscreen allow="autoplay;
//  encrypted-media"></iframe>

import Player from '@vimeo/player';

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
