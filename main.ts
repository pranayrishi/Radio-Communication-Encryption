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
textList = [
"A",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z",
"?",
".",
",",
";",
":",
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z",
"-",
"_",
"$",
"%",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"0",
"",
"&",
"*",
"+",
"|",
"!"
]
