class DFA1 {
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

const input1 = document.getElementById('a1i');
const output1 = document.getElementById('a1o');
const button1 = document.getElementById('a1b');

button1.addEventListener('click', (event) => {

  const states = [1, 2, 3, 4, 5, 6];
  const alphabet = ['0', '1'];
  const transition = (state, char) => {
    switch (state) {
      case 1:
        if (char == '0') {
          return char === '0' ? 2 : 6;
        } else {
          return 6;
        }
      case 2:
        if (char == '0') {
          return char === '0' ? 2 : 6;
        } else if (char == '1') {
          return char === '1' ? 3 : 6;
        }
      case 3:
        if (char == '0') {
          return char === '0' ? 3 : 6;
        } else if (char == '1') {
          return char === '1' ? 4 : 6;
        }
      case 4:
        if (char == '0') {
          return char === '0' ? 5 : 6;
        } else {
          return 6;
        }
      case 5:
        if (char == '0') {
          return char === '0' ? 5 : 6;
        } else if (char == '1') {
          return char === '1' ? 6 : 6;
        }
    }
  };
  const start = 1;
  const accepting = [6];

  const dfa1 = new DFA1(states, alphabet, transition, start, accepting);
  if (dfa1.recognize(input1.value)) {
    output1.textContent = 'The input is: Valid'
  } else {
    output1.textContent = 'The input is: Invalid'
  }

});