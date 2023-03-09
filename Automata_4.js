class DFA4 {
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
      console.log('Actual DFA4 state: ',state);
      if (!this.alphabet.includes(char)) return false;
      state = this.transition(state, char);
    }
    console.log('Final DFA4 state: ',state);
    return this.accepting.includes(state);
  }
}

const input4 = document.getElementById('a4i');
const output4 = document.getElementById('a4o');
const button4 = document.getElementById('a4b');

button4.addEventListener('click', (event) => {

  const states = [1, 2, 3, 4, 5, 6];
  const alphabet = ['a', 'b', 'E'];
  const transition = (state, char) => {
    switch (state) {
      case 1:
        if (char == 'a') {
          return char === 'a' ? 2 : 6;
        }
      case 2:
        if (char == 'a') {
          return char === 'a' ? 2 : 6;
        } else if (char == 'b') {
          return char === 'b' ? 3 : 6;
        }
      case 3:
        if (char == 'a') {
          return char === 'a' ? 4 : 6;
        } else if (char == 'E') {
          return char === 'E' ? 1 : 6;
        }
      case 4:
        if (char == 'b') {
          return char === 'b' ? 5 : 6;
        }
      case 5:
        if (char == 'b') {
          return char === 'b' ? 6 : 6;
        }
    }
  };
  const start = 1;
  const accepting = [6];

  const dfa4 = new DFA4(states, alphabet, transition, start, accepting);
  if (dfa4.recognize(input4.value)) {
    output4.textContent = 'The input is: Valid'
  } else {
    output4.textContent = 'The input is: Invalid'
  }

});