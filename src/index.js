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
    let arr = [];
    let arr2 = [];
    let kol = 0;
    let i = 0;
let code =[]
     arr = expr.match(/.{1,10}/g);

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === '**********') continue
        arr[i] = +arr[i];
        arr[i]= arr[i].toString()
    }


     for(i=0; i<arr.length; i++){
     		if (arr[i] === '**********'){
     			code.push('+')
     		} else{
     			arr2 = arr[i].match(/.{1,2}/g)
     			for(let j = 0;j<arr2.length; j++){
     				if (arr2[j] === '10'){
     					code.push('.');
     				}
     				if (arr2[j] === '11'){
     					code.push('-');
     				}
     			}
     		}


     		code.push(' ')
     	}






















code = code.join('').split(' ');

      for(var key in MORSE_TABLE){
        for(let c = 0; c< code.length; c ++){
          if(code[c] === key){
            code[c] = MORSE_TABLE[key]
          } else if(code[c] === '+'){
            code[c] = ' ';
          }
        }
      }
      
      return code.join('');
  }

module.exports = {
    decode
}