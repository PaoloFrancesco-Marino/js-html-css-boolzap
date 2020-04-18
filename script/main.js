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
    inputSend.focus( function() {
        iconChange.removeClass('fas fa-microphone');
        iconChange.addClass('fas fa-paper-plane');
    });

    // send message with click icon
    $('#app').on('click', '.bottom-bar-dx i:last-child', function() {

        // clono il template
        var messageTemplates = $('.templates .send').clone(); //refs li clone

        var sendMessage = inputSend.val().trim();
        console.log(sendMessage);

        if (sendMessage !== '') {
            // send message add to clone
            messageTemplates.children().children('h5').text(sendMessage);
            // append to html chat
            $('.message-content ul').append(messageTemplates);
            // reset input
            inputSend.val('');
        }   
    } );


    inputSend.keyup(function (e) { 
        // clono il template
        var messageTemplates = $('.templates .send').clone(); //refs li clone

        var sendMessage = inputSend.val().trim();
        console.log(sendMessage);

        if (sendMessage !== '' && e.which == 13 ) {
             // send message add to clone
             messageTemplates.children().children('h5').text(sendMessage);
             // append to html chat
             $('.message-content ul').append(messageTemplates);
             // reset input
             inputSend.val('');
        }

    });
   

    
   




}); //<-- end Ready