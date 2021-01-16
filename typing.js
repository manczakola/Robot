const box = document.querySelector('.typing');
const text = ['Lorem, ipsum dolor sit amet consectetur adipisicing elit', 'Voluptate nobis ab error in quibusdam animi vitae', 'repudiandae id. Ex, deserunt quis!', 'Hic, exercitationem. Ex soluta deleniti, laudantium fuga nesciunt consequuntu'];
let wordIndex = 0;
let textIndex = 0;
let oldTime = 0;
let speed = 100;
let stop = 3000;
let activeDOMElement = box;

const typing = (newTime) => {
  const letter = text[textIndex].substr(wordIndex, 1);
  if (newTime - oldTime > speed) {
    if (wordIndex === text[textIndex].length - 1) {
      if (textIndex === text.length - 1) {
        return
      }

      return setTimeout(() => {
        box.textContent = '';
        textIndex++;
        wordIndex = 0;
        requestAnimationFrame(typing)
      }, stop)

    } else if (wordIndex === 0 || letter === "^") {
      const p = document.createElement('p');
      box.appendChild(p);
      activeDOMElement = p;
    }

    if (!(letter === '^')) {
      activeDOMElement.textContent += letter;
    }

    oldTime = newTime;


    wordIndex++;
  }
  requestAnimationFrame(typing);

}

typing();