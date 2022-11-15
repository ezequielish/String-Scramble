


function StringChallenge(str1, str2) {

  let _str1 = []
  let _str2 = []
  let _str2_2 = []
  let strEnd = []
  for (i = 0; i < str1.length; i++) {
    _str1.push(str1[i])
  }
  for (i = 0; i < str2.length; i++) {
    _str2.push(str2[i])
  }
  _str2_2 = [..._str2]


  for (let index = 0; index < _str2.length; index++) {

    if (_str1.includes(_str2[index])) {
      strEnd.push(_str2[index])

      const value = (element) => element == _str2[index];
      const idx = _str1.findIndex(value)

      _str1.splice(idx, 1)
    }

  }


  if (strEnd.join() == _str2_2.join()) {
    return true
  }
  return false
}

module.exports = StringChallenge


