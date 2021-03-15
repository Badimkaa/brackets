module.exports = function check(str, bracketsConfig) {
//check('()', [['(', ')']])
let stack = []
let brackets = bracketsConfig.flat()
if (str[0] == brackets[1]) return false
for (let i = 0; i < str.length; i++) {
    if (str[i] == brackets[0]) {
        stack.push(i)
    }
    else if (str[i] == brackets[1] ) {
        stack.pop()
    }
}
if (stack == 0) return true
else return false
}
