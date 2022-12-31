import {words} from './app.js'

window.onload = function(){
    /*var words = [
        ["01.ogg", "κάστρο", "κάδρο", "άστρο"],
        ["02.ogg", "κάστανο", "κάστορας", "βάσανο"],            
        ["03.ogg", "αστέρι", "ατσάλι", "μαχαίρι"],
        ["04.ogg", "αστείο", "άστρο", "αντίο"],
        ["05.ogg", "μπαίνω", "μένω", "πλένω"],
        ["06.ogg", "μπάλα", "μπαλόνι", "λάμπα"],
        ["07.ogg", "τώρα", "χώρα", "δώρα"],
        ["08.ogg", "ρώτα", "κότα", "ρόδα"]
    ];*/


    words.sort(()=> Math.random() - 0.5);

    var rep = document.querySelector("#replay");
    var next = document.querySelector("#next");
    var audAns = document.querySelector("#ans-aud");
    var audWord = document.querySelector("#word-aud");
    var left = document.querySelector("#left");
    var middle = document.querySelector("#middle");        
    var right = document.querySelector("#right");
    var correct = 0;
    var playing = 0;
    var correctAnswers = 0;
    var totalAnswers = 0;
    
    var startTime = Date.now();

    rep.onclick = ()=>{if(playing)audWord.play()};
    next.onclick = play;

    function play(){
        if(!words.length){
            alert("Έφτασες στο τέλος!");
            return;
            }
        playing = 1;
        let elmn = words.pop(); 
        audWord.src = elmn[0];
        let selector = Math.random();
        if(selector>0.67){
            left.textContent = elmn[1];
            middle.textContent = elmn[2];
            right.textContent = elmn[3];
            correct = 1;
        }else if(selector < 0.68 && selector > 0.33){
            left.textContent = elmn[2];
            middle.textContent = elmn[1];
            right.textContent = elmn[3];
            correct = 2;
        }else{
            left.textContent = elmn[3];
            middle.textContent = elmn[2];                    
            right.textContent = elmn[1];
            correct = 3;
        }
        audWord.play();
        right.style.backgroundColor = "blueviolet";
        middle.style.backgroundColor = "blueviolet";
        left.style.backgroundColor = "blueviolet";
    };

    left.onclick = function(){
        if(playing){
            if (correct == 1){
                left.style.backgroundColor = "green";
                correctAnswers +=1;
                audAns.src = "./audio/sound-cor.ogg";
                audAns.play();
            }
            else{
                left.style.backgroundColor = "red";
                audAns.src = "./audio/sound-wro.ogg";
                audAns.play();
            }
            playing = 0;
            left.blur();
            totalAnswers +=1;
            setTimeout(play, 2000);
        }
    };

    middle.onclick = function(){
        if(playing){

            if (correct  == 2){
                middle.style.backgroundColor = "green";
                correctAnswers +=1;
                audAns.src = "./audio/sound-cor.ogg";
                audAns.play();
            }
            else{
                middle.style.backgroundColor = "red";
                audAns.src = "./audio/sound-wro.ogg";
                audAns.play();
            }
            playing = 0;
            left.blur();
            totalAnswers +=1;
            setTimeout(play, 2000);
        }
    };

    right.onclick = function(){
        if(playing){

            if (correct  == 3){
                right.style.backgroundColor = "green";
                correctAnswers +=1;
                audAns.src = "./audio/sound-cor.ogg";
                audAns.play();
            }
            else{
                right.style.backgroundColor = "red";
                audAns.src = "./audio/sound-wro.ogg";
                audAns.play();    
            }
            playing = 0;
            left.blur();
            totalAnswers +=1;
            setTimeout(play, 2000);
        }
    };
}