input.onButtonPressed(Button.A, function () {
    message = "" + message + "0"
    basic.showNumber(0)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString(message)
    radio.sendString(message)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    message = "" + message + "1"
    basic.showNumber(1)
})
let message = ""
radio.setGroup(12)
