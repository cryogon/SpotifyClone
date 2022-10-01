//FIXME:
//1.Prevent Changing Current Time as we click on same song✔
// 2.Lyrics
//3.Song Duration Isn't Displaying Properly

//NOTE:
//Should use addSong function insted of changing the base songContainer(songList)

// import './mobile'
//Initialization
let index = 0,
    suffle = false,
    repeat = true,
    sameSong = false;
let playButton = document.getElementById('playButton');
let songSeekBar = document.getElementById('songSeek');
let suffleButton = document.getElementById('suffle');
let repeatButton = document.getElementById('repeat');
let songsCurrentTime = document.getElementById("songCurrentTime");
let songsTotalTime = document.getElementById('songTotalTime');
let nextButton = document.getElementById('next');
let backButton = document.getElementById('back');
let songDuration = Array.from(document.getElementsByClassName('duration'));
let tempAudio = new Audio();

let songList = [
    { 
      songLyrics: "lyrics/",
      coverLoc: "https://i.scdn.co/image/ab67616d00001e026ac34b9dcef7f6ab56e85d58",
      songLoc: "songs/1.Synthion-Aurora.mp3",
      songArtist: "Synthion",
      songTitle: "Aurora" 
    },
    {
      songLyrics: "lyrics/",
      coverLoc: "https://i.scdn.co/image/ab67616d00001e02519839ca24ebd7d6f901858e",
      songLoc: "songs/2.Million Days.mp3", 
      songArtist: "Hoang", 
      songTitle: "Million Days" },
    {
      songLyrics: "lyrics/",
      coverLoc: "https://i.scdn.co/image/ab67616d00001e02739d47018b9361084a51663e",
      songLoc: "songs/3.Buddhu Sa Mann.mp3", 
      songArtist: "Amaal Malik, Armaan Malik", 
      songTitle: "Budhu Sa Mann"
     },
    {
      songLyrics: "lyrics/",
      coverLoc: "https://i.scdn.co/image/ab67616d00001e02f84ebf13e92a42d03d04b453",
      songLoc: "songs/4.Gone.mp3", 
      songArtist: "Hoang, Kianna", 
      songTitle: "Gone"
     },
    {
     songLyrics: "lyrics/",
      coverLoc: "https://i.scdn.co/image/ab67616d00001e02a33c3d0cb597ebebc162a17a",
      songLoc: "songs/5.Lockdown.mp3", 
      songArtist: "PIKASONIC, Tatsunoshin, NEONA", 
      songTitle: "Lockdown" },
    {
     songLyrics: "lyrics/",
      coverLoc: "https://i.scdn.co/image/ab67616d00001e0256b5c1c30f1ef40d41e5dc47",
      songLoc: "songs/6.Twinkle.mp3", 
      songArtist: "Synthion", 
      songTitle: "Twinkle" },
    {
      songLyrics: "lyrics/",
      coverLoc: "https://i.scdn.co/image/ab67616d00001e02cd3379a8fd11129d0a6aaf25",
      songLoc: "songs/7.Akuma no Ko.mp3", 
      songArtist: "Higuchi Ai", 
      songTitle: "Akuma no Ko" },
    {
      songLyrics: "lyrics/",
      coverLoc: "https://i.scdn.co/image/ab67616d00001e02520b13b980501b3e44bcf961",
      songLoc: "songs/Dreaming Next To You.mp3", 
      songArtist: "Rena Mikuni", 
      songTitle: "Dreaming Next to You" }
];
const youtubeIds = [
        { no: 1, id: 'R2rjsTQEXWg' },
        { no: 2, id: 'fVeD9vWCpZ8' },
        { no: 3, id: 'i0AUEswUayo' },
        { no: 4, id: 'ePEiAI5_bv4' },
        { no: 5, id: 'VyOVykOzvoE' },
        { no: 6, id: 'wYZIveARSG0' },
        { no: 7, id: 'P1Flz1dI4t0' },
        { no: 8, id: 'Zx3ANmycU_A' },
        { no: 9, id: '4Hg0Nchl3HU' },
        { no: 10, id: 'z1W4c7ym49Y' },
        { no: 11, id: 'RQV96Bxsxsw' },
        { no: 12, id: 'flrvZYcH30c' },
        { no: 13, id: 'L-KX2U4SEpA' },
        { no: 14, id: 'gM4ZBxApihY' },
        { no: 15, id: '77vXbRxP53M' },
        { no: 16, id: 'C-dOn43M7YM' },
        { no: 17, id: 'U45x9qTr1lk' },
        { no: 18, id: 'gRoYo5OClM4' },
        { no: 19, id: 'YBt5SIqBs68' },
    ]
    //End Initialization
function setYoutubeURL(i) {
    document.querySelector('iframe').src = 'https://www.youtube.com/embed/' + youtubeIds[i].id;
}
document.onload = setYoutubeURL(0);
//For Setting Cover Image,Title and Artist of first song on load
function setCoverOfLyrics() {
    document.getElementById('lyricsImage').src = songList[0].coverLoc;
    document.getElementById('lyricsTitle').innerText = songList[0].
    songTitle;
    document.getElementById('lyricsArtist').innerText = songList[0].
    songArtist;
}
document.onload = setCoverOfLyrics();

