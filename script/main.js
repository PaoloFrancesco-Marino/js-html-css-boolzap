/**
 * BoolaZap
 */


$(document).ready(function () {

    /**
     * Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e cliccando icona ‘invia il 
     * testo’ viene aggiunto al thread sopra, come messaggio verde (ricordate focus() )
     * Font family: Lato
     * Messaggi visibili inizialmente sono inseriti statici nell’HTML
     * Usate un template nell’html e clone() per l’ inserimento del messaggio da fare in JS
     ************************************************************************************************/

    // refs   
    var inputSend = $('.bottom-bar-dx input'); //input
    var iconChange = $('.bottom-bar-dx i:last-child'); // Icona

    // icon change on input focus
    inputSend.on(('focus blur'), function() {
        iconChange.toggleClass('fas fa-microphone fas fa-paper-plane');
    });

    // send message with click icon
    iconChange.click(function(){
        smsSend(inputSend);
    });

    // send message with enter 
    inputSend.keyup(function (e) { 
        if(e.which == 13) {
            smsSend(inputSend);
        }
    });
   
}); //<-- end Ready


/**
 * Function
*/


// sms send function
function smsSend(input) {
    //get text from the input
    var inputMessage = input.val().trim();
    //condition for empty field
    if(inputMessage.length > 0) {
        // clone template
        var newMessage = $('.templates .message').clone(); //refs li clone
        // add text at message
        newMessage.children('h5').text(inputMessage);

        //add dinamin time
        var data = new Date();
        var h = addZero(data.getHours());
        var m = addZero(data.getMinutes());
        var time = h + ':' + m;

        newMessage.children('h6').text(time);

        //add send style class
        newMessage.addClass('send');

        //add message at chat active
        $('.message-content .chat.active ul').append(newMessage);

        // reset input 
        input.val('');
    }

};
 
// add zero at time number < 10
function addZero (number) {

    if (number < 10) {
        number = '0' + number;
    }

    return number;
}
