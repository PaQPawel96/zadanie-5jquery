/* Dodaj do niego odpowiedni skrypt, który spowoduje
Wysuwanie się i chowanie menu bocznego – postaraj się, by efekt animacji był zrobiony w CSS,
 jQuery wykorzystaj uruchamiania odpowiednich selektorów CSS
Po kliknięciu w każdy z linków menu strona się wygasza (efekt FadeOut) przez 2 sekundy i 
dopiero po tej zmianie następuje przekierowanie do odpowiedniego adresu URL – wykorzystaj blokowanie zdarzenia,
 pobieranie wartości atrybutów w jQuery oraz przekierowanie do adresu za pomocą odpowiednich właściwości okna */

 
$(document).ready(function() {
    $('.hamburger').click(function(){
        $('.main-menu').toggleClass('open');
    });

    $('.main-menu-item a').click(function(e){
        e.preventDefault();
        $('body').fadeOut(2000, function(){
            window.location.href = $(e.target).attr('href');
        })
    })
});