//For Adding Song in Array 
async function addSong(audioTitle, songCoverPicture, songLocation, audioArtist, songLyricsFile = "lyrics/") {
    let obj = {
        songLyrics: songLyricsFile,
        coverLoc: songCoverPicture,
        songLoc: songLocation,
        
        songArtist: audioArtist,
        
        songTitle: audioTitle
    }
    songList.push(obj);
}
const song = () => {
        let title = document.querySelector('.addSongWindow > form > #windowSongTitle').value;
        let artist = document.querySelector('.addSongWindow > form > #windowSongArtist').value;
        let imageUrl = document.querySelector('.addSongWindow > form > #URL').value;
        let image = document.querySelector('.addSongWindow > form > #windowCoverImage').value;
        let song = document.querySelector('.addSongWindow > form > #songInput').value;
        let lyrics = 'lyrics/';
        document.querySelector('.addSongWindow').style.display = "none";
        addSong(title, image || imageUrl, song, artist, lyrics);
        console.log("Done")
    }
    //Song Add Area
addSong('Onikemodance', 'coverImage/onikemodance.jpg', 'songs/AyaFubiMu - Onikemodance.mp3', 'AyaFubiMu');
addSong('Goodbye Sengen', 'coverImage/goodbye-sengen.jpg', 'songs/Goodbye-Sengen.mp3', 'Ayame Nakiri');
addSong('Moneko', 'https://i.scdn.co/image/ab67616d00001e02f0ef3a66eaf0d59df4be3b34', 'songs/Geoxor - Moneko.mp3', 'Geoxor');
addSong('Twin Skies', 'https://i.scdn.co/image/ab67616d00001e025ada3ba1b512ec72f0199c1d', 'songs/Kotori & Synthion-Twin Skies.mp3', 'Kotori & Synthion');
addSong('Freedom Dive', 'coverImage/freedom-dive.jpg', 'songs/Freedom Dive.mp3', 'xi');
addSong('DEAD', 'coverImage/dead.png', 'songs/Geoxor__SVRGE_-_DEAD.mp3', 'Geoxor & SVRGE');
addSong('Aurora', 'coverImage/geoxor.png', 'songs/Geoxor_-_Aurora.mp3', 'Geoxor');
addSong('Blusk', 'coverImage/geoxor.png', 'songs/Geoxor_-_Blusk.mp3', 'Geoxor');
addSong('World is Mine(Geoxor Remix)', 'coverImage/miku.png', 'songs/Hatsune_Miku_-_World_is_Mine_Geoxor_Remix.flac', 'Hatsune Miku');
addSong('Calling', 'coverImage/Calling.jpg', 'songs/Calling.mp3', 'Alfakyun X Camellia');
addSong('Kimi to lu Shinwa', 'https://i.scdn.co/image/ab67656300005f1f473ac41883b54ecf5fd5835c', 'songs/Jun Maeda X Nagi Yanagi - Kimi To Iu Shinwa.webm', 'Jun Maeda X Nagi Yanagi');
//Song Area End
document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    song();
});



async function createSongList() {
    for (let i = 0; i < songList.length; i++) {
        let source = document.createElement('audio');
        let item = document.createElement('li');
        source.src = songList[i].songLoc;

        source.addEventListener('loadedmetadata', () => {
            let min, sec;
            min = parseInt(source.duration / 60);
            sec = parseInt(source.duration % 60);
            console.log(`${min}:${sec}`);
        })

        item.innerHTML = `
        <div class="songItems" id="${i}">
        <img class="songItemImage" alt="imageNotFound" src = "${songList[i].coverLoc}">
        <div class="songInfo">
        <span class="title">${songList[i].
            songTitle}</span>
        <span class="artist">${songList[i].
            songArtist}</span>
        </div>
        <span class="duration></span>
        </div>
        `
        document.querySelector('ol').appendChild(item);
        // document.getElementById('mobile').appendChild(item);
    }
}
createSongList();
let songItems = Array.from(document.getElementsByClassName("songItems"));
suffleButton.style.color = 'white';
repeatButton.style.color = 'white';
let audioSource = new Audio('songs/1.Synthion-Aurora.mp3');
document.getElementById('bottomSongImage').src = songList[index].coverLoc;
document.getElementById('artistBottom').innerText = songList[index].
songArtist;
document.getElementById('titleBottom').innerText = songList[index].
songTitle;

async function songSet() {
    audioSource.src = songList[index].songLoc;
    document.getElementById('bottomSongImage').src = songList[index].coverLoc;
    document.getElementById('lyricsImage').src = songList[index].coverLoc;
    document.getElementById('titleBottom').innerText = songList[index].
    songTitle;
    document.getElementById('lyricsTitle').innerText = songList[index].
    songTitle;
    document.getElementById('artistBottom').innerText = songList[index].
    songArtist;
    document.getElementById('lyricsArtist').innerText = songList[index].
    songArtist;
    setYoutubeURL(index);
    audioSource.play();
}

