import Dropdown from '@/components/dropdown';
import FilterByRegion from './features/filter-by-region';


const Home = () => {
  return (
    <div>
      Home
      <Dropdown title='Filter by Region'>
        <FilterByRegion />
      </Dropdown>
    </div>
  );
};



export default Home;
