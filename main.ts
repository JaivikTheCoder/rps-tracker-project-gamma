function showscoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("PlayerA:" + PA)
    OLED.newLine()
    OLED.writeStringNewLine("PlayerB:" + PB)
    OLED.newLine()
    OLED.writeStringNewLine("Ties" + TIES)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds" + ROUNDS)
}
input.onButtonPressed(Button.A, function () {
    PA += 1
    ROUNDS += 1
    showscoreboard()
    basic.showString("A")
})
input.onButtonPressed(Button.AB, function () {
    TIES += 1
    ROUNDS += 1
    showscoreboard()
    basic.showString("T")
})
input.onButtonPressed(Button.B, function () {
    PB += 1
    ROUNDS += 1
    showscoreboard()
    basic.showString("B")
})
input.onGesture(Gesture.Shake, function () {
    reset()
})
function reset () {
    OLED.init(128, 64)
    PA = 0
    PB = 0
    TIES = 0
    ROUNDS = 0
    OLED.writeStringNewLine("Shall we play a game, babboon?")
    basic.pause(5000)
    showscoreboard()
}
let ROUNDS = 0
let TIES = 0
let PB = 0
let PA = 0
reset()
