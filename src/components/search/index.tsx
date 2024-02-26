import { useSearchParams } from 'react-router-dom';
import './search.css';
import { useRef, useState } from 'react';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);

  const [search, setSearch] = useState(searchParams.get('search') ?? undefined);

  const onSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    search ? searchParams.set('search', search) : searchParams.delete('search');
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
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(event.currentTarget.value)
          }
          defaultValue={search}
        />
      </form>
    </div>
  );
};

export default Search;
