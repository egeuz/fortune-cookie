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
const cookie = document.getElementById("cookie")
const fortuneCard = document.getElementById("fortune-card")


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
  if (cookieState === 5) cookieState = 1
  cookieState++
  cookie.src = `assets/${cookieState}.png`
}

function showFortune() {
  let phrase = tracery.createGrammar(fortune[randomInt(0, 1)]);
  let story = phrase.flatten("#fortune#");
  fortuneCard.innerHTML = story;
}





/*** FORTUNE GENERATOR ***/


function main() {
  let phrase = tracery.createGrammar(fortune[randomInt(0, 1)]);
  let story = phrase.flatten("#fortune#");

  const storyDiv = document.createElement('div');
  storyDiv.style = "font-size: 30px; margin: 10%; line-height: 1.5;";
  storyDiv.textContent = story;

  document.body.insertAdjacentElement("beforeend", storyDiv);
}


setTimeout(main, 10);

/*** HELPER METHODS ***/
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}