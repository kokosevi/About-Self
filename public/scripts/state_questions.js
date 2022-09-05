

// Array for the ABH buttons
var finish_salient_button = document.getElementById("finish_salient");

finish_salient_button.onclick = function() {
    // Create Array with ABH_X Buttons
    const abh_buttons= new Array(document.getElementById(ABH_1), document.getElementById(ABH_2), document.getElementById(ABH_3), document.getElementById(ABH_4), document.getElementById(ABH_6), document.getElementById(ABH_7), document.getElementById(ABH_8), document.getElementById(ABH_9), document.getElementById(ABH_10), document.getElementById(ABH_11), document.getElementById(ABH_13));

    for (let index = 0; index < abh_states.length; index++) {

        abh_states= new Array(abh.buttons.length);

        if (abh_buttons(index).style.backgroundcolor == salmon) {
            abh_states(index) == true;
        } else {
            abh_states(index) == false;
        }
        
    }

}

