const formEl = document.querySelector(".form");
const answerEl = document.querySelector(".answer");

formEl.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const {
    elements: { inputString },
  } = evt.currentTarget;
  const wordsArr = inputString.value.split(" ");
  const outputArr = [];
  wordsArr.forEach((item) => {
    //разбор каждого слова
    let chars = item.split("");
    if (chars.length !== 0) {
      let char = getFirstUniqChar(chars);
      outputArr.push(char);
    }
  });
  if (outputArr.length > 0) {
    const result = getFirstUniqChar(outputArr);
    answerEl.textContent = result;
  }
}
function getFirstUniqChar(array) {
  //массив символов
  let s;
  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    const ar = array.filter((el, ind) => ind != index);
    if (!ar.some((item) => item === element)) {
      s = element;
      break;
    }
  }
  return s;
}
