import { useSearchParams } from 'react-router-dom';
import './search.css';
import { assertIsFormFieldElement } from '@/lib/utils';
import { useRef } from 'react';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);

  const onSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const search = event.currentTarget[0];
    assertIsFormFieldElement(search);
    search?.value
      ? searchParams.set('search', search?.value)
      : searchParams.delete('search');
    setSearchParams(searchParams);
  };

  return (
    <div className='search'>
      <form ref={formRef} className='search-form' onSubmit={onSearch}>
        <i className='fa-solid fa-magnifying-glass'></i>
        <input
          className='search-form__input'
          placeholder={'Search for a country...'}
          type='text'
          name='search'
        />
      </form>
    </div>
  );
};

export default Search;
