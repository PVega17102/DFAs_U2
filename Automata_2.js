class DFA2 {
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
      console.log('Actual DFA2 state: ',state);
      if (!this.alphabet.includes(char)) return false;
      state = this.transition(state, char);
    }
    console.log('Final DFA2 state: ',state);
    return this.accepting.includes(state);
  }
}

const input2 = document.getElementById('a2i');
const output2 = document.getElementById('a2o');
const button2 = document.getElementById('a2b');

button2.addEventListener('click', (event) => {

  const states = [1, 2, 3, 4];
  const alphabet = ['0', '1', 'E'];
  const transition = (state, char) => {
    switch (state) {
      case 1:
        if (char == '0') {
          return char === '0' ? 1 : 4;
        } else if (char == '1') {
          return char === '1' ? 2 : 4;
        }
      case 2:
        if (char == '0') {
          return char === '0' ? 2 : 4;
        } else if (char == '1') {
          return char === '1' ? 3 : 4;
        } else if (char == 'E') {
          return char === 'E' ? 1 : 4;
        }
      case 3:
        if (char == '0') {
          return char === '0' ? 4 : 4;
        } else if (char == '1') {
          return char === '1' ? 3 : 4;
        }
    }
  };
  const start = 1;
  const accepting = [4];

  const dfa2 = new DFA2(states, alphabet, transition, start, accepting);
  if (dfa2.recognize(input2.value)) {
    output2.textContent = 'The input is: Valid'
  } else {
    output2.textContent = 'The input is: Invalid'
  }

});