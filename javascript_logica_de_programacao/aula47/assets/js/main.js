// const tagTimer = document.querySelector("#tag-timer")
// const btnStartTimer = document.querySelector("#start-timer")
// const btnStopTimer = document.querySelector("#stop-timer")
// const btnResetTimer = document.querySelector("#reset-timer")

// let contador = 0
// let timer;
// const initTimer = () => {
//     if(timer) return
//     timer = setInterval(() => {
//         contador++;
//         const data = new Date(`01-01-1970 00:00:${contador}`)
//         const time = data.toLocaleTimeString("pt-BR", {
//             hour12: false
//         })
//         tagTimer.textContent = time
//     }, 1000)
//     tagTimer.setAttribute("class", "text-info")
// }

// const resetTimer = () => {
//     contador = 0
//     clearInterval(timer)
//     tagTimer.textContent = "00:00:00"
//     tagTimer.setAttribute("class", "text-danger")
//     timer = false
// }

// const stopTimer = () => {
//     clearInterval(timer)
//     timer = false
//     tagTimer.setAttribute("class", "text-white-50")
// }


// btnStartTimer.addEventListener("click", () => initTimer())
// btnStopTimer.addEventListener("click", () => stopTimer())
// btnResetTimer.addEventListener("click", () => resetTimer())

const tagTimer = document.querySelector("#tag-timer")
const btnStart = document.querySelector("#start-timer")
const btnStop = document.querySelector("#stop-timer")
const btnReset = document.querySelector("#reset-timer")

let seconds = 0
let intervalId = null

const formatTime = (totalSeconds) => {
  const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, "0")
  const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0")
  const secs = String(totalSeconds % 60).padStart(2, "0")

  return `${hrs}:${mins}:${secs}`
}

const startTimer = () => {
  if (intervalId !== null) return

  intervalId = setInterval(() => {
    seconds++
    tagTimer.textContent = formatTime(seconds)
  }, 1000)

  tagTimer.className = "text-info"
}

const stopTimer = () => {
  clearInterval(intervalId)
  intervalId = null
  tagTimer.className = "text-white-50"
}

const resetTimer = () => {
  stopTimer()
  seconds = 0
  tagTimer.textContent = "00:00:00"
  tagTimer.className = "text-danger"
}

btnStart.addEventListener("click", startTimer)
btnStop.addEventListener("click", stopTimer)
btnReset.addEventListener("click", resetTimer)
