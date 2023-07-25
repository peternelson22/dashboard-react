import './navbar.scss';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <img src='logo.svg' alt='logo' />
        <span>rennnns</span>
      </div>
      <div className='icons'>
        <img src='search.svg' alt='' className='icon' />
        <img src='app.svg' alt='' className='icon' />
        <img src='expand.svg' alt='' className='icon' />
        <div className='notification'>
          <img src='notifications.svg' alt='' />
          <span>1</span>
        </div>
        <div className='user'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuDoisN_XW3IVsEn4qXXTiqfTFBCCQOWqDFg&usqp=CAU'
            alt=''
          />
          <span>nel</span>
        </div>
        <img src='settings.svg' alt='' className='icon' />
      </div>
    </nav>
  );
};
export default Navbar;
