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
    var aud = document.querySelector("audio");
    var left = document.querySelector("#left");
    var middle = document.querySelector("#middle");        
    var right = document.querySelector("#right");
    var correct = 0;
    var playing = 0;

    rep.onclick = play;
    
    function play(){
        if(!words.length){
            alert("Έφτασες στο τέλος!");
            return;
            }
        playing = 1;
        let elmn = words.pop(); 
        aud.src = elmn[0];
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
        aud.play();
        right.style.backgroundColor = "blueviolet";
        middle.style.backgroundColor = "blueviolet";
        left.style.backgroundColor = "blueviolet";
    };

    left.onclick = function(){
        if(playing){
            if (correct == 1){
                left.style.backgroundColor = "green";
            }
            else{
                left.style.backgroundColor = "red";
            }
            setTimeout(play, 2000);
            playing = 0;
            left.blur();
            
        }
    };

    middle.onclick = function(){
        if(playing){

            if (correct  == 2)
                middle.style.backgroundColor = "green";
            else
                middle.style.backgroundColor = "red";
            setTimeout(play, 2000);
            playing = 0;
            middle.blur();
        }
    };

    right.onclick = function(){
        if(playing){

            if (correct  == 3)
                right.style.backgroundColor = "green";
            else
                right.style.backgroundColor = "red";
            setTimeout(play, 2000);
            playing = 0;
            right.blur();
        }
    };
}