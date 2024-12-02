const date = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let t;
let timer = true;
let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let lap = [];
let lapCount = 0;

export function digitalClock() {
    const container = document.getElementById("root");

    const page = document.createElement("div");
    page.id = "web-page";
    page.style.width = "100%";
    page.style.height = "100%";
    

    const clockContainer = document.createElement("div");
    clockContainer.style.textAlign = "center";
    clockContainer.style.margin = "0 10%";
    clockContainer.style.padding = "20px";
    clockContainer.style.background = "linear-gradient(to bottom, #6600cc, #ff0099)";
    clockContainer.style.color = "white";
    clockContainer.style.display = "flex";
    clockContainer.style.flexDirection = "column";
    clockContainer.style.justifyContent = "center";
    clockContainer.style.alignItems = "center";
    clockContainer.style.fontFamily = "Arial, sans-serif";

    const clockHeading = document.createElement("h1");
    clockHeading.style.fontWeight = "600";
    clockHeading.textContent = "Digital Clock";

    let day = days[date.getDay()];
    let month = months[date.getMonth()];
    let todaysDate = date.getDate();
    let fullYear = date.getFullYear();

    if (todaysDate < 10) todaysDate = "0" + todaysDate;

    const dateText = document.createElement("h4");
    dateText.textContent = `${day}, ${todaysDate} ${month}, ${fullYear}`;
    dateText.style.fontWeight = "600";

    const clockTimeDiv = document.createElement("div");
    clockTimeDiv.style.display = "flex";
    clockTimeDiv.style.justifyContent = "center";
    clockTimeDiv.style.marginTop = "20px";

    ["hour", "minute", "second", "ampm"].forEach((id) => {
        const content = document.createElement("div");
        content.id = id;
        content.style.margin = "0 5px";
        content.style.fontSize = "2.5rem";
        content.style.fontWeight = "bold";
        content.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        content.style.color = "white";
        content.style.borderRadius = "5px";
        content.style.padding = "10px 20px";
        clockTimeDiv.appendChild(content);
    });
    

    const stopWatchContainer = document.createElement("div");

    const stopWatchHeading = document.createElement("h1");
    stopWatchHeading.style.fontWeight = "600";
    stopWatchHeading.textContent = "Stop Watch";

    const timeContainer = document.createElement("div");
    timeContainer.style.display = "flex";
    timeContainer.style.justifyContent = "center";
    timeContainer.style.marginTop = "20px";

    ["hr", "min", "sec", "count"].forEach((id) => {
        const content = document.createElement("div");
        content.id = id;
        content.textContent= "00";
        content.style.margin = "0 5px";
        content.style.fontSize = "2.5rem";
        content.style.fontWeight = "bold";
        content.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        content.style.color = "white";
        content.style.borderRadius = "5px";
        content.style.padding = "10px 20px";
        timeContainer.appendChild(content);
    });

    const buttonContainer = document.createElement("div");
    buttonContainer.style.display = "flex";
    buttonContainer.style.justifyContent = "center";
    buttonContainer.style.marginTop = "20px";

    const startBtn = document.createElement("button");
    startBtn.textContent = "Start";

    startBtn.style.cssText = `
    width: 100px;
    padding: 10px 15px;
    margin: 0px 20px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 4px;
    border-top-left-radius: 4px;
    cursor: pointer;
    font-size: 20px;
    transition: 0.5s;
    color: white;
    font-weight: 500;
    background-color: rgba(0, 0, 0, 0.6)
    `
    const stopBtn = document.createElement("button");
    stopBtn.textContent = "Stop";
    stopBtn.disabled = true;
    stopBtn.style.cssText = `
    width: 100px;
    padding: 10px 15px;
    margin: 0px 20px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 4px;
    border-top-left-radius: 4px;
    cursor: pointer;
    font-size: 20px;
    transition: 0.5s;
    color: white;
    font-weight: 500;
   background-color: rgba(0, 0, 0, 0.6);
    `

    const lapBtn = document.createElement("button");

    lapBtn.textContent = "Lap";
    lapBtn.disabled = true;

    lapBtn.style.cssText = `
    width: 100px;
    padding: 10px 15px;
    margin: 0px 20px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 4px;
    border-top-left-radius: 4px;
    cursor: pointer;
    font-size: 20px;
    transition: 0.5s;
    color: white;
    font-weight: 500;
    background-color:rgba(0, 0, 0, 0.6);
    `

    const resetBtn = document.createElement("button");

    resetBtn.textContent = "Reset";
    resetBtn.disabled = true;

    resetBtn.style.cssText = `
    width: 100px;
    padding: 10px 15px;
    margin: 0px 20px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 4px;
    border-top-left-radius: 4px;
    cursor: pointer;
    font-size: 20px;
    transition: 0.5s;
    color: white;
    font-weight: 500;
    background-color: rgba(0, 0, 0, 0.6);
    `
    const lapContainer = document.createElement("div");


    lapBtn.addEventListener('click', function () {
        let hrString = hour;
        let minString = minute;
        let secString = second;
        let countString = count;
        if (hour < 10) {
            hrString = "0" + hrString;
        }

        if (minute < 10) {
            minString = "0" + minString;
        }

        if (second < 10) {
            secString = "0" + secString;
        }

        if (count < 10) {
            countString = "0" + countString;
        }
        let newLep = `${hrString} : ${minString} : ${secString} : ${countString}`
        lap.push(newLep)
        lapCount+=1;

        let lapContent = document.createElement("div");
        lapContent.style.width="100%"
        lapContent.style.margin="10px"
        lapContent.style.display="flex";
        lapContent.style.justifyContent = "space-between";
        lapContent.style.textAlign = "center";

        let lapIndex = document.createElement("span");
        lapIndex.textContent = lapCount;
        let lapTime = document.createElement("span");
        lapTime.textContent = newLep;

        lapContent.append(lapIndex, lapTime);
        lapContainer.appendChild(lapContent)

      
    });

    startBtn.addEventListener('click', function () {
        timer = true;
        stopWatch();
        startBtn.textContent = "Restart";
        startBtn.disabled = true;
        stopBtn.disabled = false;
        resetBtn.disabled = false;
        lapBtn.disabled = false;
    });
    
    stopBtn.addEventListener('click', function () {
        timer = false;
        stopBtn.disabled = true;
        lapBtn.disabled = true;
        startBtn.disabled = false;
        resetBtn.disabled = false;

    });
    
    resetBtn.addEventListener('click', function () {
        timer = false;
        lap = []
        hour = 0;
        minute = 0;
        second = 0;
        count = 0;
        document.getElementById('hr').innerHTML = "00";
        document.getElementById('min').innerHTML = "00";
        document.getElementById('sec').innerHTML = "00";
        document.getElementById('count').innerHTML = "00";
        startBtn.textContent = "Start";
        resetBtn.disabled = true;
        startBtn.disabled = false;
        lapBtn.disabled = true;
        lapCount = 0;
        lapContainer.innerHTML = ""
    });
    
    
    buttonContainer.append(lapBtn, startBtn, stopBtn, resetBtn)
    
    stopWatchContainer.appendChild(stopWatchHeading)
    stopWatchContainer.appendChild(timeContainer)
    stopWatchContainer.appendChild(buttonContainer)


       
    clockContainer.append(clockHeading, dateText, clockTimeDiv, stopWatchContainer, lapContainer);
    page.appendChild(clockContainer);
    container.appendChild(page);

    startTime();
}

function startTime() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
 
    hours = hours % 12 || 12;

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;


    document.getElementById("hour").textContent = hours;
    document.getElementById("minute").textContent = minutes;
    document.getElementById("second").textContent = seconds;
    document.getElementById("ampm").textContent = ampm;

    t = setTimeout(startTime, 1000);
}


function stopWatch() {
    if (timer) {
        count++;

        if (count == 100) {
            second++;
            count = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }

        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        let hrString = hour;
        let minString = minute;
        let secString = second;
        let countString = count;

        if (hour < 10) {
            hrString = "0" + hrString;
        }

        if (minute < 10) {
            minString = "0" + minString;
        }

        if (second < 10) {
            secString = "0" + secString;
        }

        if (count < 10) {
            countString = "0" + countString;
        }

        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;
        setTimeout(stopWatch, 10);
    }
}
