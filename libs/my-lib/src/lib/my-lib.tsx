import styles from './my-lib.module.css';
import { MyLib2 } from '@appimports/my-lib-2';
/* eslint-disable-next-line */
export interface MyLibProps {}

export function MyLib(props: MyLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyLib!</h1>
      <MyLib2 />
    </div>
  );
}

export default MyLib;
