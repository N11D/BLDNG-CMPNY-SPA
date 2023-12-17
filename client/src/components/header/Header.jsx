import '../../styles/navigation.css'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/authContext';

export default function Header() {
    
    const {isAuthenticated} = useContext(AuthContext);

    return (<nav className="nav-container">
    <ul className="nav-list">
      {isAuthenticated && (
        <>
      <li className="nav-item">
        <Link to="/project/create">Създай проект</Link>
      </li>
      <li className="nav-item">
        <span>Проекти</span>
        <ul className="sub-menu">
          <li><Link to="/projects">Текущи</Link></li>
        </ul>
      </li>
      <li className="nav-item">
        <Link to="/contacts">Контакти</Link>
      </li>
      <li className="nav-item">
        <Link to="/logout">Изход</Link>
      </li>
      </>
      )}
      {!isAuthenticated && (
        <>
        <li className="nav-item">
        <Link to="/">Начало</Link>
      </li>
      <li className="nav-item">
        <span>Проекти</span>
        <ul className="sub-menu">
          <li><Link to="/projects">Текущи</Link></li>
        </ul>
      </li>
        <li className="nav-item">
        <Link to="/login">Вход</Link>
      </li>
      <li className="nav-item">
        <Link to="/contacts">Контакти</Link>
      </li>
      <li className="nav-item">
        <Link to="/register">Регистрация</Link>
      </li>
        </>
      )}
    </ul>
  </nav>
    );
}