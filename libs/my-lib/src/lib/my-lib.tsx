import styles from './my-lib.module.css';

/* eslint-disable-next-line */
export interface MyLibProps {}

export function MyLib(props: MyLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyLib!</h1>
    </div>
  );
}

export default MyLib;
