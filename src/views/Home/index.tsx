import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';

import { publicRuntimeConfig } from '@configs/environtment';
import { useAppDispatch, useAppSelector } from '@store/hook';
import postAction from '@store/post/actions';

import styles from './styles.module.scss';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { fetch } = useAppSelector((state) => state.post);

  const handleFetch = () => {
    dispatch(postAction.fetchData({ reFetch: true }));
  };
  return (
    <div className={`${styles.main} ${inter.className}`}>
      <h1>{`${publicRuntimeConfig.PORT}: ${publicRuntimeConfig.TEST}`}</h1>
      <div className={styles.button}>
        <button onClick={handleFetch}>Re-Fetch</button>
        <button onClick={() => router.push('/about')}>About</button>
      </div>
      {fetch.data.map((item) => (
        <div className={styles.card} key={item.id}>
          <h1>{item.id}</h1>
          <p>{JSON.stringify(item)}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
