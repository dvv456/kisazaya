// const nav = document.querySelector('.nav-list');
// const main = document.querySelector('.main');
// const playBtn = document.querySelector('.play');
// const audio = new Audio();
// audio.src = `./assets/audio/prev.mp3`;
// let isPlay = false;
// let myBtns=document.querySelectorAll('.nav-item');

// nav.addEventListener('click',random_bg_color);
// nav.addEventListener('click',playAudio);
// function playAudio(event) {
//   let data=event.target.dataset.item;
//   audio.src = `./assets/audio/${data}.mp3`;
//   if(!isPlay){
//     playBtn.style.backgroundImage = `url(./assets/svg/pause.svg)`; 
//     audio.play();
//     audio.currentTime = 0;
//     isPlay = true;
//   }else{
//     audio.play();
//   } 
// }

// playBtn.addEventListener('click', playaudio);
// function playaudio() {
//   if(!isPlay){
//     playBtn.style.backgroundImage = `url(./assets/svg/pause.svg)`; 
//     audio.play();
//     isPlay = true;    
//   }else{
//     playBtn.style.backgroundImage = `url(./assets/svg/play.svg)`; 
//     audio.pause();
//     isPlay = false;
//   }  
// }
// audio.addEventListener('ended', (event)=>{
//   playBtn.style.backgroundImage = `url(./assets/svg/play.svg)`; 
//   isPlay = false;
// })

// document.addEventListener('DOMContentLoaded', () => {  
//   myBtns.forEach(function(btn) {
//       btn.addEventListener('click', () => {
//         myBtns.forEach(b => b.classList.remove('active'));
//         btn.classList.add('active');
//       });
//   });

// });

function random_bg_color(){
  let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
  let a;

  function populate(a){
      for(let i=0; i<6; i++){
          let x = Math.round(Math.random() * 14);
          let y = hex[x];
          a += y;
      }
      return a;
  }
  let Color1 = populate('#');
  let Color2 = populate('#');
  var angle = 'to right';

  let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
  document.body.style.background = gradient;
}
random_bg_color();

// var daysSpan = document.querySelector('.days');
// var hoursSpan = document.querySelector('.hours');
// var minutesSpan = document.querySelector('.minutes');
// var secondsSpan = document.querySelector('.seconds');
// timer();
// setInterval(timer, 1000);

// function timer() {
// 	var now = new Date();
// 	var target = new Date(
// 		now.getFullYear() + 1,
// 		0,
// 		1,
// 		0,
// 		0,
// 		0
// 	);
	
// 	var diff = Math.ceil((target - now) / 1000);
	
// 	var days = extract(diff, 60 * 60 * 24);
// 	var hours = extract(days.diff, 60 * 60);
// 	var minutes = extract(hours.diff, 60);
// 	var seconds = extract(minutes.diff, 1);
	
//     daysSpan.innerHTML = days.value;
//     hoursSpan.innerHTML = (hours.value);
//     minutesSpan.innerHTML = (minutes.value);
//     secondsSpan.innerHTML = (seconds.value);

// }

// function extract(diff, formula) {
// 	var value = Math.floor(diff / formula);
// 	var diff = diff % formula;
	
// 	return {value: value, diff: diff};
// }

// function addZero(num) {
// 	if (num <= 9) {
// 		num = '0' + num;
// 	}
	
// 	return num;
// }