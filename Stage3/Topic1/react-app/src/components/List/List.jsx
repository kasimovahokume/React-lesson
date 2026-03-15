








import styles from './List.module.css';

export function List({items}){
    return(
        <ul className={styles.List}>
            {items.map(item => <li className={styles.Item} key={item}>{item}</li>)}
        </ul>
    )
}