class DFA3 {
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
      console.log('Actual DFA3 state: ',state);
      if (!this.alphabet.includes(char)) return false;
      state = this.transition(state, char);
    }
    console.log('Final DFA3 state: ',state);
    return this.accepting.includes(state);
  }
}

const input3 = document.getElementById('a3i');
const output3 = document.getElementById('a3o');
const button3 = document.getElementById('a3b');

button3.addEventListener('click', (event) => {

  const states = [1, 2, 3];
  const alphabet = ['a', 'b', 'E'];
  const transition = (state, char) => {
    switch (state) {
      case 1:
        if (char == 'a') {
          return char === 'a' ? 2 : 3;
        }
      case 2:
        if (char == 'a') {
          return char === 'a' ? 2 : 3;
        } else if (char == 'b') {
          return char === 'b' ? 3 : 3;
        }
      case 3:
        if (char == 'E') {
          return char === 'E' ? 1 : 3;
        }
    }
  };
  const start = 1;
  const accepting = [3];

  const dfa3 = new DFA3(states, alphabet, transition, start, accepting);
  if (dfa3.recognize(input3.value)) {
    output3.textContent = 'The input is: Valid'
  } else {
    output3.textContent = 'The input is: Invalid'
  }

});