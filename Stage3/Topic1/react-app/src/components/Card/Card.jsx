import styles from "./Card.module.css";

export function Card(){
    return (
        <section className={styles.Sec}>
            <img className={styles.Img} src="https://media.licdn.com/dms/image/v2/D4E0BAQGuxNl1VKC8xg/company-logo_200_200/B4EZshSVofHcAM-/0/1765790014525/img_media_logo?e=2147483647&v=beta&t=IbmJ4UipXNuYyGHXmJAJUurD3tPxSk6s3qUuOSEpiqg" alt="" />
            <h1 className={styles.Card}>Title</h1>
            <p className={styles.Text} >Lorem ipsum dolor sit amet consectetur adipisicing elit. possimus e at rerum.</p>
        </section>
    )
}