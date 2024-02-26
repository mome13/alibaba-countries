import Dropdown from '@/components/dropdown';
import FilterByRegion from './features/filter-by-region';
import Search from '@/components/search';
import './home.css';

const Home = () => {
  return (
    <main className='container'>
      <div className='home-filters'>
        <Search />
        <Dropdown title='Filter by Region'>
          <FilterByRegion />
        </Dropdown>
      </div>
    </main>
  );
};

export default Home;
