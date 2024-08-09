const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let array = expr.split('');
   let arraySize = 10
   let arrayNew = [];
  for(let i = 0; i < array.length; i += arraySize){
    arrayNew.push(array.slice(i, i + arraySize))
  }
  let res = arrayNew.map((e) => e.join('')).map((e) => e.replaceAll('10','.').replaceAll('11','-').replaceAll('00',''));
  let str = '';
  res.forEach((e) => {
    if(MORSE_TABLE[e] !== undefined) str += MORSE_TABLE[e];
    else if (MORSE_TABLE[e] === undefined) str += ' ';
  })
  return str
}

module.exports = {
    decode
}

console.log(decode('hello word'))