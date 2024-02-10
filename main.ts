function updateLEDs () {
    pins.digitalWritePin(DigitalPin.P0, ledStates[0])
    pins.digitalWritePin(DigitalPin.P1, ledStates[1])
    pins.digitalWritePin(DigitalPin.P2, ledStates[2])
    pins.digitalWritePin(DigitalPin.P8, ledStates[3])
    pins.digitalWritePin(DigitalPin.P9, ledStates[4])
}
input.onButtonPressed(Button.A, function () {
    if (mode == 1) {
        led.toggle(pinNUm, 0)
        urobiť_niečo(pinNUm)
    }
})
function toogleLED (numLED: number) {
    if (numLED == 0) {
        pins.digitalWritePin(DigitalPin.P0, ledStates[0])
    } else if (numLED == 1) {
        pins.digitalWritePin(DigitalPin.P1, ledStates[1])
    } else if (numLED == 2) {
        pins.digitalWritePin(DigitalPin.P2, ledStates[2])
    } else if (numLED == 3) {
        pins.digitalWritePin(DigitalPin.P8, ledStates[3])
    } else if (numLED == 4) {
        pins.digitalWritePin(DigitalPin.P9, ledStates[4])
    }
    ledStates[numLED] = 1 - ledStates[numLED]
}
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    mode = 1 - mode
    ledStates = [
    0,
    0,
    0,
    0,
    0
    ]
    if (mode == 1) {
        pinNUm = 0
        led.plotBrightness(pinNUm, 1, 63)
    } else if (mode == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    if (mode == 1) {
        if (pinNUm < 4) {
            pinNUm += 1
            led.unplot(pinNUm - 1, 1)
        } else {
            pinNUm = 0
            led.unplot(4, 1)
        }
        led.plotBrightness(pinNUm, 1, 63)
    }
})
function urobiť_niečo (num: number) {
    if (num == 0) {
        K3LedControl.setPinLed(DigitalPin.P0, 0, 0)
    } else if (num == 1) {
        K3LedControl.setPinLed(DigitalPin.P1, 1, 0)
    } else if (num == 2) {
        K3LedControl.setPinLed(DigitalPin.P2, 2, 0)
    } else if (num == 3) {
        K3LedControl.setPinLed(DigitalPin.P8, 3, 0)
    } else if (num == 4) {
        K3LedControl.setPinLed(DigitalPin.P9, 4, 0)
    }
}
let pinNUm = 0
let mode = 0
let ledStates: number[] = []
ledStates = [
0,
0,
0,
0,
0
]
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
loops.everyInterval(4000, function () {
    if (mode == 0) {
        toogleLED(3)
    }
})
loops.everyInterval(1000, function () {
    if (mode == 0) {
        toogleLED(1)
    }
})
loops.everyInterval(500, function () {
    if (mode == 0) {
        toogleLED(0)
    }
})
loops.everyInterval(2000, function () {
    if (mode == 0) {
        toogleLED(2)
    }
})
loops.everyInterval(8000, function () {
    if (mode == 0) {
        toogleLED(4)
    }
})
