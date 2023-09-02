import { Hero } from "../../components/Hero";
import { ComicsShop } from "../../components/ComicsShop";
import { useComics } from "../../hooks/useComics";
import { Loader } from "../../components/Loader";

function Home  ()  {
  const { marvelComics, isLoading } = useComics();
  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        {isLoading && marvelComics.length === 0 ? (
          <Loader />
        ) : (
          <ComicsShop comics={marvelComics} />
        )}
      </section>
    </>
  );
}

export default Home;