import "./styles/global.css";
import { Navbar } from "./Navbar";
import  { Button } from './components/Button/Button';
import { Profile } from "./components/Profile/Profile"
import { List } from "./components/List/List"
import Products from "./components/Products/Products";
import Container from "./components/Container/Container";
import { Header } from "./components/Header/Header";
import {UserCard} from "./components/UserCard";
import { foods } from "./mock/data";
import { FoodCard } from "./components/FoodCard";
import { ColorButton } from "./components/ColorButton";



export function App() {
  
  return (
    <>
    <Products/>
    </>
  );
}

export default App
