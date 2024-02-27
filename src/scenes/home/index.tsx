import Dropdown from '@/components/dropdown';
import FilterByRegion from './features/filter-by-region';
import Search from '@/components/search';
import './home.css';
import Country from '@/components/country-item';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useGetCountries } from '@/api/use-get-countries';

const Home = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { isLoading, data, isError } = useGetCountries(searchParams.toString());

  return (
    <div className='container'>
      <section className='home-filters'>
        <Search />
        <Dropdown title='Filter by Region'>
          <FilterByRegion />
        </Dropdown>
      </section>

      <main className='home-contents'>
        {isLoading && <div>loading...</div>}
        {((!isLoading && !data?.length) || isError) && (
          <div>No result founded</div>
        )}
        {data &&
          data.map(
            ({
              name,
              flag,
              population,
              region,
              capital,
              nativeName,
              subregion,
              topLevelDomain,
              currencies,
              languages,
              borders,
              alpha3Code,
            }) => (
              <Country
                key={alpha3Code}
                data={{
                  name,
                  flag,
                  population,
                  region,
                  capital,
                  nativeName,
                  subregion,
                  topLevelDomain,
                  currencies,
                  languages,
                  borders,
                  alpha3Code,
                }}
                onClick={(country) => {
                  navigate(`/${country.alpha3Code.toLowerCase()}`, {
                    state: country,
                  });
                }}
              />
            )
          )}
      </main>
    </div>
  );
};

export default Home;
