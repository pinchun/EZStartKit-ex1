ezstartkit.oled_init()
ezstartkit.oled_showString("start game", 0, 0)
music.playMelody("C5 B A G F E D C ", 120)
let a = 4
ezstartkit.oled_showNumber(a, 0, 1)
basic.forever(function () {
    ezstartkit.oled_showNumber(pins.digitalReadPin(DigitalPin.P13), 0, 2)
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        a += -1
        if (a >= -1) {
            ezstartkit.oled_showNumber(a, 0, 1)
            music.playTone(262, music.beat(BeatFraction.Whole))
        } else {
            ezstartkit.oled_showString("game over", 0, 0)
            music.playMelody("C D E F G A B C5 ", 120)
        }
    }
})
