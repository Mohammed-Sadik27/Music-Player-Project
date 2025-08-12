// a list  that contain some music and informations
const data=[{title:"Baba Hamou",singer:"Maâlem Hamid El Kasri",source:"audio/dedpression-339994.mp3"}
,{title:"Inas Inas",singer:"Mohamed Rouicha",source:"audio/intensity-by-audio-club-343637.mp3"},
{title:"Fine Ghadi Biya Khouya",singer:"Jil Jilala",source:""}];

// End list of data that contain some music and informations

// Get some Elements 
const title=document.querySelector(".music_name");
const artistName=document.querySelector(".artist_name");
const currentTime=document.querySelector(".current_time")
const dure=document.querySelector(".duration");
const progress=document.querySelector(".progress");
const prevBtn=document.querySelector("#previous");
const nextBtn=document.querySelector("#next");
const play=document.querySelector("#pause");
const audio=document.querySelector("#audio");
const controles=document.querySelector(".controles")
const volumeIcon=document.querySelector("#volumeIcon");
const volume=document.querySelector("#volume");
// End Get some Elements 

let i=0;

function music_choise(){ // define this function that choise a music from Data.
    if(i <data.length){
        let choise =data[i];
        i++;
        return choise;
    }
    else if((i>=data.length) || (i<0)){
        i=0;
        return data[i] ;
    }
}
function prev_music(){ // a function that help us to return to the previous music
    i--;
    if(i>=0){
        let choise =data[i];
        return choise;
    }
    if(i<0){
        i=0;
        return data[i];
    }   
}  

function format_time(seconds){ // a function that take the number of seconds abd  return the format of time (min:sec)
    const minutes=Math.floor(seconds/60)
    const sec=(Math.floor(seconds%60)).toString().padStart(2,"0");
    return `${minutes}:${sec}`;
}
let number_of_Click=0;

// Add action for some buttons 
play.addEventListener("click",()=>{
    number_of_Click++;
    if(number_of_Click===1){
        const music=music_choise()
        play.src="images/pause.png";
        audio.src=music.source;
        audio.play();
        title.textContent=music.title;
        artistName.textContent=music.singer;
    }else if(number_of_Click===2){
        play.src="images/play-buttton.png";
        audio.pause()
        number_of_Click=0;
    }

})
audio.addEventListener("loadedmetadata",()=>{
    progress.max=Math.floor(audio.duration)
    dure.textContent=format_time(audio.duration);
   
})
audio.addEventListener("timeupdate",()=>{
    currentTime.textContent=format_time(audio.currentTime);
     progress.value=Math.floor(audio.currentTime);
})
progress.addEventListener("input",()=>{
    audio.currentTime=progress.value;
})
volumeIcon.addEventListener("click",()=>{
    volume.classList.toggle("hide");
})
volumeIcon.addEventListener("dblclick",()=>{
    volume.classList.add("hide");
})
volume.addEventListener("input",()=>{
    audio.volume=volume.value;
})
nextBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    const music=music_choise()
    play.src="images/pause.png";
    audio.src=music.source;
    audio.play();
    title.textContent=music.title;
    artistName.textContent=music.singer;
})
prevBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    const music=prev_music();
    play.src="images/pause.png";
    audio.src=music.source;
    audio.play();
    title.textContent=music.title;
    artistName.textContent=music.singer; 
    
})
// End Add action for some buttons 


