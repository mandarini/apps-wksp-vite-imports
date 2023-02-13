// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import { MyLib } from '@appimports/my-lib';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      <NxWelcome title="web" />
      <MyLib />
      <div />
    </>
  );
}

export default App;
