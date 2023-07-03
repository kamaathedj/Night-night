import { useStoreState } from '../hooks/Easy-peasy-hooks';
import Header from '../components/Header';

function Home() {
  const { count, data } = useStoreState((state) => state);
  return (
    <>
      <Header name="Gitar solutions" count={count}>
        logo here .........
      </Header>
      <ul className="list">
        {data.map((x) => (
          <>
            <li key={x.title}>{x.description}</li>
            <button type="submit">{x.title}</button>
          </>
        ))}
      </ul>
    </>
  );
}

export default Home;
