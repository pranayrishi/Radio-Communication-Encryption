input.onButtonPressed(Button.AB, function () {
    for (let value of writtenText) {
        numberValue = textList.indexOf(value)
        codePos = numberValue + key
        if (codePos > textList.length - 1) {
            codePos = codePos - textList.length
        }
        cipheredText = "" + cipheredText + textList[codePos]
    }
    basic.showString("" + (cipheredText))
    radio.sendString("" + (cipheredText))
    basic.showIcon(IconNames.Yes)
})
radio.onReceivedString(function (receivedString) {
    for (let value of receivedString) {
        numberValue = textList.indexOf(value)
        codePos = numberValue - key
        if (codePos < 0) {
            codePos = codePos + textList.length
        }
        plainText = "" + plainText + textList[codePos]
    }
    basic.showString("" + (plainText))
})
let numberValue = 0
let textList = ""
let codePos = 0
let key = 0
let cipheredText = ""
let plainText = ""
let writtenText = ""
let currentIndex = 0
writtenText = "Hello1"
plainText = ""
cipheredText = ""
radio.setGroup(5)
key = 2
codePos = 0
textList = ["a", "b", "c"]
