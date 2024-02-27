import './country-item.css';
import { ICountry } from '@/types';

const Country = ({
  data,
  onClick,
}: {
  data: ICountry;
  onClick: (country: ICountry) => void;
}) => {
  const { name, capital, region, population, flag } = data;

  return (
    <article onClick={() => onClick(data)} key={name} className='country'>
      <header>
        <img loading='lazy' className='country__image' src={flag} alt={name} />
      </header>
      <section className='country__details'>
        <h2>{name}</h2>
        <ul>
          <li>
            <h3 className='country__details__title'>{'Population: '}</h3>
            {population}
          </li>
          <li>
            <h3 className='country__details__title'>{'Region: '}</h3>
            {region}
          </li>
          <li>
            <h3 className='country__details__title'>{'Capital: '}</h3>
            {capital}
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Country;
