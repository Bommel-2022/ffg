basic.forever(function () {
    if (callibot.entfernung(KEinheit.mm) < 200) {
        if (Math.randomBoolean()) {
            callibot.motor(KMotor.rechts, KDir.vorwärts, 100)
            callibot.motorStop(KMotor.links, KStop.Bremsen)
        } else {
            callibot.motor(KMotor.links, KDir.vorwärts, 100)
            callibot.motorStop(KMotor.rechts, KStop.Bremsen)
        }
    } else {
        callibot.motor(KMotor.beide, KDir.vorwärts, 100)
    }
})
