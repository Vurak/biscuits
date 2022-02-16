const text = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, td, caption, span, a')

const wordPairs = {
  "cookie": "biscuit",
  "french fries": "chips",
  "eggplant": "aubergine"
}

const isUpperCase = (letter) => letter === letter.toUpperCase()

for (let i = 0; i < text.length; i++) {
  Object.keys(wordPairs).forEach(key => {
    if (text[i].innerHTML.toLowerCase().includes(key)) {
      let regex = new RegExp(key, 'gi')
      console.log(regex)
      let replacement = text[i].innerHTML.replace(regex, (match) => {
        console.log(match)
        if (isUpperCase(match[0])) {
          return wordPairs[key][0].toUpperCase() + wordPairs[key].substr(1, wordPairs[key].length)
        } else return wordPairs[key]
      })
      text[i].innerHTML = replacement
    }
  })
}

// Cookie -> Biscuit
// str[0].is.upperCase ? wordPairs[key][0].touppercase + wordPairs[key][1:]

// if (text.includes(key)) then replace with value