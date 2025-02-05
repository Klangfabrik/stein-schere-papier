zahl = 0

def on_button_a():
    global zahl
    zahl = randint(1, 3)
    if zahl == 1:
        basic.show_leds("""
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            """)
    elif zahl == 2:
        basic.show_leds("""
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            """)
    else:
        basic.show_leds("""
            # . . . #
            # # . # .
            . . # . .
            # # . # .
            # . . . #
            """)
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_forever():
    pass
basic.forever(on_forever)
