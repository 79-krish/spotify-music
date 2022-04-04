let songIndex=0;
let audio=new audio('1.mp3.mp3');
let masterplay=document.getElementById('masterplay');
let progressbar=document.getElementById('progressbar');
let songs=[
    {songname:"let me love you",fileapath:"1.mp3.mp3"},
   // {songname:"let me love you",fileapath:"C:\Users\Krishnal\Desktop\bootstrap\Let-Me-Love-You_320(PaglaSongs).mp3"},
]
/*let audio=new audio("Let-Me-Love-You_320(PaglaSongs).mp3");*/

masterplay.addEventListener('click',()=>
{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-solid fa-circle-play');
        masterplay.classList.add('fa-solid fa-circle-pause');
    }
})

progressbar.addEventListener('timeupdate', ()=>
{
 console.log('timeupdate');
})