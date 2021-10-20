import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../scss/style.scss';
import { FaAngleLeft, FaMicrophone, FaCog } from 'react-icons/fa';

const NavBar = () => {
  const home = useSelector((state) => state.currency.home);

  return (
    <div className="NavBar-Container">
      <Heading home={home} />
    </div>
  );
};

const Heading = ({ home }) => {
  if (!home) {
    return (
      <div className="NavBar-Container">
        <p>2021</p>
        <p className="NavBar-Title">Top 10 CryptoCurrencies</p>
        <div>
          <i className="Mic"><FaMicrophone /></i>
          <i><FaCog /></i>
        </div>
      </div>
    );
  }
  return (
    <div className="NavBar-Container">
      <p>
        <NavLink to="/">
          <FaAngleLeft />
        </NavLink>
      </p>
      <p>Top CryptoCurrencies Market Cap</p>
      <div>
        <i className="Mic"><FaMicrophone /></i>
        <i><FaCog /></i>
      </div>
    </div>
  );
};

export default NavBar;
