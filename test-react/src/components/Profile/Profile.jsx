
import styles from "./Profile.module.css"

export function Profile(){
    return(
        <div className={styles.Profile}>
            <img className={styles.ProfileImg} src="https://cdn.rafled.com/anime-icons/images/1a94872b9c0ad664f1e2d222697a1c723860dd872e1049af1c445b4af4ebdbd8.jpg" alt="rem" />
            <h3 className={styles.tit}>Profile</h3>
            <p  className={styles.ProText}>Front Devloper</p>
        </div>
    )
}