input.onButtonPressed(Button.A, function () {
    num += -1
    basic.showNumber(num)
})
input.onButtonPressed(Button.AB, function () {
    num_2 = num
})
input.onButtonPressed(Button.B, function () {
    num_2 += 1
    basic.showNumber(num)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("sum")
    changing_num(num, num_2)
    basic.showNumber(0)
})
function changing_num (num: number, num2: number) {
    num = num + num2
    return num
}
let num_2 = 0
let num = 0
num = 0
