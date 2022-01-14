const $target = document.querySelector("#app");

const $timer = document.createElement("div");
$target.appendChild($timer);

const $startBtn = document.createElement("button");
const $currBtn = document.createElement("button");
$target.appendChild($startBtn);
$target.appendChild($currBtn);

$startBtn.innerHTML=`start`
$currBtn.innerHTML=`refresh`


$startBtn.addEventListener("click", e => {
  localStorage.setItem("time", new Date())
  $time.innerHTML = Date().slice(16, 24);
});

const $time = document.createElement("div");
$target.appendChild($time);

function ontimer() {
  const currTime = Date();
  const prevTime = localStorage.getItem("time")
  const passMinute = currTime.slice(20, 21) - prevTime.slice(20, 21) < 0 ? currTime.slice(20, 21) - prevTime.slice(20, 21) + 60 :  currTime.slice(20, 21) - prevTime.slice(20, 21);
  const passSeconds = currTime.slice(23, 24) - prevTime.slice(23, 24) < 0 ? currTime.slice(23, 24) - prevTime.slice(23, 24) + 60 :  currTime.slice(23, 24) - prevTime.slice(23, 24);
  $time.innerHTML = `${prevTime.slice(16,24)} / ${currTime.slice(16,24)} / ${passMinute}분 ${passSeconds}초 경과`;
}
ontimer();

$currBtn.addEventListener("click", e => {
  ontimer();
});

