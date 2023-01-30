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
    basic.showLeds(`
        . . . . .
        # . . # .
        # . . # .
        # # . . #
        . . # . .
        `)
})
let ROUNDS = 0
let TIES = 0
let PB = 0
let PA = 0
OLED.init(128, 64)
PA = 0
PB = 0
TIES = 0
ROUNDS = 0
OLED.writeStringNewLine("Shall we play a game, babboon?")
basic.pause(5000)
showscoreboard()
