input.onButtonPressed(Button.A, function () {
    edubitMotors.runMotor(MotorChannel.M1, MotorDirection.Forward, edubitPotentioBit.readPotValue())
    edubitMotors.setServoPosition(ServoChannel.S1, 0)
    basic.pause(200)
    edubitMotors.disableServo(ServoChannel.All)
})
input.onButtonPressed(Button.AB, function () {
    edubitMotors.brakeMotor(MotorChannel.All)
    edubitMotors.setServoPosition(ServoChannel.S1, 90)
    basic.pause(200)
    edubitMotors.disableServo(ServoChannel.All)
})
input.onButtonPressed(Button.B, function () {
    edubitMotors.runMotor(MotorChannel.M1, MotorDirection.Backward, edubitPotentioBit.readPotValue())
    edubitMotors.setServoPosition(ServoChannel.S1, 180)
    basic.pause(200)
    edubitMotors.disableServo(ServoChannel.All)
})
basic.showIcon(IconNames.Yes)
edubitMotors.disableServo(ServoChannel.All)
basic.forever(function () {
    basic.showNumber(edubitPotentioBit.readPotValue())
})