async function indexCeilChecker() {
    if (!suffle)
        index++;
    else
        index = Math.floor(Math.random() * 7);
    if (index === songList.length)
        index = 0;
}

function indexFloorChecker() {
    if (index <= 0)
        index = songList.length;
    if (!suffle)
        index--;
    else
        index = Math.floor(Math.random() * 7);
}
//Initialization Over

let tempId = 10000;

songItems.forEach((element, i) => {
    document.getElementsByClassName('bottomSongImage').src = songList[i].coverLoc;
    //for setting index to current index of song so we can use next and previous button change song
    element.onclick = () => {
        index = element.id;
        if (index === tempId) {
            sameSong = true;
        } else
            sameSong = false;
        tempId = index;
    }
});

//Play and Pause Song
playButton.addEventListener('click', () => {
    if (audioSource.paused) {
        audioSource.play();
        playButton.classList.remove('fa-circle-play');
        playButton.classList.add('fa-circle-pause');
    } else {
        audioSource.pause();
        playButton.classList.add('fa-circle-play');
        playButton.classList.remove('fa-circle-pause');
    }
});
//for play button icon change for wireless earphones
audioSource.addEventListener('play', () => {
    playButton.classList.remove('fa-circle-play');
    playButton.classList.add('fa-circle-pause');
});
audioSource.addEventListener('pause', () => {
    playButton.classList.add('fa-circle-play');
    playButton.classList.remove('fa-circle-pause');
});
//For space button to pause and play song
document.addEventListener('keydown', (e) => {
    if (e.key === " ") {
        e.preventDefault();
        if (audioSource.paused) {
            audioSource.play();
            playButton.classList.remove('fa-circle-play');
            playButton.classList.add('fa-circle-pause');
        } else {
            audioSource.pause();
            playButton.classList.add('fa-circle-play');
            playButton.classList.remove('fa-circle-pause');
        }
    }
});

//for changing song when clicked in a song for songItem list and also changing the content of previewSong at the bottom of screen
songItems.forEach((element, i) => {
    element.addEventListener('click', (a) => {
        document.getElementById('bottomSongImage').src = songList[i].coverLoc;
        document.getElementById('lyricsImage').src = songList[i].coverLoc;
        document.getElementById('titleBottom').innerText = songList[i].
        songTitle;
        document.getElementById('lyricsTitle').innerText = songList[i].
        songTitle;
        document.getElementById('artistBottom').innerText = songList[i].
        songArtist;
        document.getElementById('lyricsArtist').innerText = songList[i].
        songArtist;
        if (!sameSong) {
            audioSource.src = songList[i].songLoc;
            // audioSource.src = element.
            songTitle;
            playButton.classList.remove('fa-circle-play');
            playButton.classList.add('fa-circle-pause');
            audioSource.play();
            setYoutubeURL(i);
        }

    });
});
audioSource.addEventListener('playing', () => {
    document.title = `${songList[index].
        songArtist}-${songList[index].
            songTitle}`;
})
audioSource.addEventListener('pause', () => {
    document.title = `Spotify-Clone`;
})

async function setSongDuration() {
    let songCurrentTime = (audioSource.currentTime / audioSource.duration) * 100;
    songSeekBar.value = songCurrentTime;
}
//for updating range input to match the timing of song
audioSource.addEventListener('timeupdate', () => {
    //update seekbar
    setSongDuration();
    if (audioSource.currentTime === audioSource.duration) {
        if (!suffle)
            index++;
        else
            index = Math.floor(Math.random() * songList.length - 1);
        if (index === songList.length && repeat)
            index = 0;
        songSet();
    }
    //bottom Bar time set
    let min = Math.floor(audioSource.currentTime / 60);
    let sec = Math.floor(audioSource.currentTime % 60);
    if (sec <= 9) sec = `0` + sec;
    let tMin = Math.floor(audioSource.duration / 60);
    let tSec = Math.floor(audioSource.duration % 60);
    if (tSec <= 9) tSec = `0` + tSec;
    songsCurrentTime.innerText = `${min}:${sec}`;
    songsTotalTime.innerText = `${tMin}:${tSec}`;

});


//for updating song when we change seekBar

songSeekBar.addEventListener('change', () => {
    audioSource.currentTime = songSeekBar.value * audioSource.duration / 100;
});



//Previous and Next Button
async function nextButtonFunc() {
    indexCeilChecker();
    songSet();
}

async function previosButtonFunc() {
    indexFloorChecker();
    songSet();
}
nextButton.onclick = () => {
    nextButtonFunc();
}
backButton.onclick = () => {
    previosButtonFunc();
}

//Suffle and repeat button
function toggle(par) {
    if (par.style.color === "white") {
        par.style.color = 'green';
    } else {
        par.style.color = 'white';
    }
}
suffleButton.onclick = () => {
    toggle(suffleButton);
    suffle = suffle !== true;
}
repeatButton.onclick = () => {
    toggle(repeatButton);
    repeat = repeat !== true;
}

document.querySelector('#ifrm').addEventListener('onStateChange', () => {
    audioSource.pause();
})
document.body.addEventListener('keydown', () => {
    if (document.getElementById('ifrm').style.display === 'block')
        audioSource.play();
})