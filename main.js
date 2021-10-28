function play(id) {
    var tile = id;
    var audio = new Audio('sounds/' + tile + '.wav');
    audio.play();
}

document.onkeypress = function(e) {
    e = e || window.event;
    // белые
    if (e.key == 'Q' || e.key == 'q')
        play("C4");
    if (e.key == 'W' || e.key == 'w')
        play("D4");
    if (e.key == 'E' || e.key == 'e')
        play("E4");
    if (e.key == 'R' || e.key == 'r')
        play("F4");
    if (e.key == 'T' || e.key == 't')
        play("G4");
    if (e.key == 'Y' || e.key == 'y')
        play("A4");
    if (e.key == 'U' || e.key == 'u')
        play("B4");

    // черные 
    if (e.key == '2')
        play("Cs4");
    if (e.key == '3')
        play("Ds4");
    if (e.key == '5')
        play("Fs4");
    if (e.key == '6')
        play("Gs4");
    if (e.key == '7')
        play("Bb4");
};