let thehours = new Date().getHours();
let morning = document.getElementById("morning");
let afternoon = document.getElementById("afternoon");
let night = document.getElementById("night");
let messages;

if (thehours >= 0 && thehours < 12) {
    morning.style.display = "block";
    messages = "All praise belongs to God, who brought us back to life. ^2000 May you always well and blessed for today.";

} else if (thehours >= 12 && thehours < 17) {
    afternoon.style.display = "block";
    messages = "Take a break, ^1000 your body and mind need it. ^2000 When you're ready, ^1000 let's start getting better for today. ^1500 Keep Going!";

} else if (thehours >= 17 && thehours < 24) {
    night.style.display = "block";
    messages = "Of course, you did the best thing today. ^2000 Achieved or not, isn't a problem. ^1000 At least you've gone through the process. ^2500\n Let's sleep, hopefully tomorrow will be a pleasant day.";
}

var options = {
    strings: [messages],
    typeSpeed: 50,
};

new Typed('.greeting', options);