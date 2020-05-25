let thehours = new Date().getHours();
let morning = document.getElementById("morning");
let noon = document.getElementById("noon");
let afternoon = document.getElementById("afternoon");
let night = document.getElementById("night");
let messages;

if (thehours >= 4 && thehours < 10) {
    morning.style.display = "block";
    messages = ["All praise belongs to God, who brought us back to life. ^2000 May you always well and blessed for today.", "Its time to wake up, take a deep breath and enjoy the sweetness of nature with all your heart. Good morning! Have a good time!", "Get up early in the morning and don’t forget to say thank you to God for giving you another day.", "Wake up and make yourself a part of this beautiful morning. A beautiful world is waiting outside your door. Have an enjoyable time!"];

} else if (thehours >= 10 && thehours < 14 ) {
    noon.style.display = "block";
    messages = ["'People say nothing is impossible, but I do nothing every day.' - Winnie the Pooh", "If you think you are too small to make a difference, try sleeping with a mosquito. :p", "I didn’t fail the test. I just found 100 ways to do it wrong.' - Benjamin Franklin", "Think like a proton. Always positive.", "'If you let your head get too big, it’ll break your neck.' - Elvis Presley", "The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it.' - Terry Pratchett", "Always remember that you are unique – just like everybody else."];

} else if (thehours >= 15 && thehours < 19) {
    afternoon.style.display = "block";
    messages = ["Take a break, ^1000 your body and mind need it. ^2000 When you're ready, ^1000 let's start getting better for today. ^1500 Keep Going!", "You must be so tired after a long day, but do you what? The day is still so young and full of positive energy for you to absorb.", "Noon time – it’s time to have a little break, Take time to breathe the warmth of the sun, Who is shining up in between the clouds,", "Afternoon has come to indicate you, Half of your day’s work is over, Just another half a day to go, Be brisk and keep enjoying your works, Have a happy noon!", "Good, better, best. Never let it rest. Til your good is better and your better is best."];

} else if (thehours >= 19 || thehours < 4) {
    night.style.display = "block";
    messages = ["Of course, you did the best thing today. ^2000 Achieved or not, isn't a problem. ^1000 At least you've gone through the process. ^2500\n Let's sleep, hopefully tomorrow will be a pleasant day.", "I don't have many words left. ^2500 Sleep tight."];
}

var options = {
    strings: [messages[Math.floor(Math.random() * messages.length)]],
    typeSpeed: 50,
};

new Typed('.greeting', options);