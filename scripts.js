document.addEventListener("DOMContentLoaded", function() {
    // Display current time in UTC
    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString();
        document.getElementById("currentTimeUTC").textContent = utcTime;
    }
    updateTime();
    setInterval(updateTime, 1000);

    // Display current day of the week
    function updateDay() {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const now = new Date();
        const currentDay = days[now.getUTCDay()];
        document.getElementById("currentDay").textContent = currentDay;
    }
    updateDay();
});
