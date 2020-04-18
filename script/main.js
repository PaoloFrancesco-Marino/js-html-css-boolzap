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

    inputSend.focus( function() {
        iconChange.removeClass('fas fa-microphone');
        iconChange.addClass('fas fa-paper-plane');
    });






}); //<-- end Ready