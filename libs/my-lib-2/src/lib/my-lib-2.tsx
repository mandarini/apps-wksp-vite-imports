import styles from './my-lib-2.module.css';

/* eslint-disable-next-line */
export interface MyLib2Props {}

export function MyLib2(props: MyLib2Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyLib2!</h1>
    </div>
  );
}

export default MyLib2;
