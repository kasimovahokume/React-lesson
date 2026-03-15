import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Header.module.css';

export function Header(){
    return (
      <header style={{ background: '#282c34', padding: '24px 32px', color:'white' }}>
        <h1>
          Welcome to My Website
        </h1>
      </header>
  );
}