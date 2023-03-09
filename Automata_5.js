class DFA5 {
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
      console.log('Actual DFA5 state: ',state);
      if (!this.alphabet.includes(char)) return false;
      state = this.transition(state, char);
    }
    console.log('Final DFA5 state: ',state);
    return this.accepting.includes(state);
  }
}

const input5 = document.getElementById('a5i');
const output5 = document.getElementById('a5o');
const button5 = document.getElementById('a5b');

button5.addEventListener('click', (event) => {

  const states = [1, 2];
  const alphabet = ['1'];
  const transition = (state, char) => {
    switch (state) {
      case 1:
        if (char == '1') {
          return char === '1' ? 2 : 1;
        }
      case 2:
        if (char == '1') {
          return char === '1' ? 1 : 1;
        }
    }
  };
  const start = 1;
  const accepting = [1];

  const dfa5 = new DFA5(states, alphabet, transition, start, accepting);
  if (dfa5.recognize(input5.value)) {
    output5.textContent = 'The input is: Valid'
  } else {
    output5.textContent = 'The input is: Invalid'
  }

});