input.onButtonPressed(Button.A, function () {
    edubitMotors.runMotor(MotorChannel.M1, MotorDirection.Forward, edubitPotentioBit.readPotValue())
})
input.onButtonPressed(Button.AB, function () {
    edubitMotors.brakeMotor(MotorChannel.All)
})
input.onButtonPressed(Button.B, function () {
    edubitMotors.runMotor(MotorChannel.M1, MotorDirection.Backward, edubitPotentioBit.readPotValue())
})
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    basic.showNumber(edubitPotentioBit.readPotValue())
})
