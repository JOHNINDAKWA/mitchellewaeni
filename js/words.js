var words = new Array();
words.push("You make my world brighter with every smile and every glance. My love for you grows stronger each day.");
words.push("In you, I've found my forever. You're the dream I never want to wake up from.");
words.push("Every heartbeat of mine beats for you. You are my everything, now and always.");
words.push("Your love is my greatest treasure, the warmth that fills my heart and soul.");
words.push("With you, I've found the one I want to share all my tomorrows with. I love you more than words can express.");
words.push("Every moment with you is a beautiful memory in the making. I can't wait to create a lifetime of them with you.");
words.push("Your presence in my life is a gift I cherish every single day. Thank you for being my love, my life.");
words.push("My love for you knows no bounds. It grows deeper, stronger, and more passionate with every passing day.");
words.push("You are the reason my heart beats, the light that guides me through the darkest of days.");
words.push("I am forever grateful that our paths crossed. Loving you is the greatest joy of my life.");
words.push("You are my safe haven, my source of comfort, and the love of my life. I cherish every moment we share.");
words.push("With you, love feels like home, a place I never want to leave. Thank you for being my home.");
words.push("No matter where life takes us, I know I will always love you. You are my forever and always.");
words.push("Your love has made my life so much more beautiful. I am blessed to have you by my side.");
words.push("I promise to love you today, tomorrow, and for all eternity. You are my one true love.");
words.push("I find new reasons to love you every day. You are my greatest adventure, and I want to explore every part of it with you.");
words.push("I can't imagine my life without you. You complete me in every way, and I love you more than words could ever say.");
words.push("You are the light in my life, the one who makes everything better just by being there.");
words.push("Every day with you feels like a beautiful love story. I can't wait to write the next chapter with you.");
words.push("You are my love, my life, my everything. I will cherish you forever.");
words.push("You're not just my girlfriend, you're my best friend and the love of my life. Just thinking about you makes my heart smile. I'm so grateful to have you in my life.");
words.push("You fill my life with so much joy and love. I am truly blessed to have you by my side.");
words.push("Every day with you is a new adventure filled with love and happiness. I can't wait to explore more of life with you.");
words.push("When I look at you, I see all my hopes and dreams come true. You are my everything.");
words.push("Your love is the melody that plays in my heart, bringing harmony to my life.");
words.push("With you, I have found a love that is deep, true, and everlasting. I am so grateful for you.");
words.push("You are the best thing that ever happened to me, and I promise to love you more each day.");
words.push("Your love is like a beautiful sunrise, filling my world with warmth and light.");
words.push("I never believed in soulmates until I met you. You complete me in every way possible.");
words.push("You are the reason I believe in love, the reason my heart feels so full.");
words.push("Loving you is the best decision I've ever made. You are my forever and always.");
words.push("You bring out the best in me, and I can't thank you enough for all the love you give.");
words.push("I love you more than words can say, more than actions can show, and more than I could ever express.");
words.push("You are my muse, my inspiration, and the love of my life. I am so lucky to have you.");
words.push("No matter how much time we spend together, it will never be enough. I want to be with you forever.");
words.push("With you, I feel like the luckiest person in the world. Your love is my greatest treasure.");
words.push("You are my heart, my soul, my everything. I love you more with each passing day.");
words.push("Every time I see you, I fall in love with you all over again. You are my one and only.");
words.push("Thank you for being the love of my life, the one who makes everything better just by being there.");
words.push("You are my dream come true, the love I've been waiting for all my life.");
words.push("With you by my side, I feel like I can conquer the world. You are my strength, my love, my everything.");
words.push("You make my heart race and my soul dance. I am so deeply in love with you.");
words.push("Your love is a light that guides me through even the darkest of times. I cherish you more than you know.");
words.push("You are the reason my world is so beautiful. I am grateful for your love every single day.");
words.push("Every day, I find new reasons to love you. You are the most amazing person I've ever known.");
words.push("I love you more than yesterday, but not as much as I'll love you tomorrow. You are my forever.");
words.push("You are my sunshine on a cloudy day, my calm in the storm, and my love for all time.");
words.push("You make my world brighter just by being in it. I am so thankful for your love.");
words.push("With you, I've found the love I've always dreamed of. You are my one true love.");
words.push("You are the most beautiful part of my life. I love you with all my heart and soul.");
words.push("Your love has filled my life with endless joy and happiness. I am so lucky to have you.");
words.push("You are my heart's desire, my soul's companion, and the love of my life. I will love you forever.");
words.push("You make every day special just by being you. I love you more than words can say.");


function getRandomWord() {
    var idx = Math.random();
    idx = parseInt(100 * idx % words.length);
    return words[idx];
}
