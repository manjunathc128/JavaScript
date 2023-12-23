let audioElement = new Audio(`songs/4.mp3`)
// console.log(audioElement.duration)
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')
// let songName = document.getElementsByClassName('songInfo')
let curSongName = document.getElementById('songName')
let gif = document.getElementById('gif')
let masterAudio = audioElement
let audioTime = Array.from(document.getElementsByClassName('timestamp'))

let previousAudioBtn = 1  /////
let songs = [
    {songName: "Des Mere Des", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"  },
    {songName: "Ondee Samane", filePath: "songs/2.mp3", coverPath: "covers/2.jpg", },
    {songName: "Mera Rang De Basanti", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Ohm Maha Prana Deepam", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Aadhi Joythi Banyo", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Eee Padham", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    {songName: "Bhagawan hai kaha re tu", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    {songName: "Hands Up", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    {songName: "Bhota Kola", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    {songName: "Karma - Kantara", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]
// console.log(audioTime)
// console.log(audioTime[0])

// audioTime.forEach( (audio, index) => {
//     console.log(songs[index].time.duration)
//     audio.textContent = parseInt(songs[index].time.duration/60)

// })


masterPlay.addEventListener('click', (event) => {
    if(audioElement.paused || audioElement.currentTime < 0){
        
        songIndex = previousAudioBtn        //////////////////
        console.log(songIndex)
        curSongName.innerText = songs [ songIndex !== 10 ?  songIndex : songIndex - 1 ].songName

        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')

        gif.style.opacity = 1;
        audioElement.src = `songs/${songIndex}.mp3`         /////////////////////
        audioElement.play()

        if (previousAudioBtn){
            document.getElementById(previousAudioBtn).classList.remove('fa-play-circle')
            document.getElementById(previousAudioBtn).classList.add('fa-pause-circle')
        }
    }
    else{
        audioElement.pause()

        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')

        gif.style.opacity = 0;

        if (previousAudioBtn){
            document.getElementById(previousAudioBtn).classList.remove('fa-pause-circle')
            document.getElementById(previousAudioBtn).classList.add('fa-play-circle')
        }
    }
} )

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    // progress = (audioElement.currentTime / audioElement.duration) * 100
    myProgressBar.value = progress;
    
    // console.log(progress, audioElement.currentTime, audioElement.duration , typeof audioElement.currentTime, typeof audioElement.duration)
    // myProgressBar.value = 
    // console.log(myProgressBar.value)

    if (audioElement.currentTime === audioElement.duration){

        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')

        document.getElementById(previousAudioBtn).classList.remove('fa-pause-circle')
        document.getElementById(previousAudioBtn).classList.add('fa-play-circle')

        gif.style.opacity = 0;
    };

})


// audioTime.forEach( (element, index) => { element.addEventListener('timeupdate', (event) => {
//         console.log(event)
//         console.log(songs[index].time.duration)
//         element.textContent = songs[index].time.duration
// })})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;

} )

 const makeAllPlays = () =>{ Array.from(document.getElementsByClassName('songItemPlay')).forEach( (element) => {
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
    })}

    // const makeAllPlays = ()=>{
    //     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    //         element.classList.remove('fa-pause-circle')
    //         element.classList.add('fa-play-circle');
    //     })
    // }    

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element,index) => {
    element.addEventListener('click', (event) => {


            if (audioElement.paused || audioElement.currentTime <= 0){
                
                
                makeAllPlays()
                
                songIndex = parseInt(event.target.id) - 1
                // console.log(songIndex)
                event.target.classList.remove('fa-play-circle')
                event.target.classList.add('fa-pause-circle')
                
                masterPlay.classList.remove('fa-play-circle')
                masterPlay.classList.add('fa-pause-circle') 

                // if (previousAudioBtn){
                //     document.getElementById(previousAudioBtn).classList.remove('fa-pause-circle')
                //     document.getElementById(previousAudioBtn).classList.add('fa-play-circle')
                // }

                previousAudioBtn = parseInt(event.target.id) 

                audioElement.src = `songs/${songIndex + 1}.mp3`
                masterAudio = audioElement
                // console.log(masterAudio)
                audioElement.currentTime = 0;

                curSongName.textContent = songs[songIndex].songName
                gif.style.opacity = 1;

               
                // songName.innerText = songs[songIndex].songName

                audioElement.play()
                
                // console.log(songIndex, songs[songIndex].filePath)
            }
            
            else if (!audioElement.paused && audioElement !== masterAudio ){
                
                
                event.target.classList.remove('fa-pause-circle')
                event.target.classList.add('fa-play-circle')
                
                masterPlay.classList.remove('fa-pause-circle')
                masterPlay.classList.add('fa-play-circle')

                gif.style.opacity = 0;
                previousAudioBtn = parseInt(event.target.id)

                audioElement.pause()
            }
            
    
                if (audioElement === masterAudio){
                    // console.log("Audio:",audioElement,"master:", masterAudio)
                    audioElement.src = `songs/${parseInt(event.target.id)}.mp3`
                    

                    songIndex = parseInt(event.target.id) - 1
                    curSongName.innerText = songs[songIndex].songName

                      ////////
                    audioElement.play()

                    event.target.classList.remove('fa-play-circle')
                    event.target.classList.add('fa-pause-circle')

                    masterPlay.classList.remove('fa-play-circle')
                    masterPlay.classList.add('fa-pause-circle')

                    masterAudio = audioElement
                    
                    if (previousAudioBtn){
                        document.getElementById(previousAudioBtn).classList.remove('fa-pause-circle')
                        document.getElementById(previousAudioBtn).classList.add('fa-play-circle')
                    }

                    previousAudioBtn= parseInt(event.target.id) 
                }
                    
                else{

                    event.target.classList.remove('fa-pause-circle')
                    event.target.classList.add('fa-play-circle')
                    
                    masterPlay.classList.remove('fa-pause-circle') 
                    masterPlay.classList.add('fa-play-circle')
                    
                    masterAudio = audioElement
                    audioElement.pause()
                    // console.log(masterAudio)
                    audioElement.currentTime = 0

                    previousAudioBtn= parseInt(event.target.id)        //////
                
            }
                

                
                
    })
    
});


// console.log(myProgressBar.value)

// console.log(audioElement)
// audioElement.play('songs/4.jpg');
// console.log(makeAllPlays)