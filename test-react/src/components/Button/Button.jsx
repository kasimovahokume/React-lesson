
import styles from"./Button.module.css"

export function Button ({label,onClick}){

    return (
        <button
        onClick={onClick}
        style={{padding:'20px',cursor: 'pointer', backgroundColor:'yellow',border:'none', margin:'5px'}}>
            {label}
        </button>
    );
};