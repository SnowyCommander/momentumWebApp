/**1. 현재 시간
 * 2. 인사말
 * 3. 명언 */
const topRight = document.querySelectorAll(".topRight");
const weatherShown = document.getElementById("weatherShown");
const nowTime = document.getElementById("nowTime");
const greetings = document.querySelectorAll(".greetings");
const input = document.querySelectorAll(".input");
const inspiringPhrase = document.getElementById("inspiringPhrase");

console.log(topRight);
console.log(weatherShown);
console.log(nowTime);
console.log(greetings);
console.log(input);
console.log(inspiringPhrase);

// 1. 현재 시간을 디스플레이 하기
nowTime[2];
nowTime[1];

function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const nowTime = `${hours}:${minutes}`;
  document.getElementById("nowTime").textContent = nowTime;
}

setInterval(updateTime, 60000);
updateTime(); // Initial call to display time immediately

// 2. 인사말
