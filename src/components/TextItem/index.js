import styles from './textitem.module.css'

function TextItem ({category, title, time}) {
return (
    <article className={styles.TextItemContainer}>
        <section className={styles.TextItemCategory}>{category}</section>
        <div className={styles.TextItemTitle}>
        {title}
        </div>
    </article>
)}
export default TextItem;