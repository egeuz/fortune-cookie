/*** FORTUNE COOKIE GRAMMAR ***/
const fortune = [
  {
    "fortune": ["You will #verb# #noun#."],
    "adjective": ["proud", "small", "forgetful", "handsome", "comical", "wild"],
    "noun": ["happiness", "friends", "cats", "dogs", "chocolate", "beer", "cigarettes", "wine", "home", "texts", "humor"],
    "verb": ["find", "have", "see", "kill", "die of", "die from", "cry", "succeed", "bleed"],
  },
  {
    "fortune": ["It will be #adjective#."],
    "adjective": ["okay", "dangerous", "difficult", "wild"],
  }
]

/*** ELEMENTS ***/
const cookie = document.querySelector("#cookie")
const fortuneCard = document.querySelector("#fortune-card")
const fortuneText = document.querySelector("#fortune-card p")

/*** RUNTIME ***/
cookie.addEventListener("click", handleCookieClick)

function handleCookieClick() {
  let cookieState = parseInt(
    cookie
      .src
      .slice(
        cookie.src.length - 5,
        cookie.src.length - 4
      )
  )
  if (cookieState === 1) showFortune()
  if (cookieState === 5) {
    cookieState = 0
    hideFortune()
  }
  cookieState++
  cookie.src = `assets/${cookieState}.png`
}

/*** FORTUNE GENERATOR ***/
function showFortune() {
  let phrase = tracery.createGrammar(fortune[randomInt(0, 1)]);
  let story = phrase.flatten("#fortune#");
  fortuneCard.style.visibility = "visible";
  fortuneText.innerHTML = story;
}

function hideFortune() {
  fortuneCard.style.visibility = "hidden";
  fortuneText.innerHTML = "";
}

/*** HELPER METHODS ***/
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}