import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container flex justify-between items-center'>
        <h1>{'Where in the world?'}</h1>
        <button className='btn-theme'>
          <i className='btn-theme__icon fa-solid fa-moon'></i>
          <span className='semi-bold'>{'Dark Mode'}</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
