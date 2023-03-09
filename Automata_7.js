class DFA7 {
  constructor(states, alphabet, transition, start, accepting) {
    this.states = states;
    this.alphabet = alphabet;
    this.transition = transition;
    this.start = start;
    this.accepting = accepting;
  }

  recognize(string) {
    let state = this.start;
    for (const char of string) {
      console.log('Actual DFA7 state: ',state);
      if (!this.alphabet.includes(char)) return false;
      state = this.transition(state, char);
    }
    console.log('Final DFA7 state: ',state);
    return this.accepting.includes(state);
  }
}

const input7 = document.getElementById('a7i');
const output7 = document.getElementById('a7o');
const button7 = document.getElementById('a7b');

button7.addEventListener('click', (event) => {

  const states = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const alphabet = ['a', 'b', 'E'];
  const transition = (state, char) => {
    switch (state) {
      case 1:
        if (char == 'a') {
          return char === 'a' ? 2 : 11;
        }
      case 2:
        if (char == 'a') {
          return char === 'a' ? 3 : 11;
        }
      case 3:
        if (char == 'a') {
          return char === 'a' ? 4 : 11;
        } else if (char == 'E') {
          return char === 'E' ? 2 : 11;
        }
      case 4:
        if (char == 'b') {
          return char === 'b' ? 5 : 11;
        }
      case 5:
        if (char == 'b') {
          return char === 'b' ? 6 : 11;
        } else if (char == 'E') {
          return char === 'E' ? 4 : 11;
        }
      case 6:
        if (char == 'a') {
          return char === 'a' ? 7 : 11;
        }
      case 7:
        if (char == 'a') {
          return char === 'a' ? 7 : 11;
        } else if (char == 'b') {
          return char === 'b' ? 8 : 11;
        }
      case 8:
        if (char == 'b') {
          return char === 'b' ? 9 : 11;
        }
      case 9:
        if (char == 'b') {
          return char === 'b' ? 10 : 11;
        } else if (char == 'E') {
          return char === 'E' ? 1 : 11;
        }
      case 10:
        if (char == 'b') {
          return char === 'b' ? 11 : 11;
        }
      case 11:
        if (char == 'a') {
          return char === 'a' ? 11 : 11;
        } else if (char == 'b') {
          return char === 'b' ? 11 : 11;
        }
    }
  };
  const start = 1;
  const accepting = [11];

  const dfa7 = new DFA7(states, alphabet, transition, start, accepting);
  if (dfa7.recognize(input7.value)) {
    output7.textContent = 'The input is: Valid'
  } else {
    output7.textContent = 'The input is: Invalid'
  }

});