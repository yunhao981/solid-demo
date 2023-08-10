import { createSignal, type Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import { TextField, Typography } from '@suid/material';
import { Button } from '@suid/material';

const App: Component = () => {
  const [level, setLevel] = createSignal(0);
  const [xp, setXP] = createSignal(0);
  const calculateXP = (value: string) => {
    let lv:number = +value;
    let xp;
    if (lv == 0 || lv == 1) {
      xp = 0;
    } else if (lv >= 2 && lv <= 201) {
      xp = (lv-1) * (lv-2) * 25 + 30;
    } else if (lv >= 202 && lv <= 299) {
      xp = 250 * Math.pow((lv - 200), 2) + 9250 * (lv - 200) + 985530;
    } else {
      xp = 500 * Math.pow((lv - 300), 2) + 59500 * (lv - 300) + 4410530;
    }
    console.log(xp);
    setXP(xp);
  }

  return (
    <div class={styles.App}>
      <header class={styles.header}>
          <h1>{xp()}</h1>
          <br />
          <TextField
              id="level"
              label="level"
              variant="outlined"
              margin="normal"
              onChange={(event, value) => calculateXP(value)}
          />
          <br />
      </header>
    </div>
  );
};

export default App;
