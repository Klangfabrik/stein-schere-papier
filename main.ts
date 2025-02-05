input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    count()
    zahl = randint(1, 3)
    if (zahl == 1) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    } else if (zahl == 2) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            # # . # .
            . . # . .
            # # . # .
            # . . . #
            `)
    }
})
function count () {
    basic.setLedColors(0xff0000, 0x000000, 0x000000)
    basic.pause(200)
    basic.setLedColors(0xff0000, 0xff0000, 0x000000)
    basic.pause(200)
    basic.setLedColors(0xff0000, 0xff0000, 0xff0000)
    basic.pause(200)
}
let zahl = 0
basic.showString("SSP", 100)
basic.forever(function () {
	
})
