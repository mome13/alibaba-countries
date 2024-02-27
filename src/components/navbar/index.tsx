import './navbar.css';
import { useTheme } from '@/hooks/use-theme';

const Navbar = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <header className='navbar'>
      <div className='container flex justify-between items-center'>
        <h1>{'Where in the world?'}</h1>
        <button onClick={() => toggleTheme()} className='btn-theme'>
          <i
            className={`btn-theme__icon ${
              theme === 'Dark' ? 'fa-solid' : 'fa-regular'
            } fa-moon`}
          ></i>
          <span className='semi-bold'>{`Dark Mode`}</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
