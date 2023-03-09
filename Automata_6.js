class DFA6 {
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
      console.log('Actual DFA6 state: ',state);
      if (!this.alphabet.includes(char)) return false;
      state = this.transition(state, char);
    }
    console.log('Final DFA6 state: ',state);
    return this.accepting.includes(state);
  }
}

const input6 = document.getElementById('a6i');
const output6 = document.getElementById('a6o');
const button6 = document.getElementById('a6b');

button6.addEventListener('click', (event) => {

  const states = [1, 2, 3, 4, 5, 6, 7];
  const alphabet = ['a', 'b', 'E'];
  const transition = (state, char) => {
    switch (state) {
      case 1:
        if (char == 'a') {
          return char === 'a' ? 2 : 7;
        }
      case 2:
        if (char == 'a') {
          return char === 'a' ? 3 : 7;
        }
      case 3:
        if (char == 'b') {
          return char === 'b' ? 4 : 7;
        } else if (char == 'E') {
          return char === 'E' ? 1 : 7;
        }
      case 4:
        if (char == 'b') {
          return char === 'b' ? 5 : 7;
        }
      case 5:
        if (char == 'b') {
          return char === 'b' ? 6 : 7;
        } else if (char == 'E') {
          return char === 'E' ? 3 : 7;
        }
      case 6:
        if (char == 'a') {
          return char === 'a' ? 7 : 7;
        } else if (char == 'b') {
          return char === 'b' ? 6 : 7;
        }
    }
  };
  const start = 1;
  const accepting = [7];

  const dfa6 = new DFA6(states, alphabet, transition, start, accepting);
  if (dfa6.recognize(input6.value)) {
    output6.textContent = 'The input is: Valid'
  } else {
    output6.textContent = 'The input is: Invalid'
  }

});