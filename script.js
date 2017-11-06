//Determine someone's horoscope given their birthday (month and day)
//capricorn, aquarius, pisces, aries, taurus, gemini, cancer, leo, virgo, libra, scorpio, sagittarius

function doDays(month) {
    month = parseInt(month);
    var mDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var result = "";
    for(var i=1; i<= mDays[month]; i++){
        result += "<option value =''" + i + ">" + i + "</option>"
    }
    document.getElementById("days").innerHTML = result;
}


function determineHoroscope(){
    var sign = "";
    var horoscope = "";
    var name = document.getElementById("myField").value;
    var month = document.getElementById("month").value;
    month = parseInt(month);
    var day = document.getElementById("days").value;

    //Dec 22 - Jan 20
    if(month == 12 && day<=22 || month == 1 && day<=20 ){
        sign = "Capricorn";
        horoscope = "You may feel like there's a big opportunity waiting for you but your head is too muddled to take advantage of it. Perhaps you're afraid that if you accept this offer now, you'll miss an even better one later. Don't delay. Change is progress. Go after the things that catch your eye and draw you in. These opportunities won't last forever. Stop dreaming and start doing.";
    }

    //jan 21- feb 19
    if(month == 1 && day>=21 || month == 2 && day<=19){
        sign = "Aquarius";
        horoscope = "Your sensitive nature is attractive. People who come to you for advice and guidance aren't disappointed. You have a solid, practical perspective, yet you're also receptive and understanding. People with flashy ideas and a reckless way about them might try to sell you a pig in a poke. Don't be thrown off. Stay strong within yourself and confident about what you believe in.";
    }

    //feb 20 - mar 20
    if(month == 2 && 20<=day && day<=29 || month == 3 && day<=20){
        sign = "Pisces";
        horoscope = "You may feel like you're riding a fast train to success. Success can be measured in different ways. Today it's important that you consider your emotional success and how your feelings fit into your life. You may discover that the train you're on isn't the train you should be on. Don't be afraid to get off at the next station and transfer to a different line.";
    }

    //March 21 - April 19
    if(month == 3 && day>=21 || month == 4 && day>=19){
        sign = "Aries";
        horoscope = "You may feel like a snail emerging from its shell. When no one is looking, you slowly and cautiously stick your head out and put up your antennae to take a reading on the outside world. When you see a creature like you, you feel comfortable and come out of your shell a bit more. Be careful about letting your defenses down too much, because a big, hungry bird may be looking for dinner.";
    }

    //April 20 -May 20
    if(month == 4 && 20<=day && day<=30 || month == 5 && day<=20){
        sign = "Taurus";
        horoscope = "Your boisterous, generous attitude is inspiring and welcomed by others. There are also some people who consider your behavior ostentatious or arrogant. You may wonder how this is possible, since your intentions are good. You want people to share in the love and good times. You're attentive to others' feelings. Sit down and talk with people one-on-one to understand how they feel.";
    }

    //May 21 - June 20
    if(month == 5 && day>=21 || month == 6 && day<=20){
        sign = "Gemini";
        horoscope = "Just as soon as you taste success, something comes along to make you feel badly about it. Perhaps another person is jealous of you, and so does or says things that make you feel uncertain. Perhaps the doubt comes from an internal source that says that you don't deserve prosperity. Don't be thrown off course by this. Move forward with your plans.";
    }

    //June 21 -July 22
    if(month == 6 && 21<=day && day<=30 || month == 7 && day<=22){
        sign = "Cancer";
        horoscope = "In order to maintain peace and harmony, you may wear many different masks. By doing this, you may forget your inner truth and what it is you truly believe. Friction between your lively, communicative outside and your soft, vulnerable inside may make it difficult for you to find the solution you seek. You have the answers you need. Trust yourself when you find them.";
    }

    //July 23 - August 22
    if(month == 7 && 23<=day || month == 8 && day<=22){
        sign = "Leo";
        horoscope = "The next task on your road to success may be a pill that's hard to swallow. Perhaps it involves interacting with someone you don't want to deal with. You know that you have to adopt some sort of false persona in order to get what you want. You're sensitive to this dilemma, and you may feel emotional about it, making you hesitate to go through with the plan.";
    }

    //August 23 - September 22
    if(month == 8 && 22<=day || month == 9 && day<=22){
        sign = "Virgo";
        horoscope = "Debilitating indecision may plague you. You've been coasting along letting your good luck see you through to prosperity. It's like you're tied to a rope and constantly testing its limits. Unfortunately, you could hit a snag and feel you can go no further. Emotional issues suggest that you didn't take your feelings into account. It's time to reevaluate your approach.";
    }

    //September 23 - October 22
    if(month == 9 && 23<=day && day<=30 || month == 10 && day<=22){
        sign = "Libra";
        horoscope = "You may feel like you're doing all the work in a project or relationship and if you pull out for even a minute, the whole thing will fall apart. Be careful of putting so great a burden on yourself that you grow resentful of everyone else. You're good at criticizing other people's actions, but maybe the person you need to talk to about these issues is you.";
    }

    //October 23 - November 21
    if(month == 10 && 23<=day || month == 11 && day<=21){
        sign = "Scorpio";
        horoscope = "It's important to remain flexible, but not so much that you can't make a decision about anything. Your head says one thing while your heart says another. When you give both of them free rein in an effort to be as flexible as possible, they go in opposite directions. Postpone making any important decisions until your path becomes clearer.";
    }

    //November 22 - December 21
    if(month == 11 && 22<=day && day<=30 || month == 12 && day<=21){
        sign = "Sagittarius";
        horoscope = " You feel emotionally strong, even though certain people may be getting in the way of your plans. You can accomplish a great deal. You're only responsible for yourself. You feel a drive to work harder than usual. Even though you may be working very hard, your general mindset is good. You should enjoy your day regardless of the circumstances";
    }

    if(month == 0){
        document.getElementById("output").innerHTML = "Enter your birthday!"
    }

    document.getElementById("output").innerHTML = name + ", you are a " + sign + "!";
    document.getElementById("output1").innerHTML = horoscope;
    document.getElementById("image").innerHTML = "<img src='img/" + sign + ".jpg'>";

}





