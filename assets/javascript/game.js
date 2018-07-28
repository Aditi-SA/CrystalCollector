$(document).ready(function() {
    
    //ScoretoBeat: The random number shown at the start of the game should be between 19 - 120.    
    var ScoretoBeat = Math.floor(9 + Math.random()*(121 - 9))
    console.log("ScoretoBeat A: " + ScoretoBeat);
    document.getElementById("ScoretoBeat").innerHTML = ScoretoBeat;

    //Each crystal should have a random hidden value between 1 - 12.
    var Crys1 = Math.floor(1 + Math.random()*(13 - 9))
    var Crys2 = Math.floor(1 + Math.random()*(13 - 9))
    var Crys3 = Math.floor(1 + Math.random()*(13 - 9))
    var Crys4 = Math.floor(1 + Math.random()*(13 - 9))
    console.log("Crys1: " + Crys1);
    console.log("Crys2: " + Crys2);
    console.log("Crys3: " + Crys3);
    console.log("Crys4: " + Crys4);

    //variables for score
    var UserScore = 0;
    var wins = 0;
    var losses = 0;

    $('#win-counter').text(wins);
    $('#loss-counter').text(losses);

    function reset(){
        var ScoretoBeat = Math.floor(9 + Math.random()*(121 - 9))
        document.getElementById("ScoretoBeat").innerHTML = ScoretoBeat;

        //Each crystal should have a random hidden value between 1 - 12.
        var Crys1 = Math.floor(1 + Math.random()*(13 - 9))
        var Crys2 = Math.floor(1 + Math.random()*(13 - 9))
        var Crys3 = Math.floor(1 + Math.random()*(13 - 9))
        var Crys4 = Math.floor(1 + Math.random()*(13 - 9))
        UserScore = 0;
        $("#UserScore").text(UserScore);
    }

    function win() {
        alert("You win!");
        wins ++;
        $("#win-counter").text(wins);
        reset();
    }
    
    function lose() {    
        alert("You lose!");
        losses ++;
        $("#loss-counter").text(losses);
        reset();
    }


    //hey: the below code should be inside a function
    $("#crystal1").on("click", function(){   
        UserScore = UserScore + Crys1;             
        console.log("startGame Crys1: " + Crys1 + "userS: " + UserScore);            
        $("#UserScore").text(UserScore);
        if (UserScore === ScoretoBeat) {
            win();
        }    
        else if (UserScore > ScoretoBeat) {
            lose();
        }
    });
    $("#crystal2").on("click",function(){   
        UserScore += Crys2;           
        $("#UserScore").text(UserScore);
        if (UserScore === ScoretoBeat) {
            win();
        }    
        else if (UserScore > ScoretoBeat) {
            lose();
        }
    });
    $("#crystal3").on("click",function(){   
        UserScore += Crys3;        
        /*$("#UserScore").html(UserScore);*/
        $("#UserScore").text(UserScore);
        if (UserScore === ScoretoBeat) {
            win();
        }    
        else if (UserScore > ScoretoBeat) {
            lose();
        }
    });
    $("#crystal4").on("click",function(){   
        UserScore += Crys4;        
        /*$("#UserScore").html(UserScore);*/
        $("#UserScore").text(UserScore);
        if (UserScore === ScoretoBeat) {
            win();
        }    
        else if (UserScore > ScoretoBeat) {
            lose();
        }
    });

    console.log("UserScore: " + UserScore);
       
    //document.getElementById("UserScore").innerHTML = UserScore;
    
});
