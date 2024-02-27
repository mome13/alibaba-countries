import {
  NavigateFunction,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import './details.css';
import Button from '@/components/button';
import { ICountry } from '@/types';
import { useGetCountry } from '@/api/use-get-country';

const Details = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const country: ICountry = location?.state;
  const { countryId } = useParams();

  const { isLoading, data, isError } = useGetCountry(countryId);

  return (
    <div className='container'>
      <section className='details-header'>
        <Button
          onClick={() => {
            navigate(-1);
          }}
        >
          <div className='flex items-center gap-1'>
            <i className='fa-solid fa-arrow-left'></i>
            {'Back'}
          </div>
        </Button>
      </section>

      {isLoading && !(country || data) && <div>loading...</div>}
      {isError && <div>No result founded</div>}

      <main className='details'>
        {(country || data) && (
          <CountryDetail country={country || data} navigate={navigate} />
        )}
      </main>
    </div>
  );
};

const CountryDetail = ({
  country,
  navigate,
}: { country: ICountry } & { navigate: NavigateFunction }) => {
  return (
    <>
      <section className='details__image'>
        <img loading='lazy' src={country.flag} alt={country.name} />
      </section>
      <section className='details__contents'>
        <h1>{country.name}</h1>
        <section className='details__contents__info'>
          <h2>
            <span className='bold'>{'Native Name: '}</span>
            {country.nativeName}
          </h2>
          <h2>
            <span className='bold'>{'Population: '}</span>
            {country.population}
          </h2>
          <h2>
            <span className='bold'>{'Region: '}</span>
            {country.region}
          </h2>
          <h2>
            <span className='bold'>{'Sub Region: '}</span>
            {country.subregion}
          </h2>
          <h2>
            <span className='bold'>{'Capital: '}</span>
            {country.capital}
          </h2>
          <h2>
            <span className='bold'>{'Top Level Domain: '}</span>
            {country?.topLevelDomain?.join(', ')}
          </h2>
          <h2>
            <span className='bold'>{'Currencies: '}</span>
            {country?.currencies?.map(({ name }) => name).join(', ')}
          </h2>
          <h2>
            <span className='bold'>{'Languages: '}</span>
            {country?.languages?.map(({ name }) => name).join(', ')}
          </h2>
        </section>
        <section className='details__contents__border'>
          <h2 className='bold'>{'Border Countries: '}</h2>
          {country?.borders && (
            <div className='border-countries'>
              {country.borders.map((CountryCode) => (
                <Button
                  key={CountryCode}
                  onClick={() => {
                    navigate(`/${CountryCode}`, {
                      state: null,
                    });
                  }}
                >
                  {CountryCode}
                </Button>
              ))}
            </div>
          )}
        </section>
      </section>
    </>
  );
};

export default Details;
