import styles from "./List.module.css";

export function List({ items, OnClickItem }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li 
          key={index} 
          onClick={() => OnClickItem(item)} 
          style={{ cursor: "pointer", padding: "5px", backgroundColor:"red", margin:'5px' }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
