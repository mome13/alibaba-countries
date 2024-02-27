import Dropdown from '@/components/dropdown';
import FilterByRegion from './features/filter-by-region';
import Search from '@/components/search';
import './home.css';
import { countries } from '@/data';
import Country from '@/components/country-item';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='container'>
      <section className='home-filters'>
        <Search />
        <Dropdown title='Filter by Region'>
          <FilterByRegion />
        </Dropdown>
      </section>

      <main className='home-contents'>
        {countries.map(
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
                navigate(`/${country.name.toLowerCase()}`, {
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
