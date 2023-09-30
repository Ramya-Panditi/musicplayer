console.log("helloooo");
let songIndex =0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterPlay');
let gif = document.getElementById('gif');
let progressbar = document.getElementById('progressbar');
let next = document.getElementById('next');
let back = document.getElementById('back');
let masterplaysongname = document.querySelector('#mastersongname');
let songContainerCard = Array.from(document.getElementsByClassName('card'));

let songs = [
    {songName: "Warriyo - Mortals", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Neha kakkar", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Aashique2", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]
//changing songs names and covers dynamically and programmaticcally instead of manually in html
songContainerCard.forEach((element,i)=>{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("song-des")[0].textContent = songs[i].songName;     
})


//making an array of objects
let play = masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;  
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
    console.log("clicked");
})


//listen to events
audioElement.addEventListener('timeupdate',function(){
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value = progress;
})

progressbar.addEventListener('change',()=>{
    audioElement.currentTime = (progressbar.value*audioElement.duration)/100;
    
})



const changeToPlay = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-pause");
        element.classList.add("fa-play");
        
    })
}


Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        changeToPlay();
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        songIndex = parseInt(e.target.id);
        audioElement.src = `songs/${songIndex +1}.mp3`;
        console.log("degug"); 
        masterplaysongname.textContent = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;  
        
        
    })
})
back.addEventListener('click',function(){
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex--;
    }
    audioElement.src = `songs/${songIndex +1}.mp3`;
    console.log("degug"); 
    audioElement.currentTime = 0;
    masterplaysongname.textContent = songs[songIndex].songName;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;  
    
})
next.addEventListener('click',function(){
    if(songIndex>9){
        songIndex = 0;
    }
    else{
        songIndex++;
    }
    masterplaysongname.textContent = songs[songIndex].songName;
    audioElement.src = `songs/${songIndex +1}.mp3`;
    console.log("degug"); 
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;  
    
})