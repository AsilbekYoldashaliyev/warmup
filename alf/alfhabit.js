const latinToKrill = {
  a: "а",
  b: "б",
  v: "в",
  g: "г",
  d: "д",
  e: "е",
  yo: "ё",
  j: "ж",
  z: "з",
  i: "и",
  y: "й",
  k: "к",
  l: "л",
  m: "м",
  n: "н",
  o: "о",
  p: "п",
  r: "р",
  s: "с",
  t: "т",
  u: "у",
  f: "ф",
  x: "х",
  ch: "ч",
  sh: "ш",
  yu: "ю",
  ya: "я",
  q: "қ",
  h: "ҳ",
  ye: "е",
};

function translateBack(text) {
  let translate = "";

  for (let i = 0; i < text.length; i++) {
    const letter = text[i];

    if (letter == "s" && text[i + 1] == "h") {
      translate += latinToKrill["sh"];
      i++;
    } else if (letter == "c" && text[i + 1] == "h") {
      translate += latinToKrill["ch"];
      i++;
    } else {
      translate += latinToKrill[letter];
    }
  }

  return translate;
}

console.log(translateBack("ss"));
