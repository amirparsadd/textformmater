function rightShift(text, amount){
    return text.replace(text.substring(text.length-amount),"")
}

function remove(text, value){
    return text.replace(value, "")
}

const font = {
    "fancy":function(text){
        return text
        .replace("q","𝕢")
        .replace("w","𝕨")
        .replace("e","𝕖")
        .replace("r","𝕣")
        .replace("t","𝕥")
        .replace("y","𝕪")
        .replace("u","𝕦")
        .replace("i","𝕚")
        .replace("o","𝕠")
        .replace("p","𝕡")
        .replace("a","𝕒")
        .replace("s","𝕤")
        .replace("d","𝕕")
        .replace("f","𝕗")
        .replace("g","𝕘")
        .replace("h","𝕙")
        .replace("j","𝕛")
        .replace("k","𝕜")
        .replace("l","𝕝")
        .replace("z","𝕫")
        .replace("x","𝕩")
        .replace("c","𝕔")
        .replace("v","𝕧")
        .replace("b","𝕓")
        .replace("n","𝕟")
        .replace("m","𝕞")
    },
    "square":function(text){
        return text
        .replace("q","🅀")
        .replace("w","🅆")
        .replace("e","🄴")
        .replace("r","🅁")
        .replace("t","🅃")
        .replace("y","🅈")
        .replace("u","🅄")
        .replace("i","🄸")
        .replace("o","🄾")
        .replace("p","🄿")
        .replace("a","🄰")
        .replace("s","🅂")
        .replace("d","🄳")
        .replace("f","🄵")
        .replace("g","🄶")
        .replace("h","🄷")
        .replace("j","🄹")
        .replace("k","🄺")
        .replace("l","🄻")
        .replace("z","🅉")
        .replace("x","🅇")
        .replace("c","🄲")
        .replace("v","🅅")
        .replace("b","🄱")
        .replace("n","🄽")
        .replace("m","🄼")
    }
}

module.exports = {
    rightShift,
    remove,
    font
    }