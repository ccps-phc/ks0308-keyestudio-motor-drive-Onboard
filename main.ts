function right (speed: number, p15: number, p16: number) {
    pins.analogWritePin(AnalogPin.P2, speed)
    pins.digitalWritePin(DigitalPin.P15, p15)
    pins.digitalWritePin(DigitalPin.P16, p16)
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        pins.digitalWritePin(DigitalPin.P14, 1)
        forward()
    } else if (receivedNumber == 2) {
        pins.digitalWritePin(DigitalPin.P14, 1)
        backward()
    } else if (receivedNumber == 4) {
        pins.digitalWritePin(DigitalPin.P14, 1)
        turnleft()
    } else if (receivedNumber == 3) {
        pins.digitalWritePin(DigitalPin.P14, 1)
        turnRight()
    } else {
        pins.digitalWritePin(DigitalPin.P14, 0)
    }
})
function left (speed: number, P13: number, P12: number) {
    pins.analogWritePin(AnalogPin.P1, speed)
    pins.digitalWritePin(DigitalPin.P13, P13)
    pins.digitalWritePin(DigitalPin.P12, P12)
}
function rightForward () {
    right(900, 1, 0)
}
function leftBackward () {
    left(900, 0, 1)
}
function leftForward () {
    left(900, 1, 0)
}
function backward () {
    left(900, 0, 1)
    right(900, 0, 1)
}
function turnRight () {
    left(300, 1, 0)
    right(300, 0, 1)
}
function rightBackward () {
    right(900, 0, 1)
}
function forward () {
    left(900, 1, 0)
    right(900, 1, 0)
}
function turnleft () {
    left(300, 0, 1)
    right(300, 1, 0)
}
radio.setGroup(67)
pins.digitalWritePin(DigitalPin.P14, 0)
