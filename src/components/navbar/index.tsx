import './navbar.css';
import { useTheme } from '@/hooks/use-theme';

const Navbar = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className='navbar'>
      <div className='container flex justify-between items-center'>
        <h1>{'Where in the world?'}</h1>
        <button onClick={() => toggleTheme()} className='btn-theme'>
          <i className='btn-theme__icon fa-solid fa-moon'></i>
          <span className='semi-bold'>{`${
            theme === 'Dark' ? 'Light' : 'Dark'
          } Mode`}</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
