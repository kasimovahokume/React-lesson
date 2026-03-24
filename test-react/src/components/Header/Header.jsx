import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Header.module.css';

export function Header({label}){
    return (
      <div style={{color:'white',backgroundColor:'blue',padding:'20 10'
      }}>
        <h1>{label}</h1>
      </div>
  );
}