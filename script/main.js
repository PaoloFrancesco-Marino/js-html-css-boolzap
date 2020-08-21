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
    var searchBar = $('#search-input'); // search bar
    var conversation = $('.contact-list ul li'); // refs li conversation

    // icon change on input focus
    inputSend.on(('focus blur'), function() {
        iconChange.toggleClass('fas fa-microphone fas fa-paper-plane');
    });

    // send message with click icon
    iconChange.click(function(){
        smsSend(inputSend.val());
    });

    // send message with enter 
    inputSend.keyup(function (e) { 
        if(e.which == 13 || e.keycode == 13) {
            smsSend(inputSend.val());
        }
    });

    // search sidebar
    searchBar.keyup(function () {
        //select and obtained input val
        var search = $(this).val().toLowerCase().trim();
        console.log(search);
        // loop with each in the contact
        $('.contact-list  ul li').each(function(){
            // actual contact selected
            var user = $(this).find('.contact-user h4').text().toLowerCase();

            // comparison research and contacts
            if (user.includes(search)) {
                $(this).show();
            } else {
                $(this).hide();
            }
 

        });
    });

    //change conversation
    conversation.click(function(){

        // active select profile chat
        $('.contact-list ul li.active').removeClass('active');
        $(this).addClass('active');

        // select active chat
        var chatBlock = $(this).attr('data-conversazione');
        console.log(chatBlock);
        //reset chat
        $('.chat').removeClass('active');
        // show active
        $('.chat[data-conversazione="'+ chatBlock +'"]').addClass('active');

        // refresh chat header
        var nameUser = $('.contact-list ul li.active .contact-wrapper .contact-user h4').text();
        console.log(nameUser);
        var imgUser = $('.contact-list ul li.active .profile-img').html();
        console.log(imgUser);
        // stamp user name + img profile
        $('.top-bar-dx .user-select h4 .contact-name-select').text(nameUser);
        $('.top-bar-dx .user-select .img-avatar').html(imgUser);

        nameUser = '';
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

        //add time sms
        var time = actualTime();
        newMessage.children('h6').text(time);

        //add send style class
        newMessage.addClass('send');

        //add message at chat active
        $('.message-content .chat.active ul').append(newMessage);

        // reset input 
        input.val('');

        //scroll
        scrollViewSms()

        // add auto reply 1 second
        setTimeout(function(){
            var reply = $('.templates .message').clone();
            // add class received
            reply.addClass('received');
            //add text message
            reply.children('h5').text('ok');
            //add time sms 
            var time = actualTime();
            reply.children('h6').text(time);
            //add send style class
            reply.addClass('received');
            //add message at chat active
            $('.message-content .chat.active ul').append(reply);
            // scroll at last message
            scrollViewSms()
        }, 1000);
    }
};

// add zero at time number < 10
function addZero (number) {

    if (number < 10) {
        number = '0' + number;
    }

    return number;
}

// function-dinamic time 
function actualTime() {
    
    var data = new Date();
    var h = addZero(data.getHours());
    var m = addZero(data.getMinutes());
    return h + ':' + m;
};

// function scroll view last message
function scrollViewSms() {
    //select cointainer height
    var scroll = $('.chat.active').height();
    //add container height at parent
    $('.message-content').animate ({
        scrollTop: scroll
    }, 1000)
};

