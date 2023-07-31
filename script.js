console.log("Welcome to spotify");
//initialize the variables
let songIndex = 0; 
let audioElement= new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');
let songitems=Array.from(document.getElementsByClassName('songitems'));
let songs=[
    {songname: "Wanna Be Yours- Arctic Monkeys", filepath: "songs/1.mp3", coverpath:"covers/1.jpg"},
    {songname: "Apocalypse-Cigarettes After S", filepath: "songs/2.mp3", coverpath:"covers/apo.jpg"},
    {songname: "Sunsetz-Cigarettes After S", filepath: "songs/3.mp3", coverpath:"covers/apo.jpg"},
    {songname: "d4vd-Here With Me", filepath: "songs/4.mp3", coverpath:"covers/4.jpg"},
    {songname: "Double Take-Dhruv", filepath: "songs/5.mp3", coverpath:"covers/5.jpg"},
    {songname: "Until I Found You -Stephen Sanchez ft. Em Beihold", filepath: "songs/6.mp3", coverpath:"covers/6.jpg"},
    {songname: "Night changes | one direction ", filepath: "songs/7.mp3", coverpath:"covers/7.jpg"},
    {songname: "Shayad - Chaahat Kasam Nahi Hai | Pritam | Arijit Singh", filepath: "songs/8.mp3", coverpath:"covers/8.jpg"},
    {songname: "Ali Gatie - It's You", filepath: "songs/9.mp3", coverpath:"covers/9.jpg"},
    {songname: "Charlie Puth - We Don't Talk Anymore (feat. Selena Gomez)", filepath: "songs/10.mp3", coverpath:"covers/10.jpg"},
]
songitems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
})
// audioElement.play();
//Handle Play Pause Click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0

    }
})

//listen to events
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    //update seekbar

    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressbar.value=progress;

});
myProgressbar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressbar.value*audioElement.duration/100
})
const makeallplay=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-circle-play');

    })

}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target);
        makeallplay();
        songIndex= parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        mastersongname.innerText=songs[songIndex].songname;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');


    })

    
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
    songIndex+= 1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songname;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
    songIndex-= 1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songname;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');

})

