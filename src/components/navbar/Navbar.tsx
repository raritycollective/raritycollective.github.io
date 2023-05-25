export const Navbar = () => {
  const menuItems = [
    {
      label: "Home",
      link: ''
    },
    {
      label: 'Services',
      link: ''
    },
    {
      label: 'Contact',
      link: ''
    },
  ];

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            RrtyCltv
          </a>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBurgerTarget">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBurgerTarget" className="navbar-menu">
          <div className="navbar-start">
            {menuItems.map((item, index) => (
              <a className="navbar-item">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">
              Home
            </a>

            <a className="navbar-item">
              Services
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                Book
              </a>

              <div className="navbar-dropdown">
                <a className="navbar-item">
                  James Michel
                </a>
                <a className="navbar-item">
                  Person 2
                </a>
                <a className="navbar-item">
                  Person 4
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </nav>
    </>
  );
}