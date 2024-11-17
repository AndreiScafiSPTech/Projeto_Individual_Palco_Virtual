//Vídeo Teatro

const video = document.querySelector('.video');
const btn = document.querySelector('.buttons i');
const bar = document.querySelector('.video-bar');

const playPause = () => {
    if (video.paused) {
        video.play();
        btn.className = 'far fa-pause-circle';
        video.style.opacity = '1';
    } else {
        video.pause();
        btn.className = 'far fa-play-circle';
        video.style.opacity = '.7';
    }
}

btn.addEventListener('click', () => {
    playPause();
});

video.addEventListener('timeupdate', () => {
    const barWidth = video.currentTime / video.duration;
    bar.style.width = `${barWidth * 100}%`;
    if (video.ended) {
        btn.className = 'far fa-play-circle';
        video.style.opacity = '.7';
    }
});

// Video Dublagem

const video2 = document.querySelector('.video-2');
const btn2 = document.querySelector('.buttons-2 i');
const bar2 = document.querySelector('.video-bar-2');

const playPause2 = () => {
    if (video2.paused) {
        video2.play();
        btn2.className = 'far fa-pause-circle';
        video2.style.opacity = '1';
    } else {
        video2.pause();
        btn2.className = 'far fa-play-circle';
        video2.style.opacity = '.7';
    }
}

btn2.addEventListener('click', () => {
    playPause2();
});

video2.addEventListener('timeupdate', () => {
    const barWidth = video2.currentTime / video2.duration;
    bar2.style.width = `${barWidth * 100}%`;
    if (video2.ended) {
        btn2.className = 'far fa-play-circle';
        video2.style.opacity = '.7';
    }
});

// Video Locucao 1

const video3 = document.querySelector('.video-3');
const btn3 = document.querySelector('.buttons-3 i');
const bar3 = document.querySelector('.video-bar-3');

const playPause3 = () => {
    if (video3.paused) {
        video3.play();
        btn3.className = 'far fa-pause-circle';
        video3.style.opacity = '1';
    } else {
        video3.pause();
        btn3.className = 'far fa-play-circle';
        video3.style.opacity = '.7';
    }
}

btn3.addEventListener('click', () => {
    playPause3();
});

video3.addEventListener('timeupdate', () => {
    const barWidth = video3.currentTime / video3.duration;
    bar3.style.width = `${barWidth * 100}%`;
    if (video3.ended) {
        btn3.className = 'far fa-play-circle';
        video3.style.opacity = '.7';
    }
});

// Video Locucao 2

const video4 = document.querySelector('.video-4');
const btn4 = document.querySelector('.buttons-4 i');
const bar4 = document.querySelector('.video-bar-4');

const playPause4 = () => {
    if (video4.paused) {
        video4.play();
        btn4.className = 'far fa-pause-circle';
        video4.style.opacity = '1';
    } else {
        video4.pause();
        btn4.className = 'far fa-play-circle';
        video4.style.opacity = '.7';
    }
}

btn4.addEventListener('click', () => {
    playPause4();
});

video4.addEventListener('timeupdate', () => {
    const barWidth = video4.currentTime / video4.duration;
    bar4.style.width = `${barWidth * 100}%`;
    if (video4.ended) {
        btn4.className = 'far fa-play-circle';
        video4.style.opacity = '.7';
    }
});